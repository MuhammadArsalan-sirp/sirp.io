import type { ReactNode } from 'react'
import Link from 'next/link'
import './InfoCtaBlock.css'

export type InfoCtaBlockProps = {
  heading: ReactNode
  body: ReactNode
  button?: {
    label: string
    href: string
  }
  /** SOAR vs Autonomous — closing authority strip: left-aligned, looser paragraphs, soft purple floor. */
  variant?: 'default' | 'authority'
}

export function InfoCtaBlock({ heading, body, button, variant = 'default' }: InfoCtaBlockProps) {
  const sectionClass =
    variant === 'authority' ? 'info-cta-block info-cta-block--authority' : 'info-cta-block'

  return (
    <section className={sectionClass}>
      <div className="container-sirp info-cta-inner">
        <h2 className="info-cta-heading">{heading}</h2>

        <div className="info-cta-body">{body}</div>

        {button && (
          <div className="info-cta-button-row">
            <Link className="info-cta-button" href={button.href}>
              {button.label}
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}

