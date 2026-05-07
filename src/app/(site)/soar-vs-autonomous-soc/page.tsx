import type { Metadata } from 'next'
import Link from 'next/link'
import { InfoCtaBlock } from '@/components/shared/InfoCtaBlock'
import { PageHeader } from '@/components/layout/PageHeader'
import { SplitInfoCtaImage } from '@/components/shared/SplitInfoCtaImage'
import { AutonomousSocBenefitsSection } from '@/components/shared/AutonomousSocBenefitsSection'
import { AutonomousSocComparisonSection } from '@/components/shared/AutonomousSocComparisonSection'
import {
  SOAR_VS_ARCHITECTURAL_DIFFERENCE,
  SOAR_VS_COMPARISON_TABLE,
  SOAR_VS_WHEN_SOAR_SUFFICIENT,
  SOAR_VS_WHEN_AUTONOMOUS_SOC_NEEDED,
  SOAR_VS_NEXT_GEN_SOAR,
  SOAR_VS_MIGRATION_CONSIDERATIONS,
  SOAR_VS_ARCHITECTURE_AUTHORITY,
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
  const p1 = hero.paragraph1
  const p2 = hero.paragraph2
  const p3 = hero.paragraph3
  const whatIsSoar = SOAR_VS_WHAT_IS_SOAR
  const whatIsAutonomousSoc = SOAR_VS_WHAT_IS_AUTONOMOUS_SOC
  const whenSoarSufficient = SOAR_VS_WHEN_SOAR_SUFFICIENT
  const whenAutonomousSocNeeded = SOAR_VS_WHEN_AUTONOMOUS_SOC_NEEDED
  const nextGenSoar = SOAR_VS_NEXT_GEN_SOAR
  const migration = SOAR_VS_MIGRATION_CONSIDERATIONS
  const architectureAuthority = SOAR_VS_ARCHITECTURE_AUTHORITY

  return (
    <>
    <PageHeader
      showBottomBorder={false}
      heroLayout="soar"
      heading={hero.heading.line1}
      headingLine2={hero.heading.line2}
      subtext={
        <>
          <span className="page-header-subtext-block">
            {p1.lines[0]}
            <br />
            {p1.lines[1]}
            <br />
            {p1.lines[2]}
          </span>
          <span className="page-header-subtext-gap">
            {p2.line1}
            <br />
            <Link href={p2.link1Href} className="text-white underline underline-offset-4">
              {p2.link1Label}
            </Link>
            {p2.betweenLinks}
            <Link href={p2.link2Href} className="text-white underline underline-offset-4">
              {p2.link2Label}
            </Link>
          </span>
          <span className="page-header-subtext-gap">
            {p3.line1}
            <br />
            {p3.line2}
          </span>
          <span className="page-header-subtext-gap">{hero.paragraph4}</span>
        </>
      }
    />

      <SplitInfoCtaImage
        animateOnScroll
        bodyFontSize="18"
        heading={<span className="traditional-models-heading">{whatIsSoar.heading}</span>}
        body={
          <>
            <p className="info-cta-lead">{whatIsSoar.summary}</p>
            <p className="info-cta-lead">{whatIsSoar.listLead}</p>
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
        animateOnScroll
        bodyFontSize="18"
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

      <AutonomousSocComparisonSection
        data={SOAR_VS_ARCHITECTURAL_DIFFERENCE}
        variant="soarComparison"
      />

      <AutonomousSocComparisonSection data={SOAR_VS_COMPARISON_TABLE} variant="soarComparison" />

      <SplitInfoCtaImage
        animateOnScroll
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

      <SplitInfoCtaImage
        animateOnScroll
        imageLeft
        heading={
          <span className="traditional-models-heading">{whenAutonomousSocNeeded.heading}</span>
        }
        body={
          <>
            <p>{whenAutonomousSocNeeded.listLead}</p>
            <ul className="split-plain-disc-list">
              {whenAutonomousSocNeeded.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
            <p>{whenAutonomousSocNeeded.closing}</p>
          </>
        }
        image={whenAutonomousSocNeeded.image}
        imageObjectFit="contain"
      />

      <SplitInfoCtaImage
        animateOnScroll
        heading={<span className="traditional-models-heading">{nextGenSoar.heading}</span>}
        body={
          <div className="split-info-body-relaxed-paragraphs">
            <p className="info-cta-lead">{nextGenSoar.answer}</p>
            {nextGenSoar.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        }
        image={nextGenSoar.image}
        imageObjectFit="contain"
      />

      <AutonomousSocBenefitsSection
        heading={migration.heading}
        intro={
          <>
            <p>
              {migration.intro.line1Before}
              <Link href={migration.intro.linkHref}>{migration.intro.linkLabel}</Link>
              {migration.intro.line1After}
            </p>
            <p>{migration.intro.line2}</p>
          </>
        }
        cards={migration.cards}
        footerLines={migration.footerLines}
        variant="soarMigration"
      />

      <InfoCtaBlock
        variant="authority"
        heading={
          <span className="traditional-models-heading">{architectureAuthority.heading}</span>
        }
        body={
          <>
            {architectureAuthority.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </>
        }
      />
    </>
  )
}
