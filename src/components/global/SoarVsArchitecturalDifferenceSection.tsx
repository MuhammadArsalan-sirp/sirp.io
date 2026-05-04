import Link from 'next/link'
import './AutonomousSocComparisonSection.css'
import './SoarVsArchitecturalDifferenceSection.css'

export type SoarVsArchitecturalDifferenceCard = {
  title: string
  points: readonly string[]
}

export type SoarVsArchitecturalDifferenceData = {
  heading: string
  introLines: readonly string[]
  cards: readonly SoarVsArchitecturalDifferenceCard[]
  footer: {
    beforeLink: string
    linkLabel: string
    linkHref: string
    afterLink: string
    taglines: readonly string[]
  }
}

type SoarVsArchitecturalDifferenceSectionProps = {
  data: SoarVsArchitecturalDifferenceData
}

export function SoarVsArchitecturalDifferenceSection({
  data,
}: SoarVsArchitecturalDifferenceSectionProps) {
  const { heading, introLines, cards, footer } = data

  return (
    <section className="architectural-diff-section architectural-diff-section--top-shade">
      <div className="container-sirp">
        <h2 className="architectural-diff-heading">{heading}</h2>

        <div className="architectural-diff-intro">
          {introLines.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>

        <div className="architectural-diff-grid">
          {cards.map((card) => (
            <article
              key={card.title}
              className="comparison-card architectural-diff-card"
            >
              <h3 className="text-center font-['Inter',sans-serif] text-[24px] leading-[1.2] font-semibold tracking-[0] text-white">
                {card.title}
              </h3>
              <ul className="mt-10 space-y-5 text-center font-['Inter',sans-serif] text-[16px] leading-[1.5] font-medium text-white">
                {card.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="architectural-diff-footer">
          <p>
            {footer.beforeLink}
            <Link href={footer.linkHref} className="architectural-diff-link">
              {footer.linkLabel}
            </Link>
            {footer.afterLink}
          </p>
          {footer.taglines.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>
      </div>
    </section>
  )
}
