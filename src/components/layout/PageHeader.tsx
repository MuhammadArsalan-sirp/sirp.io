import type { ReactNode } from 'react'
import { PurplePill } from '@/components/global/PurplePill'
import './PageHeader.css'

export type PageHeaderProps = {
  badgeText?: string
  heading: ReactNode
  /** Optional second title line (e.g. Framer h2 at 60px) — renders as h2 below the main h1 */
  headingLine2?: ReactNode
  subtext: ReactNode
  /** Default true. Set false to remove the bottom border for a flush join with the next section. */
  showBottomBorder?: boolean
  /**
   * `/soar-vs-autonomous-soc`: match site `container-sirp` horizontal padding and widen intro
   * so the hero subtext breaks on the intended lines.
   */
  heroLayout?: 'default' | 'soar'
}

export function PageHeader({
  badgeText,
  heading,
  headingLine2,
  subtext,
  showBottomBorder = true,
  heroLayout = 'default',
}: PageHeaderProps) {
  const sectionClassName = [
    showBottomBorder ? 'page-header' : 'page-header page-header--flush',
    heroLayout === 'soar' ? 'page-header--soar-hero' : '',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <section className={sectionClassName}>
      <div className="container-sirp page-header-inner">
        <div className="page-header-stack">
          {badgeText && (
            <div className="page-header-badge">
              <PurplePill>{badgeText}</PurplePill>
            </div>
          )}

          <h1 className="page-header-heading">{heading}</h1>
          {headingLine2 != null ? <h2 className="page-header-heading-line2">{headingLine2}</h2> : null}
          <p className="page-header-subtext">{subtext}</p>
        </div>
      </div>
    </section>
  )
}

