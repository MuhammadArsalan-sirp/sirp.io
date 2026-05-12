/* ─── Homepage Stats (legacy) ────────────────────────────── */
export const HOMEPAGE_STATS = [
  { value: '95%', label: 'Reduction in MTTR' },
  { value: '10x', label: 'Analyst efficiency' },
  { value: '<2min', label: 'Mean time to detect' },
  { value: '99.9%', label: 'Platform uptime' },
] as const

/* ─── Hero Section ───────────────────────────────────────── */
export const HERO_DATA = {
  pill: 'Autonomous SOC Platform',
  heading: 'Imagine, a self-driving SOC',
  subheading: 'SIRP OmniSense™, is the first Autonomous SOC that\'s actually autonomous. An AI agentic mesh that detects, learns, responds and evolves. Just like your best analyst, only at machine speed.',
  primaryBtn: { label: 'Learn more', href: '/autonomous-security' },
  secondaryBtn: { label: 'How it works', href: '/how-autonomous-soc-works' },
  videoSrc: 'https://framerusercontent.com/assets/Y7AXz4zHC2BiXgrFSoKP52cRE.webm',
} as const

/* ─── Stats Section ──────────────────────────────────────── */
export const STATS_DATA = {
  pill: 'Results you can see',
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
  pill: 'AI-Driven Autonomous SOC Features',
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
