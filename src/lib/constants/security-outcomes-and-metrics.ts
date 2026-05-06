export const SOM_HERO = {
  heading: {
    italic: 'Autonomous security:',
    suffix: 'production data from Autonomous SOCs',
  },
  subtext:
    'Automation speeds up work. It does not remove the decision burden. Autonomous security does.',
  cta: { label: 'Learn more', href: '/contact' },
} as const

export const SOM_METRICS = {
  heading: "These aren't isolated improvements",
  subtext: "They're structural effects of a different execution model.",
  items: [
    {
      id: 'mttr',
      value: '20 secs',
      sub: 'instead of 6 minutes',
      badge: 'MTTR',
      color: 'teal' as const,
      icon: 'current' as const,
    },
    {
      id: 'autonomous',
      value: '~90%',
      sub: 'executed without human intervention',
      badge: 'Autonomous Actions',
      color: 'purple' as const,
      icon: 'bargraph' as const,
    },
    {
      id: 'hours',
      value: '~150 hrs',
      sub: 'per day from investigation and triage',
      badge: 'Analyst Hours Removed',
      color: 'orange' as const,
      icon: 'search' as const,
    },
    {
      id: 'roi',
      value: '~7X',
      sub: 'return on autonomous SOC operations',
      badge: 'Security ROI',
      color: 'teal' as const,
      icon: 'dollar' as const,
    },
  ],
} as const

export const SOM_AUDIENCE = {
  badge: 'Why this matters',
  items: [
    {
      id: 'cisos',
      role: 'CISOs',
      icon: 'bargraph' as const,
      title: 'Risk posture becomes predictable',
      description:
        'Response speed stops depending on shift schedules and approval chains.',
    },
    {
      id: 'cfos',
      role: 'CFOs',
      icon: 'shine' as const,
      title: 'Security costs flatten',
      description: 'Volume no longer drives headcount.',
    },
    {
      id: 'soc-directors',
      role: 'SOC Directors',
      icon: 'quater' as const,
      title: 'Team focuses on strategy',
      description: 'The system handles volume. Analyst burnout drops.',
    },
  ],
} as const

export const SOM_OUTCOMES = {
  heading: 'The four outcomes of switching to Sirp',
  items: [
    {
      id: 'response-speed',
      title: 'Response speed becomes structural',
      badge: 'New product',
      paragraphs: [
        { boldPrefix: 'To be clear:', text: '6-minute MTTR is excellent. These were mature SOCs with optimized workflows. The 18× improvement came from removing the execution queue entirely.' },
        { text: "With Sirp, decision and execution happen in the same step. Containment windows for ransomware and lateral movement are measured in minutes. When your MTTR is 20 seconds, you're inside the window." },
      ],
      image: '/images/security-outcomes-and-metrics/Responsespeed.png',
      imageAlt: 'Response speed: Human SOC vs Autonomous SOC',
    },
    {
      id: 'volume',
      title: 'Volume stops scaling with headcount',
      badge: '~1,500 investigations/day resolved autonomously',
      paragraphs: [
        { text: 'The system absorbs routine decisions. Analysts handle edge cases and novel patterns (typically <10% of volume).', bold: true },
        { text: 'Traditional SOCs scale by adding analysts. Autonomous SOCs scale by adjusting policy thresholds. Volume becomes an infrastructure problem, not a staffing problem.' },
      ],
      image: '/images/security-outcomes-and-metrics/Volume.png',
      imageAlt: 'Volume vs headcount comparison',
    },
    {
      id: 'analyst-work',
      title: 'Analyst work changes completely',
      badge: '150 analyst hours/day → <1 hour/day',
      paragraphs: [
        { boldPrefix: 'What stopped:', text: 'Reading alerts, pulling logs, documenting steps, waiting for approvals, executing actions' },
        { boldPrefix: 'What started:', text: 'Reviewing edge cases, refining policies, investigating novel patterns, strategic hunting' },
        { text: 'This isn\'t productivity improvement. This is a different job. Team retention improves. Burnout drops. Hiring requirements change from "20 analysts" to "2 senior analysts."' },
      ],
      image: '/images/security-outcomes-and-metrics/Analystwork.png',
      imageAlt: 'Analyst work distribution',
    },
    {
      id: 'cost-curve',
      title: 'The cost curve flattens',
      badge: '$800K–$1M → ~$100K annually',
      paragraphs: [
        { text: 'When execution moves to the system, shift coverage, tiered staffing, and management overhead disappear. Alert volume can be 3× without proportional cost increase.', bold: true },
        { text: 'Security stops being an execution cost. It becomes an infrastructure cost.' },
      ],
      image: '/images/security-outcomes-and-metrics/costcurve.png',
      imageAlt: 'Cost curve over time',
    },
  ],
} as const

