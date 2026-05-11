import Link from 'next/link'
import Image from 'next/image'
import { ExternalLink } from 'lucide-react'
import { FOOTER_LINKS, SITE_NAME } from '@/lib/constants'

const FOOTER_SOCIAL_X_HREF = 'https://twitter.com/sirp_io'
const FOOTER_SOCIAL_LINKEDIN_HREF = 'https://linkedin.com/company/sirp-io'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-[#3a3a4c] bg-[#0f0f1a]">
      <div className="container-sirp py-16">

        {/* Top grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 mb-16">

          {/* Brand: logo + socials (top row), taglines, compliance badges */}
          <div className="col-span-2 md:col-span-3 lg:col-span-1 max-w-[min(100%,320px)]">
            <div className="flex items-start justify-between gap-4 mb-5">
              <Link href="/" className="inline-block shrink-0">
                <Image
                  src="/images/logos/SIRP-Logo.png"
                  alt={SITE_NAME}
                  width={100}
                  height={32}
                  className="h-8 w-auto object-contain"
                />
              </Link>
              <div className="flex items-center gap-2.5 shrink-0 pt-0.5">
                <a
                  href={FOOTER_SOCIAL_X_HREF}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/50 text-white transition-opacity hover:opacity-90"
                  aria-label="SIRP on X"
                >
                  <Image
                    src="/images/logos/twitter.svg"
                    alt=""
                    width={14}
                    height={13}
                    className="h-[13px] w-[14px] object-contain"
                  />
                </a>
                <a
                  href={FOOTER_SOCIAL_LINKEDIN_HREF}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/50 text-white transition-opacity hover:opacity-90"
                  aria-label="SIRP on LinkedIn"
                >
                  <Image
                    src="/images/logos/linkedin.svg"
                    alt=""
                    width={14}
                    height={15}
                    className="h-[15px] w-[14px] object-contain"
                  />
                </a>
              </div>
            </div>
            <div className="space-y-1 mb-5">
              <p className="font-sans text-sm text-white italic leading-snug">
                Self-driving SOC — governed, AI-native security operations.
              </p>
              <p className="font-sans text-sm text-white italic leading-snug">
                Powered by OmniSense™
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <Image
                src="/images/logos/iso.png"
                alt="ISO 27001"
                width={64}
                height={64}
                className="h-9 w-auto max-w-[64px] object-contain"
              />
              <Image
                src="/images/logos/soc2type2.png"
                alt="SOC 2 Type II"
                width={96}
                height={64}
                className="h-9 w-auto max-w-[96px] object-contain"
              />
            </div>
          </div>

          {/* Link columns */}
          {FOOTER_LINKS.map((col) => (
            <div key={col.heading}>
              <h3 className="font-mono text-[11px] font-medium text-white/40 uppercase tracking-widest mb-4">
                {col.heading}
              </h3>
              <ul className="space-y-3 list-none p-0 m-0">
                {col.links.map((link) => (
                  <li key={link.href}>
                    {'external' in link && link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 font-sans text-sm text-white/55 hover:text-white transition-colors no-underline"
                      >
                        {link.label}
                        <ExternalLink className="w-3 h-3 opacity-50" />
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="font-sans text-sm text-white/55 hover:text-white transition-colors no-underline"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div
          className="h-px w-full mb-6"
          style={{
            background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)',
          }}
        />

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-mono text-xs text-white/40">
            © {year} SIRP. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/privacy"
              className="font-sans text-xs text-white/40 hover:text-white/60 transition-colors no-underline"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="font-sans text-xs text-white/40 hover:text-white/60 transition-colors no-underline"
            >
              Terms of Service
            </Link>
          </div>
        </div>

      </div>
    </footer>
  )
}
