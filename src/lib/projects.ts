export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  tech: string[];
  highlights: string[];
  liveUrl?: string;
  githubUrl?: string;
  image?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: 'mcp-directory',
    title: 'MCP Directory',
    tagline: 'The Largest MCP Server Directory',
    description: 'Built the definitive directory for Model Context Protocol servers with 181+ servers across 22 categories. Features a unique one-click Config Generator that no competitor has.',
    tech: ['Next.js 15', 'TypeScript', 'Tailwind CSS', 'SQLite', 'Drizzle ORM', 'Vercel'],
    highlights: [
      '181 MCP servers indexed (largest directory)',
      'One-click Config Generator for Claude/Cursor/Windsurf',
      'Browse by client with instant search + autocomplete',
      'Dark mode, SEO optimized, mobile responsive'
    ],
    liveUrl: 'https://mcp-directory-pi.vercel.app',
    githubUrl: 'https://github.com/middesurya/mcp-directory',
    featured: true
  },
  {
    id: 'social-network-bottleneck',
    title: 'Social Network Bottleneck Detector',
    tagline: 'Graph Analytics for Twitter Networks',
    description: 'Detect critical bottleneck nodes in social networks using graph algorithms, Neo4j, and LLM-powered natural language queries. Visualizes network topology with Cytoscape.js.',
    tech: ['FastAPI', 'Neo4j Aura', 'React', 'Cytoscape.js', 'LangChain', 'GPT-4'],
    highlights: [
      'Natural language to Cypher query generation',
      'Real-time graph visualization',
      'Betweenness centrality bottleneck detection',
      'Interactive network exploration'
    ],
    liveUrl: 'https://frontend-sigma-eight-20.vercel.app',
    githubUrl: 'https://github.com/middesurya/social-network-bottleneck-detector',
    featured: true
  },
  {
    id: 'neverafk',
    title: 'NeverAFK.ai',
    tagline: 'RAG-Powered Creator Support Platform',
    description: 'Production SaaS platform with LangGraph multi-agent RAG pipeline using GPT-4 for automated student support from indexed course content.',
    tech: ['Next.js 15', 'FastAPI', 'LangGraph', 'GPT-4', 'Pinecone', 'Supabase', 'OpenAI Whisper'],
    highlights: [
      'Multi-agent RAG pipeline with semantic chunking',
      'Hybrid search (BM25 + vector) with reranking',
      'Serving 1000+ users in production',
      'Lemon Squeezy billing integration'
    ],
    liveUrl: 'https://never-afk-ai-lngm.vercel.app',
    githubUrl: 'https://github.com/middesurya/NeverAFK.ai',
    featured: true
  },
  {
    id: 'llm-council',
    title: 'LLM Council',
    tagline: 'Multi-Agent AI Consensus System',
    description: '3-stage Agentic AI system where GPT-4, Claude, and Gemini generate divergent answers, perform peer review, then synthesize consensus with citations.',
    tech: ['Next.js 15', 'TypeScript', 'PostgreSQL', 'Drizzle ORM', 'Redis', 'GPT-4', 'Claude', 'Gemini'],
    highlights: [
      'Multi-model orchestration with peer review',
      'Healthcare NER with ICD-10 codes (61% F1)',
      'Finance classification (100% accuracy)',
      '80%+ Redis cache hit rate'
    ],
    liveUrl: 'https://llm-council-gules.vercel.app',
    githubUrl: 'https://github.com/middesurya/llm-council',
    featured: true
  },
  {
    id: 'the-screening-room',
    title: 'The Screening Room',
    tagline: 'AI Critics Only - Movie Debate Platform',
    description: 'A social platform where AI agents debate movies while humans spectate and vote. Multiple AI personalities with distinct reviewing styles argue film merits.',
    tech: ['Next.js', 'TypeScript', 'OpenAI', 'Anthropic', 'Tailwind CSS'],
    highlights: [
      'Multi-AI debate orchestration',
      'Distinct AI critic personalities',
      'Real-time audience voting',
      'Automated discussion moderation'
    ],
    githubUrl: 'https://github.com/middesurya/the-screening-room',
    featured: false
  },
  {
    id: 'echomirror',
    title: 'EchoMirror',
    tagline: 'AI-Powered Self-Reflection Journal',
    description: 'Mobile journaling app with on-device ML for mood analysis and personalized insights. Built with Flutter and Riverpod for cross-platform deployment.',
    tech: ['Flutter', 'Dart', 'Riverpod', 'ML Kit', 'Firebase', 'On-Device ML'],
    highlights: [
      'On-device sentiment analysis (privacy-first)',
      'Mood tracking with visual insights',
      'Cross-platform (iOS + Android)',
      'Personalized reflection prompts'
    ],
    githubUrl: 'https://github.com/middesurya/EchoMirror',
    featured: false
  },
  {
    id: 'chainmind',
    title: 'ChainMind',
    tagline: 'AI-Powered DeFi Intelligence Platform',
    description: 'Making DeFi risk transparent through AI. Analyzes blockchain protocols, smart contracts, and market data to provide actionable intelligence.',
    tech: ['TypeScript', 'Next.js', 'Python', 'Web3.js', 'LangChain', 'OpenAI'],
    highlights: [
      'Real-time DeFi protocol analysis',
      'Smart contract risk assessment',
      'AI-powered market insights',
      'Multi-chain support'
    ],
    githubUrl: 'https://github.com/middesurya/ChainMind',
    featured: false
  },
  {
    id: 'udemy-notes-extractor',
    title: 'Udemy Notes Extractor',
    tagline: 'AI-Powered Course Transcript Tool',
    description: 'Python CLI that extracts Udemy course transcripts and generates structured study notes using Claude AI. Automates note-taking for online learning.',
    tech: ['Python', 'Claude API', 'CLI', 'Markdown'],
    highlights: [
      'Automated transcript extraction',
      'Claude-powered note generation',
      'Structured markdown output',
      'Batch processing support'
    ],
    githubUrl: 'https://github.com/middesurya/udemy-notes-extractor',
    featured: false
  },
  {
    id: 'agent-eval',
    title: 'AI Agent Evaluation Framework',
    tagline: 'Anthropic/Toloka Partnership',
    description: 'Comprehensive evaluation framework for Claude AI agents across virtual environments with 15-20 integrated tools including Slack, Jira, and GitHub.',
    tech: ['Python', 'Pytest', 'Docker', 'MCP', 'GitHub Actions', 'Claude'],
    highlights: [
      'Multi-step agentic workflow validation',
      '97%+ accuracy gates in CI/CD',
      'MCP server integration',
      'Automated grading system'
    ],
    featured: true
  },
  {
    id: 'metalquery',
    title: 'MetalQuery',
    tagline: 'Enterprise NLP-to-SQL System',
    description: 'Multimodal RAG chatbot for manufacturing KPI analysis with natural language to SQL conversion across 29 database tables.',
    tech: ['FastAPI', 'Django', 'React', 'PostgreSQL', 'Groq Llama', 'ChromaDB'],
    highlights: [
      '90-100% query accuracy',
      '12-layer security architecture',
      'Jailbreak & prompt injection prevention',
      'Role-based access control'
    ],
    githubUrl: 'https://github.com/middesurya/metalquery',
    featured: true
  },
  {
    id: 'mcp-gen',
    title: 'MCP-Gen',
    tagline: 'Model Context Protocol Generator',
    description: 'CLI tool to scaffold MCP servers for Agentic AI applications with tool specifications and test harnesses.',
    tech: ['Node.js', 'TypeScript', 'npm', 'MCP'],
    highlights: [
      'Published npm package',
      'Rapid MCP server scaffolding',
      'Tool specification templates',
      'Test harness generation'
    ],
    githubUrl: 'https://github.com/middesurya/Mcp_Gen'
  },
  {
    id: 'atheos',
    title: 'ÆTHER-Grid',
    tagline: 'Quantum-Enhanced Energy Grid AI',
    description: 'Multi-agent system for intelligent energy grid management with quantum-enhanced optimization. EU AI Act compliant with explainable AI features.',
    tech: ['Python', 'PyTorch', 'Qiskit', 'Multi-Agent Systems', 'Quantum ML'],
    highlights: [
      'Quantum optimization algorithms',
      'Multi-agent coordination',
      'EU AI Act compliance',
      'Explainable AI dashboard'
    ],
    githubUrl: 'https://github.com/middesurya/Atheos'
  }
];

export const skills = {
  llm: [
    'GPT-4/GPT-4o', 'Claude 3/3.5', 'Gemini', 'Llama 2/3', 'Mistral',
    'Fine-tuning (LoRA, QLoRA, PEFT)', 'RLHF', 'Prompt Engineering'
  ],
  agentic: [
    'LangChain', 'LangGraph', 'LangSmith', 'LlamaIndex', 'CrewAI',
    'Multi-Agent Systems', 'MCP', 'Function Calling', 'Tool Use'
  ],
  rag: [
    'Pinecone', 'ChromaDB', 'Weaviate', 'Qdrant', 'FAISS',
    'Semantic Search', 'Hybrid Search', 'Reranking', 'Embeddings'
  ],
  mlops: [
    'Model Deployment', 'MLflow', 'Weights & Biases', 'Guardrails AI',
    'Model Monitoring', 'A/B Testing', 'Experiment Tracking'
  ],
  backend: [
    'Python', 'FastAPI', 'Django', 'Node.js', 'PostgreSQL',
    'Redis', 'Docker', 'Kubernetes', 'AWS', 'GCP'
  ],
  frontend: [
    'React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Three.js'
  ]
};
