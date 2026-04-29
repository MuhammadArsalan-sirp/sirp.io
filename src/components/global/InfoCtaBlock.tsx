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
}

export function InfoCtaBlock({ heading, body, button }: InfoCtaBlockProps) {
  return (
    <section className="info-cta-block">
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

