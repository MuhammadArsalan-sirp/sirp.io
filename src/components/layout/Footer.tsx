import Link from 'next/link'
import Image from 'next/image'
import { ExternalLink } from 'lucide-react'
import { FOOTER_LINKS, SITE_NAME } from '@/lib/constants'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-[#3a3a4c] bg-[#121218]">
      <div className="container-sirp py-16">

        {/* Top grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 mb-16">

          {/* Brand */}
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/images/logos/sirp-logo.png"
                alt={SITE_NAME}
                width={100}
                height={32}
                className="h-8 w-auto object-contain"
              />
            </Link>
            <p className="text-sm text-white/55 leading-relaxed max-w-[220px] font-['Inter',sans-serif]">
              The first Autonomous SOC platform. Detect, learn, respond — without human intervention.
            </p>
          </div>

          {/* Link columns */}
          {FOOTER_LINKS.map((col) => (
            <div key={col.heading}>
              <h3 className="text-[11px] font-mono font-medium text-white/40 uppercase tracking-widest mb-4">
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
                        className="flex items-center gap-1.5 text-sm text-white/55 hover:text-white transition-colors no-underline font-['Inter',sans-serif]"
                      >
                        {link.label}
                        <ExternalLink className="w-3 h-3 opacity-50" />
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-sm text-white/55 hover:text-white transition-colors no-underline font-['Inter',sans-serif]"
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
          <p className="text-xs text-white/40 font-mono">
            © {year} SIRP. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/privacy"
              className="text-xs text-white/40 hover:text-white/60 transition-colors no-underline font-['Inter',sans-serif]"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-xs text-white/40 hover:text-white/60 transition-colors no-underline font-['Inter',sans-serif]"
            >
              Terms of Service
            </Link>
            <span className="text-xs text-white/40 font-mono">
              Built with OmniSense™
            </span>
          </div>
        </div>

      </div>
    </footer>
  )
}
