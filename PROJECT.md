# Neptune - Dark Sci-Fi AI Portfolio

A Netflix "Dark"-inspired AI portfolio that recruiters won't forget. Interactive, atmospheric, memorable.

## Vision

Transform a typical AI portfolio into an **immersive experience** using:
- Dark, mysterious aesthetics inspired by Netflix's "Dark"
- FLUX image generation via Replicate API
- 3D WebGL elements with React Three Fiber
- Atmospheric animations with GSAP/Framer Motion

## Core Features

### 1. Triquetra Interface (MVP)
Three parallel-universe interpretations of a single prompt:
- **What happened** - apocalyptic industrial style
- **What could have happened** - overgrown nature style  
- **What should have happened** - pristine origin style

User enters a prompt → AI generates 3 variations with distinct visual styles → Display in atmospheric three-panel layout.

### 2. Landing Experience
- Dark, atmospheric hero section
- Particle system (floating dust/temporal energy)
- Glitch effects on hover
- Scanline CRT overlay
- Smooth scroll-triggered animations

### 3. Projects Showcase
Display Surya's AI projects with Dark theme:
- NeverAFK.ai
- LLM Council
- AI Agent Evaluation Framework
- MetalQuery
- MCP-Gen

### 4. About/Contact
- Timeline visualization (Dark-inspired)
- Skills constellation
- Contact form with atmospheric design

## Tech Stack

```
Frontend
├── Next.js 15 (App Router)
├── TypeScript
├── Tailwind CSS (custom dark palette)
├── Framer Motion
├── GSAP + ScrollTrigger
└── React Three Fiber + Drei + Postprocessing

AI Integration
├── Replicate API (FLUX models)
├── Vercel AI SDK
└── Next.js API Routes (secure proxy)

Deployment
├── Vercel
└── Environment variables for API keys
```

## Design System

### Colors
```css
--bg-primary: #0a0a12
--bg-elevated: #050508
--bg-surface: #121212
--accent-amber: #C9A227
--accent-cyan: #00f0ff
--text-primary: #e0e0e0
--text-muted: #888888
```

### Typography
- Headers: Orbitron or Rajdhani (Google Fonts)
- Body: Inconsolata or Space Mono
- Weights: 400, 600, 700

### Effects
- Chromatic aberration on hover (offset cyan/magenta shadows)
- Scanline overlay (10% opacity)
- Film grain via postprocessing
- Bloom on accent elements
- Parallax scrolling

## API Integration

### Replicate (FLUX)
- FLUX Schnell for dev ($0.003/image)
- FLUX 1.1 Pro for showcase ($0.04/image)
- Rate limiting to prevent cost overruns
- Cache by prompt hash

### Environment Variables
```
REPLICATE_API_TOKEN=
NEXT_PUBLIC_APP_URL=
```

## Project Structure

```
neptune/
├── app/
│   ├── page.tsx              # Landing
│   ├── triquetra/
│   │   └── page.tsx          # Triquetra Generator
│   ├── projects/
│   │   └── page.tsx          # Projects showcase
│   ├── about/
│   │   └── page.tsx          # About/Timeline
│   └── api/
│       └── generate/
│           └── route.ts      # Replicate proxy
├── components/
│   ├── ui/                   # Reusable UI
│   ├── three/                # 3D components
│   │   ├── ParticleField.tsx
│   │   ├── Scene.tsx
│   │   └── CavePortal.tsx
│   ├── effects/
│   │   ├── Glitch.tsx
│   │   ├── Scanlines.tsx
│   │   └── GrainOverlay.tsx
│   └── sections/
│       ├── Hero.tsx
│       ├── TriquetaDemo.tsx
│       └── ProjectsGrid.tsx
├── lib/
│   ├── replicate.ts          # API client
│   └── prompts.ts            # Style prompts
├── styles/
│   └── globals.css
├── public/
│   └── fonts/
└── tailwind.config.ts
```

## Triquetra Prompt Engineering

Base user prompt gets modified for each world:

**World A (What Happened)** - Apocalyptic
```
{prompt}, post-apocalyptic industrial aesthetic, 
rusty metal, toxic atmosphere, amber lighting,
desolate, cinematic, 8k
```

**World B (What Could Have)** - Overgrown
```
{prompt}, nature reclaiming civilization,
overgrown ruins, bioluminescent plants,
mystical forest, cyan mist, ethereal, 8k
```

**World C (What Should Have)** - Pristine
```
{prompt}, pristine utopia, clean architecture,
golden hour, harmonious, peaceful,
idealistic future, warm amber glow, 8k
```

## Implementation Phases

### Phase 1: Foundation (Week 1)
- [x] Next.js 15 setup with TypeScript
- [ ] Tailwind config with dark palette
- [ ] Basic layout and navigation
- [ ] Google Fonts integration

### Phase 2: Atmosphere (Week 2)
- [ ] Particle field component (R3F)
- [ ] Glitch text effect
- [ ] Scanline overlay
- [ ] Hero section with animations

### Phase 3: Triquetra (Week 3)
- [ ] Replicate API integration
- [ ] Three-panel generator UI
- [ ] Loading states with atmosphere
- [ ] Result caching

### Phase 4: Content (Week 4)
- [ ] Projects showcase
- [ ] About/Timeline section
- [ ] Contact form
- [ ] Mobile responsiveness

### Phase 5: Polish (Week 5-6)
- [ ] Performance optimization
- [ ] SEO metadata
- [ ] Error handling
- [ ] Final testing
- [ ] Deploy to Vercel

## Owner Info (for About section)

**Surya Naga Anil Kumar Midde**
- AI/ML Engineer
- Location: Pflugerville, TX
- GitHub: github.com/middesurya
- LinkedIn: linkedin.com/in/surya-midde
- Email: midde.snakumar123@gmail.com

### Featured Projects
1. **NeverAFK.ai** - RAG-powered creator support platform
2. **LLM Council** - Multi-agent AI consensus system
3. **AI Agent Evaluation Framework** - Anthropic/Toloka partnership
4. **MetalQuery** - Enterprise NLP-to-SQL system
5. **MCP-Gen** - Model Context Protocol generator

## Success Metrics
- Load time < 3s
- Lighthouse score > 90
- Mobile-friendly
- Memorable first impression
- Working Triquetra demo

---

## Notes
- Start with static content, add AI features incrementally
- Use FLUX Schnell during dev to conserve credits
- Implement GPU detection for 3D fallbacks
- Keep bundle size reasonable with dynamic imports
