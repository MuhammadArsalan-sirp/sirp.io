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
  button?: InfoCtaBlockCta
  secondaryButton?: InfoCtaBlockCta
  /** Merged onto the root `<section>` (e.g. page-specific background). */
  sectionClassName?: string
}

export function InfoCtaBlock({ heading, body, button, secondaryButton, sectionClassName }: InfoCtaBlockProps) {
  const hasButtons = Boolean(button || secondaryButton)

  return (
    <section className={cn('info-cta-block', sectionClassName)}>
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

