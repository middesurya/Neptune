import { NextRequest, NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';

/**
 * API Route for AI image generation across three parallel timelines.
 * Uses Gemini 2.5 Flash Image (Nano Banana) for image generation.
 *
 * @route POST /api/generate - Generate single world image
 * @route PUT /api/generate - Generate all three worlds in parallel
 */

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

// Generate image using Gemini 2.5 Flash Image model
async function generateImage(genAI: GoogleGenerativeAI, prompt: string): Promise<string> {
  // Use gemini-2.5-flash-image (Nano Banana) for image generation
  const model = genAI.getGenerativeModel({ 
    model: "gemini-2.5-flash-image",
    generationConfig: {
      responseModalities: ["image", "text"],
    } as Record<string, unknown>,
  });
  
  const result = await model.generateContent(`Generate an image: ${prompt}`);
  const response = result.response;
  
  // Check for image in the response
  const parts = response.candidates?.[0]?.content?.parts || [];
  
  for (const part of parts) {
    if (part.inlineData) {
      const { mimeType, data } = part.inlineData;
      return `data:${mimeType};base64,${data}`;
    }
  }
  
  throw new Error('No image generated in response');
}

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

    const apiKey = process.env.GOOGLE_AI_API_KEY;
    if (!apiKey) {
      // Return placeholder for demo mode
      return NextResponse.json({
        success: true,
        demo: true,
        image: `https://placehold.co/1024x1024/0a0a12/C9A227?text=${encodeURIComponent(world || 'Neptune')}`,
        world: world || 'demo',
        prompt: prompt
      });
    }

    const genAI = new GoogleGenerativeAI(apiKey);

    // Get world style or default
    const style = world ? worldStyles[world as keyof typeof worldStyles] : null;
    const fullPrompt = style 
      ? `${prompt}${style.suffix}`
      : prompt;

    const imageUrl = await generateImage(genAI, fullPrompt);

    return NextResponse.json({
      success: true,
      image: imageUrl,
      world: world,
      prompt: fullPrompt
    });

  } catch (error) {
    console.error('Generation error:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';

    if (errorMessage.includes('quota') || errorMessage.includes('rate') || errorMessage.includes('429') || errorMessage.includes('RESOURCE_EXHAUSTED')) {
      return NextResponse.json(
        { error: 'Rate limit exceeded. Please try again later.' },
        { status: 429 }
      );
    }

    if (errorMessage.includes('API key') || errorMessage.includes('401') || errorMessage.includes('403')) {
      return NextResponse.json(
        { error: 'API authentication failed' },
        { status: 401 }
      );
    }

    return NextResponse.json(
      { error: `Failed to generate image: ${errorMessage}` },
      { status: 500 }
    );
  }
}

/**
 * Generate images for all three parallel worlds.
 * Generates sequentially with delays to avoid rate limits.
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

    const apiKey = process.env.GOOGLE_AI_API_KEY;
    if (!apiKey) {
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

    const genAI = new GoogleGenerativeAI(apiKey);

    // Generate all three sequentially to avoid rate limits
    const results = [];
    for (const [key, style] of Object.entries(worldStyles)) {
      const fullPrompt = `${prompt}${style.suffix}`;
      
      try {
        const imageUrl = await generateImage(genAI, fullPrompt);
        results.push({
          world: key,
          name: style.name,
          color: style.color,
          image: imageUrl,
          prompt: fullPrompt
        });
      } catch (err) {
        console.error(`Failed to generate ${key}:`, err);
        // Use a placeholder for failed generations
        results.push({
          world: key,
          name: style.name,
          color: style.color,
          image: `https://placehold.co/1024x1024/0a0a12/${style.color.slice(1)}?text=${encodeURIComponent('Generation Failed')}`,
          prompt: fullPrompt,
          error: true
        });
      }
      
      // Delay between generations to avoid rate limits
      await new Promise(resolve => setTimeout(resolve, 2000));
    }

    return NextResponse.json({
      success: true,
      results
    });

  } catch (error) {
    console.error('Generation error:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';

    if (errorMessage.includes('quota') || errorMessage.includes('rate') || errorMessage.includes('429') || errorMessage.includes('RESOURCE_EXHAUSTED')) {
      return NextResponse.json(
        { error: 'Rate limit exceeded. Please try again later.' },
        { status: 429 }
      );
    }

    if (errorMessage.includes('API key') || errorMessage.includes('401') || errorMessage.includes('403')) {
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
