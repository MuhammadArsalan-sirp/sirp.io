import type { ReactNode } from 'react'
import './PageHeader.css'

export type PageHeaderProps = {
  badgeText?: string
  heading: ReactNode
  /** Optional second title line (e.g. Framer h2 at 60px) — renders as h2 below the main h1 */
  headingLine2?: ReactNode
  subtext: ReactNode
  /** Default true. Set false to remove the bottom border for a flush join with the next section. */
  showBottomBorder?: boolean
}

export function PageHeader({
  badgeText,
  heading,
  headingLine2,
  subtext,
  showBottomBorder = true,
}: PageHeaderProps) {
  const sectionClassName = showBottomBorder ? 'page-header' : 'page-header page-header--flush'

  return (
    <section className={sectionClassName}>
      <div className="container-sirp page-header-inner">
        <div className="page-header-stack">
          {badgeText && (
            <div className="page-header-badge">
              <span className="pill">
                <span aria-hidden="true">✦</span>
                {badgeText}
              </span>
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

