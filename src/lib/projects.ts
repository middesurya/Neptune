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
    githubUrl: 'https://github.com/middesurya',
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
    githubUrl: 'https://github.com/middesurya',
    featured: true
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
