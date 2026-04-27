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
  },
  {
    id: 'ml-labs-series',
    title: 'Daily ML Labs Series',
    tagline: '30+ Interactive ML Research Playgrounds',
    description: 'A daily-build practice shipping production-quality interactive labs for cutting-edge ML topics. Each lab is a self-contained, in-browser visualization that turns a research paper into a hands-on experience — from mechanistic interpretability to flow matching.',
    tech: ['TypeScript', 'TensorFlow.js', 'WebGL', 'D3.js', 'React', 'Next.js', 'Python'],
    highlights: [
      '30+ labs shipped in under 60 days',
      'In-browser training with TF.js (no backend)',
      'Covers MoE, MechInterp, Diffusion, PINNs, NCA, TDA',
      'Each lab paired with paper references and live charts'
    ],
    githubUrl: 'https://github.com/middesurya?tab=repositories&q=daily-webapp',
    featured: true
  },
  {
    id: 'flowmatch-lab',
    title: 'FlowMatchLab',
    tagline: 'Flow Matching & Optimal Transport Lab',
    description: 'Interactive laboratory for Flow Matching, Conditional Flow Matching, and Optimal Transport. Train continuous-time generative models in the browser and watch trajectories converge in real time across 6 modules.',
    tech: ['TypeScript', 'TensorFlow.js', 'WebGL', 'React', 'Next.js'],
    highlights: [
      '6 modules covering CFM, OT, and rectified flows',
      'Live trajectory visualization with vector fields',
      'In-browser ODE solvers (RK4, Euler)',
      'Side-by-side comparison with diffusion baselines'
    ],
    githubUrl: 'https://github.com/middesurya/daily-webapp-2026-04-24-flowmatchlab',
    featured: true
  },
  {
    id: 'superposition-lab',
    title: 'Superposition Lab',
    tagline: 'Mechanistic Interpretability Playground',
    description: 'Train toy models of superposition directly in the browser to visualize how neural networks pack more features than they have dimensions. Inspired by Anthropic\'s mechanistic interpretability research.',
    tech: ['TypeScript', 'TensorFlow.js', 'D3.js', 'React'],
    highlights: [
      'Live superposition training visualization',
      'Feature geometry analysis with dimensionality plots',
      'Interactive sparsity and importance controls',
      'Reproduces key results from Anthropic toy models paper'
    ],
    githubUrl: 'https://github.com/middesurya/daily-webapp-2026-04-16-superposition-lab',
    featured: true
  },
  {
    id: 'moe-lab',
    title: 'MoE Lab',
    tagline: 'Sparse-Gated Mixture-of-Experts Visualizer',
    description: 'Interactive trainer for sparse-gated Mixture-of-Experts networks with live expert routing visualization, load balancing analysis, and noisy top-k gating — all running on TF.js in your browser.',
    tech: ['TypeScript', 'TensorFlow.js', 'D3.js', 'React'],
    highlights: [
      'Live expert routing heatmaps',
      'Load balancing loss visualization',
      'Noisy top-k gating with adjustable noise',
      'Token-level expert assignment trace'
    ],
    githubUrl: 'https://github.com/middesurya/daily-webapp-2026-04-09-moe-lab',
    featured: true
  },
  {
    id: 'specdecode-lab',
    title: 'SpecDecode Lab',
    tagline: 'Speculative Decoding Visualizer',
    description: 'Visualize the inner workings of speculative decoding strategies — linear, Medusa heads, and EAGLE — with live acceptance trees, draft/verify token traces, and throughput comparisons.',
    tech: ['TypeScript', 'React', 'TensorFlow.js', 'D3.js'],
    highlights: [
      'Linear, Medusa, and EAGLE strategies',
      'Live acceptance tree visualization',
      'Draft model vs target model comparison',
      'Real-time tokens/sec throughput meter'
    ],
    githubUrl: 'https://github.com/middesurya/daily-webapp-2026-04-08-specdecode-lab'
  },
  {
    id: 'reasonforge',
    title: 'ReasonForge',
    tagline: 'Test-Time Compute Laboratory',
    description: 'Interactive playground for test-time compute scaling — Monte Carlo Tree Search, Best-of-N, self-consistency, and process reward models. Sweep compute budgets and see live scaling curves.',
    tech: ['JavaScript', 'React', 'D3.js', 'TensorFlow.js'],
    highlights: [
      'Live MCTS rollout visualization',
      'Best-of-N vs MCTS scaling curves',
      'Process reward model integration',
      'Adjustable compute budget sweeps'
    ],
    githubUrl: 'https://github.com/middesurya/daily-webapp-2026-04-15-reasonforge'
  },
  {
    id: 'pinn-lab',
    title: 'PINNLab',
    tagline: 'Physics-Informed Neural Networks',
    description: 'Train physics-informed neural networks in the browser to solve ODEs and PDEs — heat, wave, Burgers — with live residual loss decomposition and solution surface plots.',
    tech: ['TypeScript', 'TensorFlow.js', 'WebGL', 'React'],
    highlights: [
      'Solve heat, wave, and Burgers equations live',
      'Residual vs data loss decomposition',
      'Interactive boundary condition controls',
      '3D solution surface visualization'
    ],
    githubUrl: 'https://github.com/middesurya/daily-webapp-2026-04-21-pinnlab'
  },
  {
    id: 'topolab',
    title: 'TopoLab',
    tagline: 'Topological Data Analysis Lab',
    description: 'Interactive Topological Data Analysis playground with persistent homology, Vietoris-Rips filtrations, and persistence diagrams over live point clouds.',
    tech: ['TypeScript', 'React', 'D3.js', 'WebGL'],
    highlights: [
      'Live Vietoris-Rips filtration animation',
      'Persistence diagrams and barcodes',
      'Mapper algorithm visualization',
      'Point cloud manipulation in real time'
    ],
    githubUrl: 'https://github.com/middesurya/daily-webapp-2026-04-22-topolab'
  },
  {
    id: 'morphogenesis-lab',
    title: 'MorphoGenesis Lab',
    tagline: 'Reaction-Diffusion & Neural CA',
    description: 'Browser-based laboratory for Reaction-Diffusion systems and Neural Cellular Automata. Grow patterns, train differentiable CA rules, and explore Turing morphogenesis live.',
    tech: ['TypeScript', 'WebGL', 'TensorFlow.js', 'React'],
    highlights: [
      'GPU-accelerated reaction-diffusion solver',
      'Trainable Neural Cellular Automata',
      'Differentiable rule discovery',
      'Real-time pattern morphology controls'
    ],
    githubUrl: 'https://github.com/middesurya/daily-webapp-2026-04-17-morphogenesis-lab'
  },
  {
    id: 'latticeforge',
    title: 'LatticeForge',
    tagline: 'Generative Crystal Structure Lab',
    description: 'Interactive laboratory for inverse-design of crystal structures using diffusion models. Generate, score, and visualize 3D lattices with property-conditioned sampling.',
    tech: ['TypeScript', 'WebGL', 'Three.js', 'TensorFlow.js'],
    highlights: [
      'Diffusion-based crystal generation',
      'Property-conditioned inverse design',
      '3D lattice visualization with Three.js',
      'Energy and stability scoring'
    ],
    githubUrl: 'https://github.com/middesurya/daily-webapp-2026-04-17-latticeforge'
  },
  {
    id: 'free-energy-lab',
    title: 'FreeEnergyLab',
    tagline: 'Active Inference & Free Energy Principle',
    description: 'Interactive playground for Karl Friston\'s Free Energy Principle and Active Inference. Run agents that minimize variational free energy in real time across exploration tasks.',
    tech: ['JavaScript', 'React', 'D3.js'],
    highlights: [
      'Live free energy minimization',
      'Active inference agent simulation',
      'Generative model belief updates',
      'Exploration vs exploitation visualization'
    ],
    githubUrl: 'https://github.com/middesurya/daily-webapp-2026-04-21-freeenergylab'
  },
  {
    id: 'neurosym-lab',
    title: 'NeuroSym Lab',
    tagline: 'Neuro-Symbolic AI Reasoning',
    description: 'Interactive Neuro-Symbolic AI laboratory with visual Sudoku solving, differentiable logic, and hybrid neural+symbolic reasoning workflows.',
    tech: ['TypeScript', 'React', 'TensorFlow.js'],
    highlights: [
      'Differentiable logic reasoning',
      'Visual Sudoku solver demo',
      'Hybrid neural+symbolic pipeline',
      'Constraint satisfaction visualization'
    ],
    githubUrl: 'https://github.com/middesurya/daily-webapp-2026-04-14-neurosym-lab'
  },
  {
    id: 'hopfield-lab',
    title: 'HopfieldLab',
    tagline: 'Modern Hopfield & Associative Memory',
    description: 'Train and probe modern Hopfield networks and associative memories in the browser — pattern completion, energy landscape visualization, and attention-as-Hopfield equivalences.',
    tech: ['TypeScript', 'TensorFlow.js', 'React', 'D3.js'],
    highlights: [
      'Modern Hopfield update rules',
      'Energy landscape visualization',
      'Pattern retrieval from partial cues',
      'Attention-Hopfield equivalence demo'
    ],
    githubUrl: 'https://github.com/middesurya/daily-webapp-2026-04-13-hopfieldlab'
  },
  {
    id: 'grokscope',
    title: 'GrokScope',
    tagline: 'Live Grokking Phenomenon Visualizer',
    description: 'Watch the grokking phenomenon unfold in real time — train a small transformer on modular arithmetic and see the moment generalization emerges, long after training loss converges.',
    tech: ['JavaScript', 'TensorFlow.js', 'D3.js'],
    highlights: [
      'Live train/val loss & accuracy curves',
      'Weight norm and circuit emergence tracking',
      'Modular arithmetic task suite',
      'Phase transition visualization'
    ],
    githubUrl: 'https://github.com/middesurya/daily-webapp-2026-04-07-grokscope'
  },
  {
    id: 'spikeforge',
    title: 'SpikeForge',
    tagline: 'Spiking Neural Network Lab',
    description: 'Interactive lab for spiking neural networks — surrogate gradient training, leaky integrate-and-fire dynamics, and event-driven inference visualizations.',
    tech: ['TypeScript', 'React', 'WebGL'],
    highlights: [
      'Surrogate gradient training',
      'LIF and Izhikevich neuron dynamics',
      'Spike raster plots',
      'Event-driven inference traces'
    ],
    githubUrl: 'https://github.com/middesurya/daily-webapp-2026-04-23-spikeforge'
  },
  {
    id: 'bifurx',
    title: 'BifurX',
    tagline: 'Nonlinear Dynamics & Chaos',
    description: 'Interactive nonlinear dynamics laboratory featuring 9 chaotic systems — Lorenz, Rössler, Chua, double pendulum, logistic map — with live bifurcation diagrams and Lyapunov exponents.',
    tech: ['TypeScript', 'WebGL', 'D3.js'],
    highlights: [
      '9 classic chaotic systems',
      'Live bifurcation diagrams',
      'Lyapunov exponent estimation',
      'Phase space visualization'
    ],
    githubUrl: 'https://github.com/middesurya/daily-webapp-2026-04-10-bifurx'
  },
  {
    id: 'autoresearch',
    title: 'AutoResearch',
    tagline: 'Autonomous AI Research Agents',
    description: 'AI agents that autonomously run ML research experiments on single-GPU nanochat training — orchestrating hyperparameter sweeps, ablations, and result analysis without human intervention.',
    tech: ['Python', 'PyTorch', 'LangGraph', 'Multi-Agent Systems'],
    highlights: [
      'Autonomous experiment orchestration',
      'Single-GPU nanochat training loops',
      'Agentic ablation analysis',
      'Forked from Karpathy\'s nanochat'
    ],
    githubUrl: 'https://github.com/middesurya/autoresearch',
    featured: true
  },
  {
    id: 'ai-agent-swarm',
    title: 'AI Agent Swarm',
    tagline: 'Multi-Agent Coordination Framework',
    description: 'A framework for coordinating swarms of autonomous AI agents on complex multi-step tasks. Agents specialize, negotiate, and share state via a central blackboard.',
    tech: ['Python', 'LangGraph', 'OpenAI', 'Anthropic'],
    highlights: [
      'Specialized agent roles',
      'Blackboard-style shared memory',
      'Hierarchical task decomposition',
      'Conflict resolution & voting'
    ],
    githubUrl: 'https://github.com/middesurya/ai-agent-swarm'
  },
  {
    id: 'schrodinger-ai',
    title: 'Schrödinger AI',
    tagline: 'A Platform Where Every Possibility Is Real',
    description: 'A general AI platform that explores branching possibilities in parallel — every prompt spawns multiple superposed realities until the user collapses the wave function with a choice.',
    tech: ['JavaScript', 'Next.js', 'OpenAI', 'Anthropic', 'React'],
    highlights: [
      'Parallel multi-branch generation',
      'User-driven outcome collapse',
      'Multi-model orchestration',
      'Possibility-tree UI'
    ],
    githubUrl: 'https://github.com/middesurya/Schrodinger.ai'
  },
  {
    id: 'last30',
    title: 'Last 30 Days in AI',
    tagline: 'Interactive AI News Dashboard',
    description: 'A live dashboard summarizing the most important AI/ML developments from the last 30 days — paper drops, model releases, and major research milestones — auto-curated and visualized.',
    tech: ['JavaScript', 'React', 'D3.js', 'OpenAI'],
    highlights: [
      'Auto-curated paper and release feed',
      'Topic clustering and trend lines',
      'Daily refresh pipeline',
      'Filter by lab, modality, topic'
    ],
    githubUrl: 'https://github.com/middesurya/last30'
  },
  {
    id: 'ai-news-aggregator',
    title: 'AI News Aggregator',
    tagline: 'Automated AI/ML Telegram Digest',
    description: 'Automated AI/ML news aggregation pipeline that scrapes, deduplicates, summarizes, and delivers a daily curated digest to Telegram.',
    tech: ['Python', 'Telegram Bot API', 'OpenAI', 'BeautifulSoup'],
    highlights: [
      'Multi-source scraping with dedup',
      'LLM-powered summarization',
      'Telegram delivery pipeline',
      'Cron-scheduled daily digest'
    ],
    githubUrl: 'https://github.com/middesurya/ai-news-aggregator'
  },
  {
    id: 'billet-ocr',
    title: 'Billet OCR POC',
    tagline: 'Industrial Steel Billet Code Reader',
    description: 'Production POC for reading dot-matrix stamped codes from steel billet end-face photos under challenging industrial lighting using PaddleOCR with custom preprocessing.',
    tech: ['Python', 'PaddleOCR', 'OpenCV', 'PyTorch'],
    highlights: [
      'Dot-matrix character recognition',
      'Robust to glare, rust, dust',
      'Custom preprocessing pipeline',
      'Deployed in steel mill conditions'
    ],
    githubUrl: 'https://github.com/middesurya/billet-ocr-poc'
  }
];

