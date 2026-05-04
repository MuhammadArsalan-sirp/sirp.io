/* ─── Site ───────────────────────────────────────────────── */
export const SITE_URL = 'https://www.sirp.io'
export const SITE_NAME = 'SIRP'
export const SITE_DESCRIPTION = 'OmniSense — the first Autonomous SOC Platform that detects, learns, and responds autonomously.'

/* ─── Navigation ─────────────────────────────────────────── */
export const NAV_LINKS = [
  {
    label: 'Autonomous Security',
    href: '/autonomous-security',
    children: [
      { label: 'What is Autonomous Security', href: '/autonomous-security', description: 'The autonomous security model' },
      { label: 'What is an Autonomous SOC', href: '/what-is-autonomous-soc', description: 'Understanding autonomous SOC' },
      { label: 'How Autonomous SOC Works', href: '/how-autonomous-soc-works', description: 'Under the hood' },
      { label: 'Autonomous SOC vs SOAR', href: '/soar-vs-autonomous-soc', description: 'Side-by-side comparison' },
      { label: 'SOAR Alternatives', href: '/soar-alternatives', description: 'Make the switch' },
    ],
  },
  {
    label: 'Platform',
    href: '#',
    children: [
      { label: 'OmniSense Platform', href: '/omnisense', description: 'AI-native SOC mesh' },
      { label: 'Enterprise SOC', href: '/enterprise-soc', description: 'Built for scale' },
      { label: 'Security Outcomes & Metrics', href: '/security-outcomes-and-metrics', description: 'Measurable ROI' },
    ],
  },
  {
    label: 'Resources',
    href: '#',
    children: [
      { label: 'Technical White Paper', href: '/technical-white-paper', description: 'Deep dive' },
      { label: 'Manifesto', href: '/manifesto', description: 'Our vision' },
      { label: 'Blog', href: '/blog', description: 'Insights & news' },
    ],
  },
  {
    label: 'Contact',
    href: '/contact',
  },
] as const

/* ─── Routes ─────────────────────────────────────────────── */
export const ROUTES = {
  home: '/',
  autonomousSecurity: '/autonomous-security',
  whatIsAutonomousSoc: '/what-is-autonomous-soc',
  howAutonomousSocWorks: '/how-autonomous-soc-works',
  soarVsAutonomousSoc: '/soar-vs-autonomous-soc',
  soarAlternatives: '/soar-alternatives',
  omnisense: '/omnisense',
  enterpriseSoc: '/enterprise-soc',
  securityOutcomes: '/security-outcomes-and-metrics',
  technicalWhitePaper: '/technical-white-paper',
  blog: '/blog',
  manifesto: '/manifesto',
  contact: '/contact',
} as const

