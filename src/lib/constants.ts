export const SITE_URL = 'https://www.sirp.io'
export const SITE_NAME = 'SIRP'
export const SITE_DESCRIPTION =
  'OmniSense — the first Autonomous SOC Platform that detects, learns, and responds autonomously.'

export const NAV_LINKS = [
  {
    label: 'Autonomous Security',
    href: '/autonomous-security',
    children: [
      { label: 'What is Autonomous Security',  href: '/autonomous-security',        description: 'The autonomous security model' },
      { label: 'What is an Autonomous SOC',    href: '/what-is-autonomous-soc',     description: 'Understanding autonomous SOC' },
      { label: 'How Autonomous SOC Works',     href: '/how-autonomous-soc-works',   description: 'Under the hood' },
      { label: 'Autonomous SOC vs SOAR',       href: '/soar-vs-autonomous-soc',     description: 'Side-by-side comparison' },
      { label: 'SOAR Alternatives',            href: '/soar-alternatives',          description: 'Make the switch' },
    ],
  },
  {
    label: 'Platform',
    href: '#',
    children: [
      { label: 'OmniSense Platform',          href: '/omnisense',                      description: 'AI-native SOC mesh' },
      { label: 'Enterprise SOC',               href: '/enterprise-soc',                 description: 'Built for scale' },
      { label: 'Security Outcomes & Metrics',  href: '/security-outcomes-and-metrics',  description: 'Measurable ROI' },
    ],
  },
  {
    label: 'Resources',
    href: '#',
    children: [
      { label: 'Technical White Paper',     href: '/technical-white-paper',     description: 'Deep dive' },
      { label: 'Manifesto',                 href: '/manifesto',                 description: 'Our vision' },
      { label: 'Blog',                      href: '/blog',                      description: 'Insights & news' },
    ],
  },
  {
    label: 'Contact',
    href: '/contact',
  },
] as const

export const ROUTES = {
  home:                 '/',
  autonomousSecurity:   '/autonomous-security',
  whatIsAutonomousSoc:  '/what-is-autonomous-soc',
  howAutonomousSocWorks:'/how-autonomous-soc-works',
  soarVsAutonomousSoc:  '/soar-vs-autonomous-soc',
  soarAlternatives:     '/soar-alternatives',
  omnisense:            '/omnisense',
  enterpriseSoc:        '/enterprise-soc',
  securityOutcomes:     '/security-outcomes-and-metrics',
  technicalWhitePaper:  '/technical-white-paper',
  blog:                 '/blog',
  manifesto:            '/manifesto',
  contact:              '/contact',
} as const

