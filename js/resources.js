/**
 * AR LABS — Resource Data Store
 * Structured JavaScript data object for all AR LABS creator tools, skills, and downloads.
 */

const ARLABS_RESOURCES = [
  {
    id: "stream-clips-skill",
    title: "GTA 6 Stream Clipping Skill",
    slug: "stream-clips-skill",
    category: "AI Agent Skills",
    categorySlug: "agent-skills",
    badge: "NEW · FREE",
    version: "v1.2.0",
    format: ".ZIP",
    fileSize: "142 KB",
    updatedDate: "November 2026",
    status: "available", // 'available' = real downloadable file; 'coming_soon' = in development
    downloadUrl: "downloads/stream-clips-skill.zip",
    detailsUrl: "resource-details.html",
    thumbnail: "assets/images/gta6-skill-thumb.svg",
    description: "Turn long gaming livestreams into engaging vertical Shorts using AI-powered clipping workflows.",
    fullDescription: "An AI-powered agent skill and automated pipeline designed to transform long GTA 6 and gaming livestreams (2–6+ hours) into viral, high-engagement vertical short-form content for TikTok, YouTube Shorts, and Instagram Reels. Uses Whisper timestamps and Gemini/Claude LLMs to detect high-energy moments.",
    features: [
      "AI-assisted highlight discovery based on audio decibel spikes",
      "Interesting moment identification with LLM transcript scoring",
      "Smart 9:16 vertical video reframing (Split facecam / Centered crop)",
      "Dynamic kinetic caption support with word highlights",
      "Full short-form content workflow with SEO title & hashtag hooks"
    ],
    requirements: [
      "Python 3.10+",
      "FFmpeg (in system PATH)",
      "Gemini API Key or Anthropic Claude API Key"
    ],
    installCommand: "pip install -r requirements.txt",
    tags: ["GTA 6", "AI Skill", "Shorts", "FFmpeg", "Whisper", "TikTok"]
  },
  {
    id: "ai-content-pipeline",
    title: "AI Content Automation Pipeline",
    slug: "ai-content-pipeline",
    category: "AI Automation",
    categorySlug: "automation",
    badge: "COMING SOON",
    version: "v1.0.0",
    format: ".PY / .JSON",
    fileSize: "320 KB",
    updatedDate: "In Development",
    status: "coming_soon",
    downloadUrl: null,
    detailsUrl: "#",
    thumbnail: "assets/images/ai-automation-thumb.svg",
    description: "End-to-end automation pipeline that monitors RSS feeds, scripts YouTube Shorts, generates voiceovers, and compiles B-roll.",
    fullDescription: "A modular, headless content creation workflow that chains together web monitoring, LLM script generation, ElevenLabs voice cloning, and automated timeline rendering.",
    features: [
      "Automated news & trend ingestion",
      "Multi-prompt LLM script polishing",
      "Automated voiceover generation",
      "Auto-sync caption & stock footage stitching"
    ],
    requirements: ["Python 3.11+", "Node.js 20+", "API Keys"],
    tags: ["Automation", "Shorts", "ElevenLabs", "Pipelines"]
  },
  {
    id: "autonomous-research-agent",
    title: "Autonomous Tech Research Agent Skill",
    slug: "autonomous-research-agent",
    category: "AI Agent Skills",
    categorySlug: "agent-skills",
    badge: "COMING SOON",
    version: "v0.9.0",
    format: ".SKILL / .MD",
    fileSize: "85 KB",
    updatedDate: "In Testing",
    status: "coming_soon",
    downloadUrl: null,
    detailsUrl: "#",
    thumbnail: "assets/images/agent-skill-thumb.svg",
    description: "Deep research skill for Claude Code and Antigravity that queries GitHub repos, ArXiv papers, and documentation.",
    fullDescription: "Enables your AI coding agents to perform multi-hop technical research, summarize architecture trade-offs, and produce clean implementation briefs.",
    features: [
      "ArXiv & GitHub repository search",
      "Architectural synthesis markdown reports",
      "Zero-hallucination citation checks",
      "Works with Antigravity & Claude Code"
    ],
    requirements: ["Antigravity or Claude Code environment"],
    tags: ["Agent Skill", "Research", "Documentation", "Architecture"]
  },
  {
    id: "local-llm-optimizer",
    title: "Local LLM Prompt & Token Optimizer",
    slug: "local-llm-optimizer",
    category: "Developer Tools",
    categorySlug: "dev-tools",
    badge: "COMING SOON",
    version: "v1.1.0",
    format: ".PY / CLI",
    fileSize: "190 KB",
    updatedDate: "In Testing",
    status: "coming_soon",
    downloadUrl: null,
    detailsUrl: "#",
    thumbnail: "assets/images/dev-tools-thumb.svg",
    description: "CLI utility to compress system prompts by 35% without losing semantic instructions, optimized for local Ollama and vLLM models.",
    fullDescription: "Save context window and boost inference speed when running local open-weights models (Llama 3, Mistral, Qwen). Strips whitespace, optimizes grammar tokens, and formats structured system rules.",
    features: [
      "35% prompt compression ratio",
      "Ollama & vLLM compatible",
      "Preserves reasoning benchmarks",
      "CLI & Python package interface"
    ],
    requirements: ["Python 3.9+", "Ollama (optional)"],
    tags: ["Ollama", "Prompt Engineering", "Developer Tools", "vLLM"]
  },
  {
    id: "fastapi-creator-starter",
    title: "FastAPI Creator Backend Starter Kit",
    slug: "fastapi-creator-starter",
    category: "Coding Resources",
    categorySlug: "coding",
    badge: "COMING SOON",
    version: "v1.0.0",
    format: ".ZIP / Template",
    fileSize: "410 KB",
    updatedDate: "In Development",
    status: "coming_soon",
    downloadUrl: null,
    detailsUrl: "#",
    thumbnail: "assets/images/coding-thumb.svg",
    description: "Production-ready boilerplate for building creator web tools: auth, Stripe webhooks, SQLite/PostgreSQL, and background tasks.",
    fullDescription: "Clean, robust template to launch and monetize your own creator tools, SaaS micro-apps, and digital download portals.",
    features: [
      "FastAPI + Pydantic v2 setup",
      "Stripe Checkout webhook integration",
      "JWT & Magic link authentication",
      "Docker compose ready"
    ],
    requirements: ["Python 3.10+", "Docker (optional)"],
    tags: ["FastAPI", "Python", "Stripe", "Boilerplate", "Backend"]
  },
  {
    id: "transcript-chapter-gen",
    title: "YouTube Transcript & Chapter Generator",
    slug: "transcript-chapter-gen",
    category: "AI Automation",
    categorySlug: "automation",
    badge: "COMING SOON",
    version: "v1.0.2",
    format: ".PY / CLI",
    fileSize: "115 KB",
    updatedDate: "In Testing",
    status: "coming_soon",
    downloadUrl: null,
    detailsUrl: "#",
    thumbnail: "assets/images/ai-automation-thumb.svg",
    description: "CLI script that downloads high-accuracy YouTube transcripts and uses LLMs to generate timestamped YouTube video chapters.",
    fullDescription: "Eliminate the manual chore of timestamping 20-minute tutorials. Extracts spoken dialogue and writes clickable YouTube chapters formatted with titles and keywords.",
    features: [
      "Automated chapter timestamps",
      "SEO description formatting",
      "Key takeaways markdown export",
      "CLI batch processing mode"
    ],
    requirements: ["Python 3.9+", "yt-dlp", "Gemini API key"],
    tags: ["YouTube", "Chapters", "Automation", "SEO"]
  }
];

/**
 * Filter and query helpers
 */
const ResourceStore = {
  getAll: () => ARLABS_RESOURCES,
  getById: (id) => ARLABS_RESOURCES.find(r => r.id === id || r.slug === id),
  getByCategory: (category) => {
    if (!category || category === "all") return ARLABS_RESOURCES;
    return ARLABS_RESOURCES.filter(r => r.categorySlug === category || r.category.toLowerCase() === category.toLowerCase());
  },
  search: (query) => {
    if (!query || !query.trim()) return ARLABS_RESOURCES;
    const q = query.toLowerCase().trim();
    return ARLABS_RESOURCES.filter(r => 
      r.title.toLowerCase().includes(q) ||
      r.description.toLowerCase().includes(q) ||
      r.category.toLowerCase().includes(q) ||
      r.tags.some(t => t.toLowerCase().includes(q))
    );
  }
};