export const skills = {
  llm: [
    'GPT-4o/GPT-5', 'Claude 4 (Opus/Sonnet/Haiku)', 'Gemini 2', 'Llama 3', 'Mistral',
    'Fine-tuning (LoRA, QLoRA, PEFT)', 'RLHF / DPO', 'Prompt Engineering', 'Prompt Caching'
  ],
  agentic: [
    'LangChain', 'LangGraph', 'LangSmith', 'LlamaIndex', 'CrewAI',
    'Multi-Agent Systems', 'MCP (Model Context Protocol)', 'Function Calling',
    'Tool Use', 'Agent Swarms'
  ],
  rag: [
    'Pinecone', 'ChromaDB', 'Weaviate', 'Qdrant', 'FAISS',
    'Semantic Search', 'Hybrid Search (BM25 + vector)', 'Reranking',
    'Embeddings', 'Semantic Chunking'
  ],
  mlResearch: [
    'Mechanistic Interpretability', 'Mixture-of-Experts',
    'Speculative Decoding (Medusa / EAGLE)', 'Test-Time Compute / MCTS',
    'Flow Matching', 'Diffusion Models', 'Active Inference',
    'Modern Hopfield Networks', 'Neuro-Symbolic Reasoning',
    'Neural Cellular Automata', 'PINNs', 'Topological Data Analysis',
    'Grokking', 'Spiking Neural Networks'
  ],
  mlops: [
    'Model Deployment', 'MLflow', 'Weights & Biases', 'Guardrails AI',
    'Model Monitoring', 'A/B Testing', 'Experiment Tracking',
    'Vercel AI SDK', 'Replicate'
  ],
  dataInfra: [
    'PySpark', 'Kafka', 'Airflow', 'PaddleOCR', 'OpenCV',
    'Neo4j', 'PostgreSQL', 'pgvector', 'Drizzle ORM'
  ],
  backend: [
    'Python', 'FastAPI', 'Django', 'Node.js', 'PostgreSQL',
    'Redis', 'Docker', 'Kubernetes', 'AWS', 'GCP'
  ],
  frontend: [
    'React', 'Next.js 15', 'TypeScript', 'Tailwind CSS',
    'Three.js / R3F', 'Framer Motion', 'GSAP', 'TensorFlow.js', 'WebGL'
  ]
};
