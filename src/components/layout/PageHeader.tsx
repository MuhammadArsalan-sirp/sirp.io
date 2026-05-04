import type { ReactNode } from 'react'
import { PurplePill } from '@/components/global/PurplePill'
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
              <PurplePill>{badgeText}</PurplePill>
            </div>
          )}

          <h1 className="page-header-heading">{heading}</h1>
          <div className="page-header-subtext">{subtext}</div>
        </div>
      </div>
    </section>
  )
}

