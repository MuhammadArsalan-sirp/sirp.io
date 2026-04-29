import { PageHeader } from '@/components/layout/PageHeader'
import { SplitInfoCtaImage } from '@/components/global/SplitInfoCtaImage'
import { HowAutonomousSocWorksSection } from '@/components/global/HowAutonomousSocWorksSection'
import {
  WHAT_IS_AUTONOMOUS_SOC_HEADER,
  WHAT_IS_AUTONOMOUS_SOC_HOW_IT_WORKS,
  WHAT_IS_AUTONOMOUS_SOC_TRADITIONAL_MODELS,
} from '@/lib/constants'

export default function Page() {
  const { badgeText, heading, subtext } = WHAT_IS_AUTONOMOUS_SOC_HEADER
  const traditionalModels = WHAT_IS_AUTONOMOUS_SOC_TRADITIONAL_MODELS
  const howItWorks = WHAT_IS_AUTONOMOUS_SOC_HOW_IT_WORKS

  return (
    <>
      <PageHeader
        badgeText={badgeText}
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
        heading={traditionalModels.heading}
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
    </>
  )
}
