'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Menu, X, ChevronDown } from 'lucide-react'
import { NAV_LINKS } from '@/lib/constants'
import './Navbar.css'

export function Navbar() {
  const [scrolled, setScrolled]     = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeDropdown, setActive] = useState<string | null>(null)
  const pathname = usePathname()
  const closeTimer = useRef<ReturnType<typeof setTimeout>>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    setActive(null)
  }, [pathname])

  const handleMouseEnter = (label: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    setActive(label)
  }

  const handleMouseLeave = () => {
    closeTimer.current = setTimeout(() => setActive(null), 120)
  }

  return (
    <header className={`navbar-header ${scrolled ? 'scrolled' : 'transparent'}`}>

      {/* SARA Banner */}
      <div className="navbar-banner">
        Too good to gatekeep. Sara is now free.
        <Link href="https://sara-open.sirp.io/" target="_blank" rel="noopener noreferrer">
          Try her now
        </Link>
      </div>

      {/* Main nav */}
      <nav className="container-sirp navbar-inner">

        {/* Logo */}
        <Link href="/" className="navbar-logo" aria-label="SIRP home">
          <Image
            src="/images/logos/sirp-logo.png"
            alt="SIRP"
            width={100}
            height={36}
            priority
          />
        </Link>

        {/* Desktop links */}
        <ul className="navbar-links">
          {NAV_LINKS.map((item) => {
            const hasChildren = 'children' in item && item.children?.length
            const isActive = pathname === item.href

            return (
              <li
                key={item.label}
                style={{ position: 'relative' }}
                onMouseEnter={() => hasChildren && handleMouseEnter(item.label)}
                onMouseLeave={() => hasChildren && handleMouseLeave()}
              >
                {hasChildren ? (
                  <>
                    <button className={`navbar-link ${isActive ? 'active' : ''}`}>
                      {item.label}
                      <ChevronDown
                        className={`navbar-chevron ${activeDropdown === item.label ? 'open' : ''}`}
                      />
                    </button>

                    {activeDropdown === item.label && (
                      <div className="navbar-dropdown-wrapper">
                        <div className="navbar-dropdown">
                          {'children' in item && item.children?.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              className="navbar-dropdown-item"
                            >
                              <span className="navbar-dropdown-item-title">{child.label}</span>
                              {'description' in child && (
                                <span className="navbar-dropdown-item-desc">{child.description}</span>
                              )}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className={`navbar-link ${isActive ? 'active' : ''}`}
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            )
          })}
        </ul>

        {/* CTA */}
        <div className="navbar-cta-wrapper">
          <Link href="/contact" className="navbar-cta">
            Get a demo
          </Link>
        </div>

        {/* Mobile burger */}
        <button
          className="navbar-burger"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="navbar-mobile">
          <div className="container-sirp">
            {NAV_LINKS.map((item) => (
              <div key={item.label}>
                {'children' in item && item.children ? (
                  <>
                    <p className="navbar-mobile-section-label">{item.label}</p>
                    {item.children.map((child) => (
                      <Link key={child.href} href={child.href} className="navbar-mobile-link">
                        {child.label}
                      </Link>
                    ))}
                  </>
                ) : (
                  <Link href={item.href} className="navbar-mobile-link">
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
            <div className="navbar-mobile-divider" />
            <Link href="/contact" className="navbar-mobile-cta">
              Get a demo
            </Link>
          </div>
        </div>
      )}

    </header>
  )
}
