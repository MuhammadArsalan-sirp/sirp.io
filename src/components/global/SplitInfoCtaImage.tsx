import type { ReactNode } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import './SplitInfoCtaImage.css'

export type SplitInfoCtaImageProps = {
  heading: ReactNode
  body: ReactNode
  topShade?: boolean
  button?: {
    label: string
    href: string
  }
  image?: {
    src: string
    alt: string
  }
  /** Use `contain` for diagrams so nothing is cropped (default `cover`). */
  imageObjectFit?: 'cover' | 'contain'
}

export function SplitInfoCtaImage({
  heading,
  body,
  topShade = false,
  button,
  image = { src: '/images/omnisense_architecture.png', alt: 'OmniSense architecture' },
  imageObjectFit = 'cover',
}: SplitInfoCtaImageProps) {
  const sectionClassName = topShade
    ? 'split-info-cta-image split-info-cta-image--top-shade'
    : 'split-info-cta-image'

  return (
    <section className={sectionClassName}>
      <div className="container-sirp split-info-cta-inner">
        <div className="split-left">
          <h2 className="info-cta-heading">{heading}</h2>
          <div className="info-cta-body split-left-body">{body}</div>

          {button && (
            <div className="info-cta-button-row">
              <Link className="info-cta-button" href={button.href}>
                {button.label}
              </Link>
            </div>
          )}
        </div>

        <div className="split-right" aria-hidden="true">
          <div className="split-image-wrap">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className={
                imageObjectFit === 'contain' ? 'split-image split-image--contain' : 'split-image'
              }
              unoptimized
            />
          </div>
        </div>
      </div>
    </section>
  )
}

