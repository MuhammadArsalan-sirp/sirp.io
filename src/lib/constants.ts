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
    badge: 'HOW IT WORKS',
    heading: 'How an autonomous SOC works',
    headingItalic: '',
    description: 'SIRP doesn\'t add automation to a broken process. It replaces the process entirely with a continuous decision system that ingests, reasons, governs, acts, and learns. In real time.',
  },
  overview: {
    heading: 'Architecture overview',
    subheading: 'Six layers. One continuous loop.',
    subtext: 'SIRP functions as a closed-loop Autonomous SOC built around six core layers. Every layer runs continuously as your environment changes.',
    subtext2: 'Not per ticket. Not per alert. Evaluated as an evolving system state.',
    image: '/images/autonomous-soc/learning.png',
    imageAlt: 'Six layers architecture overview',
  },
  steps: [
    {
      number: '01',
      label: 'Step one',
      title: 'Signal Ingestion',
      description: 'SIRP ingests telemetry from your entire stack: Identity providers, endpoints, cloud, network, SaaS, threat intel, and your existing SIEM/EDR/XDR. Every signal is normalized into structured entities. No blind spots. No filtered snapshots.',
      images: [
        '/images/autonomous-soc/reasoning.png',
      ],
    },
    {
      number: '02',
      label: 'Step two',
      title: 'Relational Context',
      description: 'Most tools treat alerts as isolated events. Three signals, three tickets, zero connected thinking.\n\nOmniMap maps the relationships between identities, devices, workloads, access paths, and historical incidents so SIRP can estimate blast radius and detect exposure paths before a human would even think to connect them.',
      images: [
        '/images/autonomous-soc/context.png',
      ],
    },
    {
      number: '03',
      label: 'Step three',
      title: 'Risk Evaluation & Reasoning',
      description: 'OmniSense continuously evaluates system state against behavioral baselines, threat intel, privilege levels, asset sensitivity, and OmniMap\'s relational context. For every event: a risk score, a confidence level, eligible actions, and a clear execution authorization.\n\nIt doesn\'t just flag what\'s bad. It decides what to do about it.',
      images: [
        '/images/autonomous-soc/mesh.png',
      ],
    },
    {
      number: '04',
      label: 'Step four',
      title: 'Policy Validation',
      description: 'Autonomy without governance is just chaos with better tooling. Every decision is validated against your policies permitted actions, risk thresholds, asset constraints, escalation rules.\n\nConditions met? It acts.\n\nConditions not met? It escalates.\n\nNo ambiguity.',
      images: [
        '/images/autonomous-soc/ingestion.png',
      ],
    },
    {
      number: '05',
      label: 'Step five',
      title: 'Autonomous Execution',
      description: 'This is where most platforms stop and send you a Slack message. SIRP\'s Agentic Mesh executes — endpoint isolation, identity restriction, session termination, network containment, cloud workload isolation — the moment governance and confidence conditions are met.',
      images: [
        '/images/autonomous-soc/ingestion-2.png',
      ],
    },
    {
      number: '06',
      label: 'Step six',
      title: 'Decision Memory & Learning',
      description: 'Every decision is recorded: context, actors, actions, outcomes, analyst feedback. This memory feeds back into OmniSense, refining future risk evaluation continuously.\n\nStatic systems degrade. Learning systems compound.',
      images: [
        '/images/autonomous-soc/execution.png',
      ],
    },
  ],
} as const