export const SOM_DEPLOYMENTS = {
  badge: 'Real Deployments',
  heading: { italic: 'Real', suffix: ' deployments' },
  items: [
    {
      id: 'fintech',
      company: 'Global Fintech SOC',
      glow: 'purple' as const,
      tags: ['120K alerts/day', '4 regions', 'Highly regulated'],
      before: '11 analysts, approval gates, 4–6 hour case age',
      after: '2 analysts (oversight), <30 second case age, <5% human review',
      results: '7× cost reduction, zero audit findings, more thorough compliance documentation',
      quoteLabel: 'The unexpected',
      quote: 'Audit trail improved. Automated logging is more complete than manual documentation.',
    },
    {
      id: 'saas',
      company: 'SaaS Infrastructure Company',
      glow: 'teal' as const,
      tags: ['Cloud-native', 'High analyst turnover', 'Alert fatigue'],
      before: 'Tiered L1→L2→L3 escalation model',
      after: 'System-first resolution, single oversight team',
      results: '92% autonomous actions, zero routine escalations, team stayed intact',
      quoteLabel: 'The moment',
      quote: 'We ran parallel for 30 days. The autonomous system caught 3 incidents the human team missed due to the queue backlog. That ended the debate.',
    },
  ],
} as const

export const SOM_WHY = {
  heading: 'Why these metrics move together',
  subtext: "This isn't five separate improvements. It's one architectural change.",
  columns: [
    {
      id: 'traditional',
      title: 'Traditional SOC',
      body: 'Decisions happen in meetings and tickets. Execution waits for humans. Speed is limited by availability. Cost scales with volume.',
    },
    {
      id: 'autonomous',
      title: 'Autonomous SOC',
      body: 'Decisions happen in-system. Execution happens at decision time. Speed is limited by compute. Cost is decoupled from volume.',
    },
    {
      id: 'difference',
      title: 'The key difference: decision moment',
      body: 'Workflow automation accelerates human work. Autonomous execution eliminates humans from the execution pipeline entirely — creating cascading outcome improvements.',
    },
  ],
} as const

export const SOM_SYSTEM = {
  heading: "What the system doesn't handle",
  escalationLabel: 'The system escalates when:',
  escalations: [
    'Confidence falls below policy threshold',
    'Attack pattern is novel or outside training data',
    'Context requires business knowledge',
    'Multiple conflicting signals with ambiguous risk',
  ],
  stats: [
    { label: 'Escalation rate', value: '5–10%', sub: 'of investigations' },
    { label: 'False positive rate', value: '<2%', sub: '' },
  ],
  summary:
    'Humans handle ambiguity and strategy. The system handles volume and routine execution.',
} as const

export const SOM_MEASURED = {
  label: 'How we measured this:',
  items: [
    {
      id: 'scope',
      value: '3 enterprise SOCs',
      label: 'Fintech, SaaS, and healthcare',
      icon: 'search' as const,
    },
    {
      id: 'window',
      value: '90-day window',
      label: 'Post-stabilization (excludes tuning & pilots)',
      icon: 'current' as const,
    },
    {
      id: 'alerts',
      value: 'Millions of alerts',
      label: 'Across EDR, cloud, identity, SaaS, endpoint',
      icon: 'bargraph' as const,
    },
    {
      id: 'chain',
      value: 'Full chain measured',
      label: 'Detection → triage → decision → containment',
      icon: 'download' as const,
    },
  ],
} as const

export const SOM_VENN = {
  heading: 'What this means for your SOC',
  body: 'When your SOC depends on human availability and shift coverage, performance caps at analyst speed and hiring limits. Policy-bound system execution delivers predictable response speed, flat costs, consistent quality, and infrastructure-scaled volume capacity.',
  conclusion: 'The operating model changes. The outcomes follow.',
} as const

export const SOM_CTA = {
  headingItalic: "Autonomous security isn't theoretical.",
  subtext:
    "The question isn't whether autonomous SOCs work. The question is whether your current model can keep up.",
  btn: { label: 'Get a demo', href: '/contact' },
} as const
