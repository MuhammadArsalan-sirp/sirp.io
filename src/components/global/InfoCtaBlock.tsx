import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/global/Button'
import './InfoCtaBlock.css'

export type InfoCtaBlockCta = {
  label: string
  href: string
}

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

        {hasButtons && (
          <div className="info-cta-button-row">
            {button && <Button href={button.href}>{button.label}</Button>}
            {secondaryButton && (
              <Button href={secondaryButton.href} variant="secondary">
                {secondaryButton.label}
              </Button>
            )}
          </div>
        )}
      </div>
    </section>
  )
}

