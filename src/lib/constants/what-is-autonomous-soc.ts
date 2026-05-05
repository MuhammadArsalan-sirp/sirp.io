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
