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
      { label: 'Blog', href: '/blog', description: 'Insights & news' },
      { label: 'Manifesto', href: '/manifesto', description: 'Our vision' },
      { label: 'Whitepaper', href: '/technical-white-paper', description: 'Deep dive' },
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
    heading: 'Autonomous Security',
    links: [
      { label: 'Pillar', href: '/autonomous-security' },
      { label: 'What is an Autonomous SOC', href: '/what-is-autonomous-soc' },
      { label: 'How it works', href: '/how-autonomous-soc-works' },
      { label: 'SOAR vs Autonomous', href: '/soar-vs-autonomous-soc' },
      { label: 'SOAR Alternatives', href: '/soar-alternatives' },
    ],
  },
  {
    heading: 'Platform',
    links: [
      { label: 'OmniSense™', href: '/omnisense' },
      { label: 'Enterprise Autonomous SOC', href: '/enterprise-soc' },
      { label: 'Outcomes & Metrics', href: '/security-outcomes-and-metrics' },
      { label: 'Whitepaper', href: '/technical-white-paper' },
    ],
  },
  {
    heading: 'Resources',
    links: [
      { label: 'Blog', href: '/blog' },
      { label: 'Technical Whitepaper', href: '/technical-white-paper' },
      { label: 'Manifesto', href: '/manifesto' },
    ],
  },
  {
    heading: 'Company',
    links: [{ label: 'Contact', href: '/contact' }],
  },
] as const
