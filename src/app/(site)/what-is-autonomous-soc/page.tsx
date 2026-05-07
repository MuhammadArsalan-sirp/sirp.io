import { PageHeader } from '@/components/layout/PageHeader'
import { SplitInfoCtaImage } from '@/components/shared/SplitInfoCtaImage'
import { HowAutonomousSocWorksSection } from '@/components/shared/HowAutonomousSocWorksSection'
import { AutonomousSocBenefitsSection } from '@/components/shared/AutonomousSocBenefitsSection'
import { RightBalanceSection } from '@/components/shared/RightBalanceSection'
import { AutonomousSocSafetySection } from '@/components/shared/AutonomousSocSafetySection'
import { AutonomousSocComparisonSection } from '@/components/shared/AutonomousSocComparisonSection'
import { CtaSection } from '@/sections/home/CtaSection'
import './page.css'
import {
  CTA_DATA,
  WHAT_IS_AUTONOMOUS_SOC_BENEFITS,
  WHAT_IS_AUTONOMOUS_SOC_COMPARISON,
  WHAT_IS_AUTONOMOUS_SOC_HEADER,
  WHAT_IS_AUTONOMOUS_SOC_HOW_IT_WORKS,
  WHAT_IS_AUTONOMOUS_SOC_RIGHT_BALANCE,
  WHAT_IS_AUTONOMOUS_SOC_SAFETY,
  WHAT_IS_AUTONOMOUS_SOC_TRADITIONAL_MODELS,
} from '@/lib/constants'

export default function Page() {
  const { heading, subtext } = WHAT_IS_AUTONOMOUS_SOC_HEADER
  const traditionalModels = WHAT_IS_AUTONOMOUS_SOC_TRADITIONAL_MODELS
  const howItWorks = WHAT_IS_AUTONOMOUS_SOC_HOW_IT_WORKS
  const benefits = WHAT_IS_AUTONOMOUS_SOC_BENEFITS
  const rightBalance = WHAT_IS_AUTONOMOUS_SOC_RIGHT_BALANCE
  const safety = WHAT_IS_AUTONOMOUS_SOC_SAFETY
  const comparison = WHAT_IS_AUTONOMOUS_SOC_COMPARISON

  return (
    <>
      <PageHeader
        heading={
          <>
            {heading.prefix}
            <br />
            <em>{heading.emphasized}</em>
            {heading.suffix}
          </>
        }
        subtext={
          <>
            <span className="page-header-subtext-block">{subtext.paragraph1}</span>
            <span className="page-header-subtext-gap">{subtext.paragraph2}</span>
            <span className="page-header-subtext-gap">{subtext.paragraph3}</span>
          </>
        }
      />

      <SplitInfoCtaImage
        topShade
        animateOnScroll
        heading={
          <span className="traditional-models-heading">
            {traditionalModels.heading.line1}
            <br />
            {traditionalModels.heading.line2}
          </span>
        }
        body={
          <>
            <p>{traditionalModels.intro}</p>
            <p className="info-cta-lead">{traditionalModels.lead}</p>
            <ul className="soc-point-list">
              {traditionalModels.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
            <p>{traditionalModels.outro}</p>
          </>
        }
        image={traditionalModels.image}
      />

      <HowAutonomousSocWorksSection
        heading={howItWorks.heading}
        intro={howItWorks.intro}
        lead={howItWorks.lead}
        steps={howItWorks.steps}
        notes={howItWorks.notes}
      />

      <AutonomousSocBenefitsSection
        badgeText={benefits.badgeText}
        heading={benefits.heading}
        intro={benefits.intro}
        cards={benefits.cards}
      />

      <RightBalanceSection data={rightBalance} />
      <AutonomousSocSafetySection data={safety} />
      <AutonomousSocComparisonSection data={comparison} />
      <div className="what-is-autonomous-soc-cta-wrap">
        <CtaSection data={CTA_DATA} />
      </div>
    </>
  )
}
