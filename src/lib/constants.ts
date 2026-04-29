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
