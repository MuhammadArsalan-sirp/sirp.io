import { EnterpriseSocHero } from '@/sections/enterprise-soc/EnterpriseSocHero'
import { EnterpriseSocReality } from '@/sections/enterprise-soc/EnterpriseSocReality'
import { EnterpriseSocShift } from '@/sections/enterprise-soc/EnterpriseSocShift'
import { EnterpriseSocDashboard } from '@/sections/enterprise-soc/EnterpriseSocDashboard'
import { EnterpriseSocAiNative } from '@/sections/enterprise-soc/EnterpriseSocAiNative'
import { EnterpriseSocThreat } from '@/sections/enterprise-soc/EnterpriseSocThreat'

export const metadata = {
  title: 'Enterprise SOC | SIRP',
  description:
    'SIRP transforms enterprise security operations from human-driven workflows into an AI-native, self-orchestrating system.',
}

export default function EnterpriseSocPage() {
  return (
    <>
      <EnterpriseSocHero />
      <EnterpriseSocReality />
      <EnterpriseSocShift />
      <EnterpriseSocDashboard />
      <EnterpriseSocAiNative />
      <EnterpriseSocThreat />
    </>
  )
}