/* ═══════════════════════════════════════════════════════════
   OMNISENSE PAGE
═══════════════════════════════════════════════════════════ */
export const OMNISENSE_PAGE_DATA = {
  hero: {
    badge:         'Autonomous SOC Platform',
    headingItalic: 'Actually',
    heading:       'autonomous.',
    description:   'SIRP OmniSense™ delivers a governed Autonomous SOC that continuously detects, decides, and executes response actions within defined policy boundaries. It also thinks, learns and acts at machine speed, without the noise or the burnout.',
    ctaLabel:      'Learn more about Autonomous SOC',
    ctaHref:       '/how-autonomous-soc-works',
    image:         '/images/omnisense/architecture.png',
    imageAlt:      'OmniSense architecture overview',
  },
  platform: {
    badge:         'The AI-native Autonomous SOC platform',
    heading:       'Not just smarter.',
    headingItalic: 'Truly',
    headingSuffix: 'autonomous.',
    tabs: [
      {
        id:          'omnisense-core',
        label:       'OmniSense Core',
        title:       'OmniSense Core',
        description: 'The foundation: a living mesh of autonomous security agents and the orchestrator that binds them. It\'s where reflex, reasoning, and execution converge.',
        image:       '/images/omnisense/omnisense-core.png',
      },
      {
        id:          'omnisec-llm',
        label:       'OmniSec LLM',
        title:       'OmniSec LLM',
        description: 'A security-tuned large language model trained on threat intel, incident data, and SOC workflows. It powers natural-language reasoning, alert narration, and co-analyst capabilities across the platform.',
        image:       '/images/omnisense/omnisec-llm.png',
      },
      {
        id:          'omnimap-rag',
        label:       'OmniMap + RAG',
        title:       'OmniMap + RAG',
        description: 'OmniMap builds a live relational graph of your environment — identities, devices, workloads, access paths. RAG grounds every decision in your organization\'s own context, history, and policies.',
        image:       '/images/omnisense/omnimap-rag.png',
      },
      {
        id:          'omniflex',
        label:       'OmniFlex',
        title:       'OmniFlex',
        description: 'The integration and orchestration layer. OmniFlex connects OmniSense to your entire security stack — SIEM, EDR, SOAR, identity, cloud — and executes bi-directional actions without manual routing.',
        image:       '/images/omnisense/omniflex.png',
      },
      {
        id:          'omnicollective',
        label:       'OmniCollective',
        title:       'OmniCollective',
        description: 'Collective threat intelligence that improves every OmniSense deployment. Anonymized signals from the network feed back into detection models, making every instance smarter over time.',
        image:       '/images/omnisense/omnicollective.png',
      },
    ],
  },
  agents: {
    heading:     'Agents in the mesh',
    description: "OmniSense's autonomous SOC agents in the mesh accelerate alert containment, optimizing security operations with faster incident analysis, remediation, and response.",
    items: [
      {
        icon:        'classification',
        title:       'Classification Agent',
        description: 'The Classification Agent categorizes incoming alerts based on type (e.g., phishing, malware, insider threat). This helps in efficient triaging and routing of the alerts for appropriate action.',
      },
      {
        icon:        'playbook',
        title:       'Suggest Playbook Agent',
        description: 'The Suggest Playbook Agent proposes relevant playbooks to follow based on the nature of the incident. It helps in ensuring that the right procedures are applied, aligning actions with pre-configured, best-practice response procedures.',
      },
      {
        icon:        'assign',
        title:       'Assign Analyst Agent',
        description: 'The Assign Analyst Agent automatically assigns alerts to available analysts based on their expertise and workload. This optimizes resource allocation, ensuring that the right person handles the right incident.',
      },
      {
        icon:        'header',
        title:       'Header Analysis Agent',
        description: 'Analysis email headers to detect spoofing, relay abuse, sender mismatches and anomalous routing, enhancing phishing detection, sender trust scoring and automated triage.',
      },
      {
        icon:        'preprocessor',
        title:       'Pre Processor Agent',
        description: 'Processes and normalizes raw alerts by extracting key entities and context for downstream triage and enrichment.',
      },
      {
        icon:        'enrichment',
        title:       'Enrichment Agent',
        description: 'The Enrichment Agent gathers external threat intelligence, asset data, and historical context to add depth to incoming alerts. It ensures that each alert is enriched with relevant details for better analysis and decision-making.',
      },
      {
        icon:        'analysis',
        title:       'Analysis Agent',
        description: 'The Analysis Agent analyzes alerts to identify patterns, behaviors, and trends. It examines alert data and context, highlighting anomalous activities and key indicators, aiding the analyst in setting to quicker threat detection.',
      },
      {
        icon:        'remediation',
        title:       'Remediation Agent',
        description: 'The Remediation Agent executes containment actions, such as isolating endpoints or blocking IPs, to automate remediation, ensuring swift and consistent incident response.',
      },
      {
        icon:        'actions',
        title:       'Suggested Actions Agent',
        description: 'The Suggested Actions Agent proposes targeted response steps based on alert context and severity, providing analysts with timely and appropriate responses to threats.',
      },
    ],
  },
  action: {
    heading: 'See Autonomous SOC in Action',
    description: 'Watch how SIRP ingests a live alert, constructs relational context, computes risk, enforces policy boundaries, and executes containment actions autonomously — without manual routing or workflow delays.',
    note1: 'This is not playbook automation.',
    note2: 'This is governed decision execution.',
    videoId: 'VIeVs8nbM6U',
  },
} as const
