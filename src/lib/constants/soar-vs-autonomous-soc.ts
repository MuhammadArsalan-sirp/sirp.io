export const SOAR_VS_AUTONOMOUS_SOC_HEADER = {
  heading: {
    line1: 'SOAR vs Autonomous SOC:',
    line2: "What's the Difference?",
  },
  paragraph1: {
    lines: [
      'Security Orchestration, Automation, and Response (SOAR) platforms were introduced to reduce manual',
      'effort in security operations. They automate workflows, trigger playbooks, and coordinate tools across',
      'the SOC.',
    ],
  },
  paragraph2: {
    line1:
      'Autonomous SOC represents a different architectural model. To understand the core concept, see what',
    link1Label: 'an autonomous SOC is',
    link1Href: '/what-is-autonomous-soc',
    betweenLinks: ' and ',
    link2Label: 'how it changes security operations.',
    link2Href: '/how-autonomous-soc-works',
  },
  paragraph3: {
    line1:
      'Instead of focusing primarily on workflow orchestration, an Autonomous SOC embeds decision logic,',
    line2:
      'risk computation, and policy enforcement directly into the operating system of security operations.',
  },
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
    'Selects response actions based on policy and \nconfidence thresholds',
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
      glow: 'yellow' as const,
      points: [
        'Event → Trigger → Playbook → Action',
        'Static branching logic',
        'Human approval checkpoints',
      ],
    },
    {
      title: 'Autonomous SOC architecture:',
      glow: 'blue' as const,
      points: [
        'Continuous signal ingestion',
        'Context construction across identities, endpoints, and behavior',
        'Real-time risk computation',
        'Policy-bound execution',
        'Embedded learning loop',
      ],
    },
  ],
  footerWithLink: {
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

export const SOAR_VS_MIGRATION_CONSIDERATIONS = {
  heading: 'Migration Considerations',
  intro: {
    line1Before:
      'Transitioning from SOAR to Autonomous SOC does not require immediate replacement. Most organizations replace workflow-centric automation with ',
    linkLabel: 'SOAR alternatives',
    linkHref: '/soar-alternatives',
    line1After: ' built for autonomous response.',
    line2: 'A phased approach may include:',
  },
  cards: [
    {
      icon: 'chart' as const,
      title: 'Deploying Autonomous SOC alongside existing SOAR',
      paragraphs: [],
    },
    {
      icon: 'sparkle' as const,
      title: 'Defining execution boundaries and policy thresholds',
      paragraphs: [],
    },
    {
      icon: 'pie' as const,
      title: 'Moving repetitive containment classes into autonomous execution',
      paragraphs: [],
    },
    {
      icon: 'pie' as const,
      title: 'Gradually reducing human gating as confidence matures',
      paragraphs: [],
    },
  ],
  footerLines: [
    'The objective is not eliminating analysts.',
    'It is relocating human effort from routing work to defining governance.',
  ],
} as const

export const SOAR_VS_ARCHITECTURE_AUTHORITY = {
  heading: 'Architecture Determines Authority',
  paragraphs: [
    'SOAR introduced automation into the SOC.',
    'Autonomous SOC introduces governed decision systems.',
    'If your security operations still rely on inbox routing, workflow tuning, and manual validation for meaningful response, the limitation may not be automation\ndepth — but architectural design.',
    'Autonomous SOC represents the next evolution in security operations.',
  ],
} as const
