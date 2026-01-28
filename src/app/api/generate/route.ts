import { NextRequest, NextResponse } from 'next/server';
import Replicate from 'replicate';

// Initialize Replicate client
const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN,
});

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
    const { prompt, world } = await request.json();

    if (!prompt) {
      return NextResponse.json(
        { error: 'Prompt is required' },
        { status: 400 }
      );
    }

    if (!process.env.REPLICATE_API_TOKEN) {
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
    return NextResponse.json(
      { error: 'Failed to generate image' },
      { status: 500 }
    );
  }
}

// Generate all three worlds in parallel
export async function PUT(request: NextRequest) {
  try {
    const { prompt } = await request.json();

    if (!prompt) {
      return NextResponse.json(
        { error: 'Prompt is required' },
        { status: 400 }
      );
    }

    if (!process.env.REPLICATE_API_TOKEN) {
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
    return NextResponse.json(
      { error: 'Failed to generate images' },
      { status: 500 }
    );
  }
}
