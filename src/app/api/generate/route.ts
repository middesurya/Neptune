import { NextRequest, NextResponse } from 'next/server';
import Replicate from 'replicate';

/**
 * API Route for AI image generation across three parallel timelines.
 * Uses FLUX Schnell model via Replicate for fast, high-quality generations.
 *
 * @route POST /api/generate - Generate single world image
 * @route PUT /api/generate - Generate all three worlds in parallel
 */

// Initialize Replicate client with error handling
const getReplicateClient = () => {
  if (!process.env.REPLICATE_API_TOKEN) {
    return null;
  }
  return new Replicate({
    auth: process.env.REPLICATE_API_TOKEN,
  });
};

const MAX_PROMPT_LENGTH = 1000;
const ALLOWED_WORLDS = ['happened', 'couldHave', 'shouldHave'] as const;
type WorldKey = typeof ALLOWED_WORLDS[number];

// Style modifiers for the three parallel worlds
const worldStyles = {
  happened: {
    name: 'What Happened',
    suffix: ', post-apocalyptic industrial aesthetic, rusty metal, toxic atmosphere, amber lighting, desolate ruins, cinematic photography, dramatic shadows, 8k ultra detailed',
    color: '#C9A227'
  },
  couldHave: {
    name: 'What Could Have',
    suffix: ', nature reclaiming civilization, overgrown ruins, bioluminescent plants, mystical forest, cyan mist, ethereal atmosphere, magical realism, 8k ultra detailed',
    color: '#00f0ff'
  },
  shouldHave: {
    name: 'What Should Have',
    suffix: ', pristine utopia, clean futuristic architecture, golden hour, harmonious society, peaceful, idealistic future, warm amber glow, architectural photography, 8k ultra detailed',
    color: '#FFD700'
  }
};

export async function POST(request: NextRequest) {
  try {
    const body = await request.json().catch(() => null);

    if (!body) {
      return NextResponse.json(
        { error: 'Invalid JSON body' },
        { status: 400 }
      );
    }

    const { prompt, world } = body;

    // Validate prompt
    if (!prompt || typeof prompt !== 'string') {
      return NextResponse.json(
        { error: 'Prompt is required and must be a string' },
        { status: 400 }
      );
    }

    if (prompt.length > MAX_PROMPT_LENGTH) {
      return NextResponse.json(
        { error: `Prompt must be ${MAX_PROMPT_LENGTH} characters or less` },
        { status: 400 }
      );
    }

    // Validate world if provided
    if (world && !ALLOWED_WORLDS.includes(world as WorldKey)) {
      return NextResponse.json(
        { error: `Invalid world. Must be one of: ${ALLOWED_WORLDS.join(', ')}` },
        { status: 400 }
      );
    }

    const replicate = getReplicateClient();
    if (!replicate) {
      // Return placeholder for demo mode
      return NextResponse.json({
        success: true,
        demo: true,
        image: `https://placehold.co/1024x1024/0a0a12/C9A227?text=${encodeURIComponent(world || 'Neptune')}`,
        world: world || 'demo',
        prompt: prompt
      });
    }

    // Get world style or default to all three
    const style = world ? worldStyles[world as keyof typeof worldStyles] : null;
    const fullPrompt = style 
      ? `${prompt}${style.suffix}`
      : prompt;

    // Run FLUX Schnell (fast and cheap)
    const output = await replicate.run(
      "black-forest-labs/flux-schnell",
      {
        input: {
          prompt: fullPrompt,
          num_outputs: 1,
          aspect_ratio: "1:1",
          output_format: "webp",
          output_quality: 90,
        }
      }
    );

    // FLUX returns an array of URLs
    const imageUrl = Array.isArray(output) ? output[0] : output;

    return NextResponse.json({
      success: true,
      image: imageUrl,
      world: world,
      prompt: fullPrompt
    });

  } catch (error) {
    console.error('Generation error:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';

    // Handle specific Replicate errors
    if (errorMessage.includes('rate limit')) {
      return NextResponse.json(
        { error: 'Rate limit exceeded. Please try again later.' },
        { status: 429 }
      );
    }

    if (errorMessage.includes('authentication') || errorMessage.includes('unauthorized')) {
      return NextResponse.json(
        { error: 'API authentication failed' },
        { status: 401 }
      );
    }

    return NextResponse.json(
      { error: 'Failed to generate image. Please try again.' },
      { status: 500 }
    );
  }
}

/**
 * Generate images for all three parallel worlds simultaneously.
 * Uses Promise.all for parallel execution with individual error handling.
 */
export async function PUT(request: NextRequest) {
  try {
    const body = await request.json().catch(() => null);

    if (!body) {
      return NextResponse.json(
        { error: 'Invalid JSON body' },
        { status: 400 }
      );
    }

    const { prompt } = body;

    // Validate prompt
    if (!prompt || typeof prompt !== 'string') {
      return NextResponse.json(
        { error: 'Prompt is required and must be a string' },
        { status: 400 }
      );
    }

    if (prompt.length > MAX_PROMPT_LENGTH) {
      return NextResponse.json(
        { error: `Prompt must be ${MAX_PROMPT_LENGTH} characters or less` },
        { status: 400 }
      );
    }

    const replicate = getReplicateClient();
    if (!replicate) {
      // Demo mode - return placeholders
      return NextResponse.json({
        success: true,
        demo: true,
        results: Object.entries(worldStyles).map(([key, style]) => ({
          world: key,
          name: style.name,
          color: style.color,
          image: `https://placehold.co/1024x1024/0a0a12/${style.color.slice(1)}?text=${encodeURIComponent(style.name)}`,
          prompt: `${prompt}${style.suffix}`
        }))
      });
    }

    // Generate all three in parallel
    const generations = await Promise.all(
      Object.entries(worldStyles).map(async ([key, style]) => {
        const fullPrompt = `${prompt}${style.suffix}`;
        
        const output = await replicate.run(
          "black-forest-labs/flux-schnell",
          {
            input: {
              prompt: fullPrompt,
              num_outputs: 1,
              aspect_ratio: "1:1",
              output_format: "webp",
              output_quality: 90,
            }
          }
        );

        const imageUrl = Array.isArray(output) ? output[0] : output;

        return {
          world: key,
          name: style.name,
          color: style.color,
          image: imageUrl,
          prompt: fullPrompt
        };
      })
    );

    return NextResponse.json({
      success: true,
      results: generations
    });

  } catch (error) {
    console.error('Generation error:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';

    if (errorMessage.includes('rate limit')) {
      return NextResponse.json(
        { error: 'Rate limit exceeded. Please try again later.' },
        { status: 429 }
      );
    }

    if (errorMessage.includes('authentication') || errorMessage.includes('unauthorized')) {
      return NextResponse.json(
        { error: 'API authentication failed' },
        { status: 401 }
      );
    }

    return NextResponse.json(
      { error: 'Failed to generate images. Please try again.' },
      { status: 500 }
    );
  }
}
