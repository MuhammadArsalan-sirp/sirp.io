import type { ReactNode } from 'react'
import './PageHeader.css'

export type PageHeaderProps = {
  badgeText?: string
  heading: ReactNode
  subtext: ReactNode
}

export function PageHeader({ badgeText, heading, subtext }: PageHeaderProps) {
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
          <p className="page-header-subtext">{subtext}</p>
        </div>
      </div>
    </section>
  )
}