export const FOOTER_LINKS = [
  {
    heading: 'Product',
    links: [
      { label: 'Autonomous Security',         href: '/autonomous-security' },
      { label: 'OmniSense',                   href: '/omnisense' },
      { label: 'Enterprise SOC',              href: '/enterprise-soc' },
    ],
  },
  {
    heading: 'Learn',
    links: [
      { label: 'What is Autonomous SOC?',     href: '/what-is-autonomous-soc' },
      { label: 'How it Works',                href: '/how-autonomous-soc-works' },
      { label: 'SOAR vs Autonomous SOC',      href: '/soar-vs-autonomous-soc' },
      { label: 'SOAR Alternatives',           href: '/soar-alternatives' },
    ],
  },
  {
    heading: 'Resources',
    links: [
      { label: 'Technical White Paper',       href: '/technical-white-paper' },
      { label: 'Security Metrics',            href: '/security-outcomes-and-metrics' },
      { label: 'Manifesto',                   href: '/manifesto' },
      { label: 'Blog',                        href: '/blog' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { label: 'Contact',    href: '/contact' },
      { label: 'LinkedIn',   href: 'https://linkedin.com/company/sirp-io', external: true },
      { label: 'Twitter',    href: 'https://twitter.com/sirp_io',          external: true },
    ],
  },
] as const

export const HOMEPAGE_STATS = [
  { value: '95%',   label: 'Reduction in MTTR' },
  { value: '10x',   label: 'Analyst efficiency' },
  { value: '<2min', label: 'Mean time to detect' },
  { value: '99.9%', label: 'Platform uptime' },
] as const

export const WHAT_IS_AUTONOMOUS_SOC_HEADER = {
  badgeText: 'Pillar',
  heading: {
    prefix: 'What is an ',
    emphasized: 'Autonomous SOC',
    suffix: '?',
  },
  subtext: {
    paragraph1:
      'An Autonomous SOC is a security operations model where AI systems independently detect, investigate, decide, and respond to defined classes of incidents within governance boundaries.',
    paragraph2:
      'Unlike traditional SOAR platforms that automate static workflows, an Autonomous SOC evaluates live context, computes risk dynamically, selects a response, and executes actions based on policy and confidence thresholds.',
    paragraph3:
      'The goal is not to replace analysts. The goal is to redesign how security decisions are made.',
  },
} as const

export const WHAT_IS_AUTONOMOUS_SOC_TRADITIONAL_MODELS = {
  heading: 'Why Traditional SOC Models Don’t Scale',
  intro:
    'Traditional SOC models rely on sequential human routing: alert generation, analyst investigation, supervisory review, and manual remediation. This process breaks down under modern conditions of high alert volume, tool sprawl, and AI-driven attack velocity.',
  lead: "Today’s challenges include:",
  points: [
    'AI-driven attacks operating 24/7',
    'Growing alert fatigue and analyst burnout',
    'Talent shortages across cybersecurity teams',
    'Increasing pressure to reduce response time',
  ],
  outro:
    'Simply adding automation is no longer enough. Security teams need systems that can independently resolve routine incidents safely.',
  image: {
    src: '/images/traditional soc models/soc model.png',
    alt: 'Human SOC and Autonomous SOC comparison diagram',
  },
} as const

export const WHAT_IS_AUTONOMOUS_SOC_HOW_IT_WORKS = {
  heading: 'How an Autonomous SOC Works',
  intro:
    'An Autonomous SOC is not a feature set. It is an architectural shift from task automation to decision ownership. To function safely, it must maintain a complete reasoning and execution loop.',
  lead: 'At SIRP, that includes:',
  steps: [
    {
      number: '1',
      title: 'Continuous Signal Ingestion',
      description:
        'Collecting and correlating alerts across SIEM, EDR, identity, cloud, and SaaS tools.',
      borderIcon: '/images/global/number border purple.svg',
    },
    {
      number: '2',
      title: 'Real-Time Context Construction',
      description:
        'Using OmniMap to maintain persistent relationships between users, endpoints, incidents, and historical actions.',
      borderIcon: '/images/global/number border purple.svg',
    },
    {
      number: '3',
      title: 'Intelligent Reasoning',
      description:
        'Applying OmniSense, powered by the OmniSec LLM and tenant-grounded retrieval, to interpret and evaluate the situation.',
      borderIcon: '/images/global/number border purple.svg',
    },
    {
      number: '4',
      title: 'Adaptive Response Optimization',
      description:
        'Leveraging OmniFlex, the reinforcement learning layer, to determine the most effective containment strategy based on prior outcomes and analyst feedback.',
      borderIcon: '/images/global/number border purple.svg',
    },
    {
      number: '5',
      title: 'Policy-Bound Execution',
      description:
        'Executing remediation actions only when confidence thresholds and governance constraints are satisfied.',
      borderIcon: '/images/global/number border purple.svg',
    },
    {
      number: '6',
      title: 'Native Traceability',
      description:
        'Recording the reasoning path, evidence, and actions for every autonomous decision.',
      borderIcon: '/images/global/number border purple.svg',
    },
  ],
  notes: [
    'If a system only recommends actions and waits for approval, it is assistive.',
    'If it can resolve defined incident classes independently within policy boundaries, it is autonomous.',
  ],
} as const