/* ─── Footer ─────────────────────────────────────────────── */
export const FOOTER_LINKS = [
  {
    heading: 'Product',
    links: [
      { label: 'Autonomous Security', href: '/autonomous-security' },
      { label: 'OmniSense', href: '/omnisense' },
      { label: 'Enterprise SOC', href: '/enterprise-soc' },
    ],
  },
  {
    heading: 'Learn',
    links: [
      { label: 'What is Autonomous SOC?', href: '/what-is-autonomous-soc' },
      { label: 'How it Works', href: '/how-autonomous-soc-works' },
      { label: 'SOAR vs Autonomous SOC', href: '/soar-vs-autonomous-soc' },
      { label: 'SOAR Alternatives', href: '/soar-alternatives' },
    ],
  },
  {
    heading: 'Resources',
    links: [
      { label: 'Technical White Paper', href: '/technical-white-paper' },
      { label: 'Security Metrics', href: '/security-outcomes-and-metrics' },
      { label: 'Manifesto', href: '/manifesto' },
      { label: 'Blog', href: '/blog' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { label: 'Contact', href: '/contact' },
      { label: 'LinkedIn', href: 'https://linkedin.com/company/sirp-io', external: true },
      { label: 'Twitter', href: 'https://twitter.com/sirp_io', external: true },
    ],
  },
] as const

/* ─── Homepage Stats (legacy) ────────────────────────────── */
export const HOMEPAGE_STATS = [
  { value: '95%', label: 'Reduction in MTTR' },
  { value: '10x', label: 'Analyst efficiency' },
  { value: '<2min', label: 'Mean time to detect' },
  { value: '99.9%', label: 'Platform uptime' },
] as const

/* ─── Hero Section ───────────────────────────────────────── */
export const HERO_DATA = {
  pill: '✦ Autonomous SOC Platform',
  heading: 'Imagine, a self-driving SOC',
  subheading: 'SIRP OmniSense™, is the first Autonomous SOC that\'s actually autonomous. An AI agentic mesh that detects, learns, responds and evolves. Just like your best analyst, only at machine speed.',
  primaryBtn: { label: 'Learn more', href: '/autonomous-security' },
  secondaryBtn: { label: 'How it works', href: '/how-autonomous-soc-works' },
  videoSrc: 'https://framerusercontent.com/assets/Y7AXz4zHC2BiXgrFSoKP52cRE.webm',
} as const

/* ─── Stats Section ──────────────────────────────────────── */
export const STATS_DATA = {
  pill: '🔮 Results you can see',
  heading: 'Results backed by',
  headingItalic: 'intelligent',
  headingSuffix: 'automation',
  subheading: 'OmniSense™ delivers measurable outcomes with less human intervention.',
  learnMoreHref: '/security-outcomes-and-metrics',
  stats: [
    {
      value: '80',
      label: 'reduction in MTTD',
      gradient: 'linear-gradient(6462deg, rgb(39, 232, 126) 0%, rgb(146, 248, 192) 50%, rgb(255, 255, 255) 100%)',
      icon: '/images/stats/mttd.png',
    },
    {
      value: '70',
      label: 'faster MTTR',
      gradient: 'linear-gradient(6462deg, rgb(19, 163, 173) 0%, rgb(127, 210, 216) 50%, rgb(255, 255, 255) 100%)',
      icon: '/images/stats/mttr.png',
    },
    {
      value: '90',
      label: 'autonomous actions',
      gradient: 'linear-gradient(6462deg, rgb(255, 144, 48) 0%, rgb(255, 195, 144) 50%, rgb(255, 255, 255) 100%)',
      icon: '/images/stats/autonomous.png',
    },
  ],
} as const

/* ─── Autonomous Section ─────────────────────────────────── */
export const AUTONOMOUS_DATA = {
  pill: '✦ Autonomous SOC',
  heading: "The world's first",
  headingItalic: 'first',
  subheading: 'Autonomous SOC that actually thinks for itself',
  description: 'From overwhelming alert floods to prioritized incidents and automated response, OmniSense streamlines the entire journey without slowing you down.',
  videoSrc: '/videos/Home-Feature.mp4',
} as const

/* ─── Features Section ───────────────────────────────────── */
export const FEATURES_DATA = {
  pill: '✦ AI-Driven Autonomous SOC Features',
  heading: 'The future of operations is here and it\'s',
  headingItalic: 'self-learning',
  features: [
    {
      id: 'thinks',
      title: 'Security that thinks for itself',
      description: 'Not just AI-enabled, we\'re AI-native. OmniSense doesn\'t only assist, it decides. Multi-agent orchestration + proprietary models give you a SOC that learns, adapts, and defends in real time.',
      image: '/images/features/features1.png',
      textTop: false,
    },
    {
      id: 'enrichment',
      title: 'Enrichment that thinks ahead',
      description: 'No manual tab-hopping, no wasted minutes. The Enrichment Agent automatically pulls data from VirusTotal, WHOIS, AbuseIPDB, GreyNoise, and more — then explains why it matters in plain language.',
      image: '/images/features/features2.png',
      textTop: true,
    },
    {
      id: 'omnimap',
      title: "Your SOC's living graph",
      description: 'OmniMap reveals the relationships behind every incident. Assets, IOCs, vulnerabilities, and user activity are stitched together into a living graph, giving you and your agents the context needed to act decisively.',
      image: '/images/features/features3.png',
      textTop: false,
    },
    {
      id: 'sara',
      title: 'Security at your command',
      description: 'Chat with Sara and get instant insights on your queries seamlessly, from anywhere in the app.',
      image: '/images/features/features4.png',
      textTop: true,
    },
  ],
} as const

/* ─── Intelligence Section ───────────────────────────────── */
export const INTELLIGENCE_DATA = {
  heading: 'See intelligence come',
  headingItalic: 'alive',
  description: 'From overwhelming alert floods to prioritized incidents and automated response, OmniSense streamlines the entire journey without slowing you down.',
  videoSrc: '/video/Home-Feature.mp4',
} as const

/* ─── Sara Section ───────────────────────────────────────── */
export const SARA_DATA = {
  heading: 'Meet Sara, your',
  headingItalic: 'always evolving',
  headingSuffix: 'security analyst',
  description: 'Sara is the voice of your SOC\'s intelligence. She connects your team to OmniSense™, translating the power of agents, LLMs, and your environment into clarity, insight, and decisive action.',
  image: '/images/sara/sara.png',
  imageAlt: 'Sara — SIRP AI Security Analyst',
  learnMoreHref: 'https://sara-open.sirp.io/',
  learnMoreLabel: 'Learn more',
} as const

/* ─── Integrations Section ───────────────────────────────── */
export const INTEGRATIONS_DATA = {
  pill: '⚙️ Autonomous SOC Ecosystem',
  heading: 'Every tool.',
  headingItalic: 'One',
  headingSuffix: 'intelligence.',
  description: 'Connect 200+ tools into a single AI-native Autonomous SOC brain, or go further. With SIRP\'s AI assisted code builder, you can create your own integrations on the fly. Your SOC doesn\'t bend to us, OmniSense adapts to your stack.',
  logos: Array.from({ length: 19 }, (_, i) => ({
    name: `Integration ${i + 1}`,
    src: `/images/integrations/logo-${i + 1}.svg`,
  })),
} as const

/* ─── CTA Section ────────────────────────────────────────── */
export const CTA_DATA = {
  heading: 'Watch your Autonomous SOC drive',
  headingItalic: 'itself',
  primaryBtn: { label: 'What is Autonomous SOC?', href: '/what-is-autonomous-soc' },
  secondaryBtn: { label: 'Learn More', href: '/how-autonomous-soc-works' },
} as const

/* ─── What is Autonomous SOC — Page Data ─────────────────── */
export const WHAT_IS_AUTONOMOUS_SOC_HEADER = {
  badgeText: 'Pillar',
  heading: {
    prefix: 'What is an ',
    emphasized: 'Autonomous SOC',
    suffix: '?',
  },
  subtext: {
    paragraph1: 'An Autonomous SOC is a security operations model where AI systems independently detect, investigate, decide, and respond to defined classes of incidents within governance boundaries.',
    paragraph2: 'Unlike traditional SOAR platforms that automate static workflows, an Autonomous SOC evaluates live context, computes risk dynamically, selects a response, and executes actions based on policy and confidence thresholds.',
    paragraph3: 'The goal is not to replace analysts. The goal is to redesign how security decisions are made.',
  },
} as const

export const WHAT_IS_AUTONOMOUS_SOC_TRADITIONAL_MODELS = {
  heading: {
    line1: 'Why Traditional SOC',
    line2: "Models Don't Scale",
  },
  intro: 'Traditional SOC models rely on sequential human routing: alert generation, analyst investigation, supervisory review, and manual remediation. This process breaks down under modern conditions of high alert volume, tool sprawl, and AI-driven attack velocity.',
  lead: "Today's challenges include:",
  points: [
    'AI-driven attacks operating 24/7',
    'Growing alert fatigue and analyst burnout',
    'Talent shortages across cybersecurity teams',
    'Increasing pressure to reduce response time',
  ],
  outro: 'Simply adding automation is no longer enough. Security teams need systems that can independently resolve routine incidents safely.',
  image: {
    src: '/images/traditional soc models/soc model.png',
    alt: 'Human SOC and Autonomous SOC comparison diagram',
  },
} as const

export const WHAT_IS_AUTONOMOUS_SOC_HOW_IT_WORKS = {
  heading: 'How an Autonomous SOC Works',
  intro: 'An Autonomous SOC is not a feature set. It is an architectural shift from task automation to decision ownership. To function safely, it must maintain a complete reasoning and execution loop.',
  lead: 'At SIRP, that includes:',
  steps: [
    { number: '1', title: 'Continuous Signal Ingestion', description: 'Collecting and correlating alerts across SIEM, EDR, identity, cloud, and SaaS tools.', borderIcon: '/images/global/number border purple.svg' },
    { number: '2', title: 'Real-Time Context Construction', description: 'Using OmniMap to maintain persistent relationships between users, endpoints, incidents, and historical actions.', borderIcon: '/images/global/number border purple.svg' },
    { number: '3', title: 'Intelligent Reasoning', description: 'Applying OmniSense, powered by the OmniSec LLM and tenant-grounded retrieval, to interpret and evaluate the situation.', borderIcon: '/images/global/number border purple.svg' },
    { number: '4', title: 'Adaptive Response Optimization', description: 'Leveraging OmniFlex, the reinforcement learning layer, to determine the most effective containment strategy based on prior outcomes and analyst feedback.', borderIcon: '/images/global/number border purple.svg' },
    { number: '5', title: 'Policy-Bound Execution', description: 'Executing remediation actions only when confidence thresholds and governance constraints are satisfied.', borderIcon: '/images/global/number border purple.svg' },
    { number: '6', title: 'Native Traceability', description: 'Recording the reasoning path, evidence, and actions for every autonomous decision.', borderIcon: '/images/global/number border purple.svg' },
  ],
  notes: [
    'If a system only recommends actions and waits for approval, it is assistive.',
    'If it can resolve defined incident classes independently within policy boundaries, it is autonomous.',
  ],
} as const

export const WHAT_IS_AUTONOMOUS_SOC_BENEFITS = {
  badgeText: 'The Business Outcome',
  heading: 'Benefits of an Autonomous SOC',
  intro: 'SIRP changes the shape of your cost curve. Instead of growth increasing operational drag, growth increases leverage.',
  cards: [
    {
      icon: 'chart',
      title: 'Faster Incident Response',
      paragraphs: [
        'By eliminating routing delays for low-risk incidents, response time decreases significantly. This is possible because of the continuous decision pipeline that governs how autonomous SOC works in real time.',
        'Routine phishing, known IOC matches, and predefined account abuse patterns can be resolved automatically — within policy.',
      ],
    },
    {
      icon: 'mute',
      title: 'Reduced Alert Fatigue',
      paragraphs: [
        'Noise and false positives are cleared before reaching analysts.',
        'Only cases that require judgment or exception handling are escalated.',
      ],
    },
    {
      icon: 'hand',
      title: 'Consistent Decision-Making',
      paragraphs: [
        'Autonomous systems do not vary by shift, fatigue level, or experience.',
        'Policy is enforced uniformly.',
      ],
    },
    {
      icon: 'refresh',
      title: 'Continuous Improvement',
      paragraphs: [
        'Through OmniFlex, containment strategies improve over time.',
        'Through OmniCollective, learning can strengthen across environments without sharing raw data.',
        'Autonomy compounds.',
      ],
    },
  ],
} as const

export const WHAT_IS_AUTONOMOUS_SOC_RIGHT_BALANCE = {
  heading: {
    line1: 'The Right Balance of Human',
    line2: 'and Machine',
  },
  paragraphs: ['An autonomous SOC does not remove humans from security operations.', 'It repositions them.'],
  analystDefinesLead: 'Analysts define:',
  analystDefines: ['Execution boundaries', 'Confidence thresholds', 'Escalation conditions', 'Irreversible action restrictions'],
  operationsParagraph: 'The system operates inside those guardrails.',
  analystFocusLead: 'Analysts focus on:',
  analystFocus: ['Complex investigations', 'Emerging threat hunting', 'Governance and oversight', 'Strategic security improvements'],
  closingLines: [
    'Human-in-the-loop for every alert does not scale.',
    'Human-on-the-loop governance does. This architectural shift reflects the fundamental difference between SOAR and autonomous SOC operating models.',
  ],
  differenceLink: { label: 'difference between SOAR and autonomous SOC', href: '/soar-vs-autonomous-soc' },
  image: {
    src: '/images/benefitsOfSOC/right balance.png',
    alt: 'OmniSense autonomous mode interface with human and machine balance visual',
  },
} as const

export const WHAT_IS_AUTONOMOUS_SOC_SAFETY = {
  heading: {
    line1: 'Is an Autonomous SOC',
    line2: 'Safe?',
  },
  paragraphs: ['Safety depends on architecture.', 'SIRP enforces:'],
  points: ['Confidence-gated execution', 'Structured escalation policies', 'Shadow validation before live autonomy', 'Full audit trails for every action'],
  closingLines: ['Autonomy without governance is risky.', 'Governed autonomy is safer than manual response under fatigue.'],
  image: {
    src: '/images/benefitsOfSOC/machine decision making.png',
    alt: 'Machine decision-making and human authority governance diagram',
  },
} as const

export const WHAT_IS_AUTONOMOUS_SOC_COMPARISON = {
  heading: 'Automated SOC vs Autonomous SOC',
  cards: [
    {
      title: 'Automated SOC',
      points: ['Executes predefined playbooks', 'Relies on static logic', 'Requires frequent manual oversight', 'Focused on task automation'],
      glow: 'red',
    },
    {
      title: 'Autonomous SOC',
      points: ['Computes decisions dynamically', 'Adapts based on context and outcomes', 'Operates independently within policy guardrails', 'Focused on decision ownership'],
      glow: 'yellow',
    },
  ],
  redesign: {
    heading: 'The Structural Redesign of the Modern SOC',
    paragraphs: [
      'Security automation was the first evolution in modern SOC design. Autonomous SOC represents the next phase — governed, AI-driven decision systems capable of operating at machine speed while preserving human oversight.',
      'SIRP delivers a governed Autonomous SOC platform designed for the AI era.',
    ],
  },
} as const

/* ─── How Autonomous SOC Works Page ──────────────────────── */
export const HOW_AUTONOMOUS_SOC_WORKS_DATA = {
  hero: {
    badge:         'HOW IT WORKS',
    heading:       'How an autonomous SOC works',
    headingItalic: '',
    description:   'SIRP doesn\'t add automation to a broken process. It replaces the process entirely with a continuous decision system that ingests, reasons, governs, acts, and learns. In real time.',
  },
  overview: {
    heading:    'Architecture overview',
    subheading: 'Six layers. One continuous loop.',
    subtext:    'SIRP functions as a closed-loop Autonomous SOC built around six core layers. Every layer runs continuously as your environment changes.',
    subtext2:   'Not per ticket. Not per alert. Evaluated as an evolving system state.',
    image:      '/images/autonomous-soc/learning.png',
    imageAlt:   'Six layers architecture overview',
  },
  steps: [
    {
      number:      '01',
      label:       'Step one',
      title:       'Signal Ingestion',
      description: 'SIRP ingests telemetry from your entire stack: Identity providers, endpoints, cloud, network, SaaS, threat intel, and your existing SIEM/EDR/XDR. Every signal is normalized into structured entities. No blind spots. No filtered snapshots.',
      images: [
        '/images/autonomous-soc/reasoning.png',
      ],
    },
    {
      number:      '02',
      label:       'Step two',
      title:       'Relational Context',
      description: 'Most tools treat alerts as isolated events. Three signals, three tickets, zero connected thinking.\n\nOmniMap maps the relationships between identities, devices, workloads, access paths, and historical incidents so SIRP can estimate blast radius and detect exposure paths before a human would even think to connect them.',
      images: [
        '/images/autonomous-soc/context.png',
      ],
    },
    {
      number:      '03',
      label:       'Step three',
      title:       'Risk Evaluation & Reasoning',
      description: 'OmniSense continuously evaluates system state against behavioral baselines, threat intel, privilege levels, asset sensitivity, and OmniMap\'s relational context. For every event: a risk score, a confidence level, eligible actions, and a clear execution authorization.\n\nIt doesn\'t just flag what\'s bad. It decides what to do about it.',
      images: [
        '/images/autonomous-soc/mesh.png',
      ],
    },
    {
      number:      '04',
      label:       'Step four',
      title:       'Policy Validation',
      description: 'Autonomy without governance is just chaos with better tooling. Every decision is validated against your policies permitted actions, risk thresholds, asset constraints, escalation rules.\n\nConditions met? It acts.\n\nConditions not met? It escalates.\n\nNo ambiguity.',
      images: [
        '/images/autonomous-soc/ingestion.png',
      ],
    },
    {
      number:      '05',
      label:       'Step five',
      title:       'Autonomous Execution',
      description: 'This is where most platforms stop and send you a Slack message. SIRP\'s Agentic Mesh executes — endpoint isolation, identity restriction, session termination, network containment, cloud workload isolation — the moment governance and confidence conditions are met.',
      images: [
        '/images/autonomous-soc/ingestion-2.png',
      ],
    },
    {
      number:      '06',
      label:       'Step six',
      title:       'Decision Memory & Learning',
      description: 'Every decision is recorded: context, actors, actions, outcomes, analyst feedback. This memory feeds back into OmniSense, refining future risk evaluation continuously.\n\nStatic systems degrade. Learning systems compound.',
      images: [
        '/images/autonomous-soc/execution.png',
      ],
    },
  ],
} as const

/* ─── SOAR vs Autonomous SOC page ───────────────────────── */
export const SOAR_VS_AUTONOMOUS_SOC_HEADER = {
  heading: {
    line1: 'SOAR vs Autonomous SOC:',
    line2: "What's the Difference?",
  },
  paragraph1: {
    line1:
      'Security Orchestration, Automation, and Response (SOAR) platforms were introduced to reduce manual\u00A0effort in security operations.',
    line2:
      'They automate workflows, trigger playbooks, and coordinate tools across the SOC.',
  },
  paragraph2: {
    beforeLink:
      'Autonomous SOC represents a different architectural model. To understand the core concept, see ',
    link1Label: 'what an autonomous SOC is',
    link1Href: '/what-is-autonomous-soc',
    betweenLinks: ' and ',
    link2Label: 'how it changes security operations',
    link2Href: '/how-autonomous-soc-works',
    afterLinks: '.',
  },
  paragraph3:
    'Instead of focusing primarily on workflow orchestration, an Autonomous SOC embeds decision logic, risk computation, and policy enforcement directly into the operating system of security operations.',
  paragraph4:
    'This page explains how SOAR and Autonomous SOC differ — and where each model fits.',
} as const

export const SOAR_VS_AUTONOMOUS_SOC_METADATA = {
  title: 'SOAR vs Autonomous SOC | Key Differences Explained | SIRP',
  description:
    'Compare SOAR vs Autonomous SOC to understand how workflow automation differs from AI-driven decision systems and governed security execution.',
} as const

export const SOAR_VS_WHAT_IS_SOAR = {
  heading: 'What Is SOAR?',
  summary:
    'SOAR platforms are designed to orchestrate tools and automate predefined workflows.',
  listLead: 'They typically:',
  points: [
    'Trigger playbooks when alerts are received',
    'Execute branching logic based on rules',
    'Integrate across SIEM, EDR, and ticketing systems',
    'Require human validation for critical actions',
  ],
  closing:
    'SOAR reduces repetitive work by automating steps. However, it does not fundamentally change where decision authority resides. Analysts still review, validate, and execute most meaningful response actions.',
  image: {
    src: '/images/soar vs autonomous/what-is-soar.png',
    alt: 'SOAR diagram: human availability, incoming tickets, swift coverage',
  },
} as const

export const SOAR_VS_WHAT_IS_AUTONOMOUS_SOC = {
  heading: 'What Is an Autonomous SOC?',
  definition:
    'An Autonomous SOC is a security operations model in which AI systems independently analyze incidents, compute risk dynamically, and execute response actions within governance boundaries.',
  listLead: 'Rather than following static playbooks, an Autonomous SOC:',
  points: [
    'Continuously evaluates contextual state',
    'Computes risk in real time',
    'Selects response actions based on policy and confidence thresholds',
    'Executes without routing every decision through human queues',
    'Learns from outcomes to improve future decisions',
  ],
  closing: 'The shift is from task automation to decision ownership.',
  image: {
    src: '/images/soar vs autonomous/autonomous-SOC.png',
    alt: 'Autonomous SOC funnel from high alert volume to governed human review',
  },
} as const

export const SOAR_VS_ARCHITECTURAL_DIFFERENCE = {
  heading: 'Architectural Difference',
  introLines: ['SOAR is workflow-centric.', 'Autonomous SOC is decision-centric.'],
  cards: [
    {
      title: 'SOAR architecture:',
      points: [
        'Event → Trigger → Playbook → Action',
        'Static branching logic',
        'Human approval checkpoints',
      ],
    },
    {
      title: 'Autonomous SOC architecture:',
      points: [
        'Continuous signal ingestion',
        'Context construction across identities, endpoints, and behavior',
        'Real-time risk computation',
        'Policy-bound execution',
        'Embedded learning loop',
      ],
    },
  ],
  footer: {
    beforeLink: 'This decision pipeline is explained in detail in ',
    linkLabel: 'how autonomous SOC works',
    linkHref: '/what-is-autonomous-soc',
    afterLink: ' at the system level.',
    taglines: ['One coordinates actions.', 'The other governs decisions.'],
  },
} as const

export const SOAR_VS_COMPARISON_TABLE = {
  heading: 'SOAR vs Autonomous SOC Comparison',
  cards: [
    {
      title: 'Capability',
      glow: 'red' as const,
      points: [
        'Core Model',
        'Logic Type',
        'Human Dependency',
        'Learning',
        'Context Awareness',
        'Execution',
        'Governance',
      ],
    },
    {
      title: 'SOAR',
      glow: 'yellow' as const,
      points: [
        'Workflow orchestration',
        'Rule-based branching',
        'High for validation',
        'Manual tuning',
        'Playbook-scoped',
        'Playbook-driven',
        'External controls',
      ],
    },
    {
      title: 'Autonomous SOC',
      glow: 'blue' as const,
      points: [
        'Decision system',
        'Dynamic risk computation',
        'Policy-bound autonomy',
        'Embedded reinforcement learning',
        'State-aware across domains',
        'Confidence-gated enforcement',
        'Embedded policy model',
      ],
    },
  ],
  footerLines: [
    'SOAR automates steps.',
    'Autonomous SOC computes and enforces outcomes.',
  ],
} as const

export const SOAR_VS_WHEN_SOAR_SUFFICIENT = {
  heading: 'When SOAR Is Sufficient',
  listLead: 'SOAR may be appropriate when:',
  points: [
    'Automation is limited to enrichment workflows',
    'Incident volume is manageable',
    'Human triage remains primary',
    'Risk tolerance requires strict manual approval',
  ],
  closing:
    'In stable, low-complexity environments, workflow automation can provide efficiency gains.',
  image: {
    src: '/images/soar vs autonomous/sufficient.png',
    alt: 'Execute Playbook UI: playbook search and selection',
  },
} as const

export const SOAR_VS_WHEN_AUTONOMOUS_SOC_NEEDED = {
  heading: 'When Autonomous SOC Is Needed',
  listLead: 'An Autonomous SOC becomes necessary when:',
  points: [
    'Incident velocity exceeds human routing capacity',
    'Cross-domain attacks require dynamic context interpretation',
    'Response latency directly increases business risk',
    'Security outcomes vary by analyst experience',
    'Continuous learning is required to improve containment effectiveness',
  ],
  closing: 'In these environments, workflow orchestration becomes a bottleneck.',
  image: {
    src: '/images/soar vs autonomous/autonomous SOC needed.png',
    alt: 'Cost over time: Human SOC rising vs flat Autonomous SOC',
  },
} as const

export const SOAR_VS_NEXT_GEN_SOAR = {
  heading: 'Is Autonomous SOC Just "Next-Generation SOAR"?',
  answer: 'No.',
  paragraphs: [
    'Enhancing workflows with AI assistance does not change the underlying architecture.',
    'Autonomous SOC replaces workflow-centric orchestration with a governed decision model in which risk computation, policy enforcement, and execution are embedded within the system.',
    'It is not deeper automation.',
    'It is a different operating model.',
  ],
  image: {
    src: '/images/soar vs autonomous/next-gen-SOAR.png',
    alt: 'Autonomous SOC flow: Detection, Evaluation, and Action',
  },
} as const
