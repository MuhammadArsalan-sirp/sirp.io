import type { ReactNode } from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import { Button } from '@/components/global/Button'
import './InfoCtaBlock.css'
import './SplitInfoCtaImage.css'

export type SplitInfoCtaImageProps = {
  heading: ReactNode
  body: ReactNode
  topShade?: boolean
  /** When `left`, image column renders first (desktop: image left, copy right). */
  imagePosition?: 'left' | 'right'
  /** Extra classes on the root `<section>` (e.g. page-specific layout hooks). */
  sectionClassName?: string
  button?: {
    label: string
    href: string
  }
  image?: {
    src: string
    alt: string
  }
}

export function SplitInfoCtaImage({
  heading,
  body,
  topShade = false,
  imagePosition = 'right',
  sectionClassName,
  button,
  image = { src: '/images/omnisense_architecture.png', alt: 'OmniSense architecture' },
}: SplitInfoCtaImageProps) {
  const rootClassName = cn(
    'split-info-cta-image',
    topShade && 'split-info-cta-image--top-shade',
    sectionClassName,
  )

  const textColumn = (
    <div className="split-left">
      <h2 className="info-cta-heading">{heading}</h2>
      <div className="info-cta-body split-left-body">{body}</div>

      {button && (
        <div className="info-cta-button-row">
          <Button href={button.href}>{button.label}</Button>
        </div>
      )}
    </div>
  )

  const imageColumn = (
    <div className="split-right" aria-hidden="true">
      <div className="split-image-wrap">
        <Image src={image.src} alt={image.alt} fill className="split-image" unoptimized />
      </div>
    </div>
  )

  return (
    <section className={rootClassName}>
      <div className="container-sirp split-info-cta-inner">
        {imagePosition === 'left' ? (
          <>
            {imageColumn}
            {textColumn}
          </>
        ) : (
          <>
            {textColumn}
            {imageColumn}
          </>
        )}
      </div>
    </section>
  )
}

