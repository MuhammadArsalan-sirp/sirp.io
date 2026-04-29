import Link from 'next/link'
import Image from 'next/image'
import { ExternalLink } from 'lucide-react'
import { FOOTER_LINKS, SITE_NAME } from '@/lib/constants'
import './Footer.css'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container-sirp footer-inner">

        {/* Top grid */}
        <div className="footer-grid">

          {/* Brand */}
          <div className="footer-brand">
            <Link href="/" className="footer-logo" aria-label={SITE_NAME}>
              <Image
                src="/images/logos/sirp-logo.png"
                alt="SIRP"
                width={100}
                height={32}
              />
            </Link>
            <p className="footer-tagline">
              The first Autonomous SOC platform. Detect, learn, respond —
              without human intervention.
            </p>
          </div>

          {/* Link columns */}
          {FOOTER_LINKS.map((col) => (
            <div key={col.heading}>
              <h3 className="footer-col-heading">{col.heading}</h3>
              <ul className="footer-links">
                {col.links.map((link) => (
                  <li key={link.href}>
                    {'external' in link && link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="footer-link"
                      >
                        {link.label}
                        <ExternalLink className="footer-link-icon" />
                      </a>
                    ) : (
                      <Link href={link.href} className="footer-link">
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>

        {/* Bottom row */}
        <div className="footer-bottom">
          <p className="footer-copyright">
            © {year} SIRP. All rights reserved.
          </p>
          <div className="footer-bottom-links">
            <Link href="/privacy" className="footer-bottom-link">
              Privacy Policy
            </Link>
            <Link href="/terms" className="footer-bottom-link">
              Terms of Service
            </Link>
            <span className="footer-built-with">
              Built with OmniSense™
            </span>
          </div>
        </div>

      </div>
    </footer>
  )
}
