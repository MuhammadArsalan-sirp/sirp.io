import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHeader } from '@/components/layout/PageHeader'
import { SplitInfoCtaImage } from '@/components/global/SplitInfoCtaImage'
import { AutonomousSocComparisonSection } from '@/components/global/AutonomousSocComparisonSection'
import { SoarVsArchitecturalDifferenceSection } from '@/components/global/SoarVsArchitecturalDifferenceSection'
import {
  SOAR_VS_ARCHITECTURAL_DIFFERENCE,
  SOAR_VS_COMPARISON_TABLE,
  SOAR_VS_WHEN_SOAR_SUFFICIENT,
  SOAR_VS_AUTONOMOUS_SOC_HEADER,
  SOAR_VS_AUTONOMOUS_SOC_METADATA,
  SOAR_VS_WHAT_IS_AUTONOMOUS_SOC,
  SOAR_VS_WHAT_IS_SOAR,
} from '@/lib/constants'

export const metadata: Metadata = {
  title: SOAR_VS_AUTONOMOUS_SOC_METADATA.title,
  description: SOAR_VS_AUTONOMOUS_SOC_METADATA.description,
}

export default function Page() {
  const hero = SOAR_VS_AUTONOMOUS_SOC_HEADER
  const p2 = hero.paragraph2
  const whatIsSoar = SOAR_VS_WHAT_IS_SOAR
  const whatIsAutonomousSoc = SOAR_VS_WHAT_IS_AUTONOMOUS_SOC
  const whenSoarSufficient = SOAR_VS_WHEN_SOAR_SUFFICIENT

  return (
    <>
    <PageHeader
      showBottomBorder={false}
      heading={hero.heading.line1}
      headingLine2={hero.heading.line2}
      subtext={
        <>
          <span className="page-header-subtext-block">
            {hero.paragraph1.line1}
            <br />
            {hero.paragraph1.line2}
          </span>
          <span className="page-header-subtext-gap">
            {p2.beforeLink}
            <Link href={p2.link1Href} className="text-white underline underline-offset-4">
              {p2.link1Label}
            </Link>
            {p2.betweenLinks}
            <Link href={p2.link2Href} className="text-white underline underline-offset-4">
              {p2.link2Label}
            </Link>
            {p2.afterLinks}
          </span>
          <span className="page-header-subtext-gap">{hero.paragraph3}</span>
          <span className="page-header-subtext-gap">{hero.paragraph4}</span>
        </>
      }
    />

      <SplitInfoCtaImage
        heading={<span className="traditional-models-heading">{whatIsSoar.heading}</span>}
        body={
          <>
            <p className="info-cta-lead">{whatIsSoar.summary}</p>
            <p>{whatIsSoar.listLead}</p>
            <ul className="soc-point-list">
              {whatIsSoar.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
            <p>{whatIsSoar.closing}</p>
          </>
        }
        image={whatIsSoar.image}
        imageObjectFit="contain"
      />

      <SplitInfoCtaImage
        imageLeft
        heading={
          <span className="traditional-models-heading">{whatIsAutonomousSoc.heading}</span>
        }
        body={
          <>
            <p>{whatIsAutonomousSoc.definition}</p>
            <p>{whatIsAutonomousSoc.listLead}</p>
            <ul className="soc-point-list">
              {whatIsAutonomousSoc.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
            <p className="info-cta-lead">{whatIsAutonomousSoc.closing}</p>
          </>
        }
        image={whatIsAutonomousSoc.image}
        imageObjectFit="contain"
      />

      <SoarVsArchitecturalDifferenceSection data={SOAR_VS_ARCHITECTURAL_DIFFERENCE} />

      <AutonomousSocComparisonSection data={SOAR_VS_COMPARISON_TABLE} />

      <SplitInfoCtaImage
        heading={
          <span className="traditional-models-heading">{whenSoarSufficient.heading}</span>
        }
        body={
          <>
            <p>{whenSoarSufficient.listLead}</p>
            <ul className="split-plain-disc-list">
              {whenSoarSufficient.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
            <p>{whenSoarSufficient.closing}</p>
          </>
        }
        image={whenSoarSufficient.image}
        imageObjectFit="contain"
      />
    </>
  )
}
