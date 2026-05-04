import type { ReactNode } from 'react'
import './PageHeader.css'

export type PageHeaderProps = {
  badgeText?: string
  heading: ReactNode
  /** Optional second title line (e.g. Framer h2 at 60px) — renders as h2 below the main h1 */
  headingLine2?: ReactNode
  subtext: ReactNode
}

export function PageHeader({ badgeText, heading, headingLine2, subtext }: PageHeaderProps) {
  return (
    <section className="page-header">
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

