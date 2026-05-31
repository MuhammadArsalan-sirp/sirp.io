export const SOAR_ALTERNATIVES_KEY_DIFFERENCES = {
  heading: 'SOAR vs Autonomous SOC: Key Differences',
  cards: [
    {
      title: 'Area',
      glow: 'red' as const,
      points: [
        'Core Function',
        'Risk Handling',
        'Human Dependency',
        'Adaptability',
        'Scalability',
        'Governance',
      ],
    },
    {
      title: 'SOAR',
      glow: 'yellow' as const,
      points: [
        'Workflow orchestration',
        'Static logic',
        'Frequent validation',
        'Manual tuning',
        'Scales steps',
        'External controls',
      ],
    },
    {
      title: 'Autonomous SOC',
      glow: 'purple' as const,
      points: [
        'Decision system',
        'Continuous computation',
        'Policy-bound autonomy',
        'Embedded learning',
        'Scales decisions',
        'Native enforcement',
      ],
    },
  ],
  footerWithLink: {
    beforeLink: 'For a full structural comparison, see: ',
    linkLabel: 'SOAR vs Autonomous SOC',
    linkHref: '/soar-vs-autonomous-soc',
    afterLink: '',
    taglines: ['SOAR automates tasks.', 'Autonomous SOC governs outcomes.'],
    taglinesPosition: 'before' as const,
  },
} as const

export const SOAR_ALTERNATIVES_FAQ = {
  heading: 'Frequently Asked Questions',
  items: [
    {
      question: 'What is the best SOAR alternative?',
      answer:
        'The most effective SOAR alternative is a decision-centric Autonomous SOC platform that embeds risk computation and policy enforcement directly into the operating model.',
    },
    {
      question: 'Is Autonomous SOC a replacement for SOAR?',
      answer: 'Yes. It replaces workflow-centric orchestration with governed, policy-bound execution.',
    },
    {
      question: 'Can AI improve SOAR instead of replacing it?',
      answer:
        'AI layered onto workflows may assist analysts, but it does not relocate decision authority. Autonomous SOC embeds intelligence into the system itself.',
    },
    {
      question: 'When should an organization move away from SOAR?',
      answer:
        'When manual routing, playbook tuning, and approval chains become the limiting factor in response speed and consistency.',
    },
  ],
} as const

export const SOAR_ALTERNATIVES_OPERATING_MODEL_CTA = {
  headingLine1: 'SOAR Was an Automation Layer.',
  headingLine2: 'Autonomous SOC Is the Operating Model.',
  paragraphs: [
    'SOAR introduced automation into security operations.',
    'Autonomous SOC introduces governed decision systems.',
    'If your SOC still depends on inbox routing, playbook maintenance, and manual validation for meaningful response, the limitation may not be automation depth — but architectural design.',
  ],
  primaryButton: {
    label: 'See Autonomous SOC in Action',
    href: '/how-autonomous-soc-works',
  },
  secondaryButton: {
    label: 'Talk to an Architect',
    href: '/contact',
  },
} as const
