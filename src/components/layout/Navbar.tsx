'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Menu, X, ChevronDown } from 'lucide-react'
import { NAV_LINKS } from '@/lib/constants'
import { cn } from '@/lib/utils'
import { Button } from '@/components/shared/Button'

export function Navbar() {
  const [scrolled, setScrolled]     = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeDropdown, setActive] = useState<string | null>(null)
  const pathname   = usePathname()
  const closeTimer = useRef<ReturnType<typeof setTimeout>>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setMobileOpen(false); setActive(null) }, [pathname])

  const handleMouseEnter = (label: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    setActive(label)
  }
  const handleMouseLeave = () => {
    closeTimer.current = setTimeout(() => setActive(null), 120)
  }

  return (
    <header
      className={cn(
        'relative w-full z-40 transition-all duration-300',
        scrolled
          ? 'bg-[#080810]/95 backdrop-blur-md border-b border-[#3a3a4c]'
          : 'bg-transparent',
      )}
    >
      {/* SARA Banner */}
      <div
        className="relative overflow-hidden w-full"
        style={{
          backgroundColor: 'rgb(18, 18, 24)',
          borderBottom: '1px solid rgb(184, 137, 255)',
        }}
      >
        {/* Purple glow blobs */}
        <div
          className="absolute pointer-events-none"
          style={{
            width: '550px',
            height: '251px',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
            background: 'radial-gradient(ellipse at center, #a558d6 0%, #7b3bb9 40%, #311765 100%)',
            borderRadius: '50% 50% 0 0 / 100% 100% 0 0',
            filter: 'blur(80px)',
            opacity: 0.8,
          }}
        />

        {/* Content */}
        <div className="relative z-10 flex items-center justify-center gap-6 py-2">
          <Link
            href="/autonomous-security"
            className="font-sans text-sm text-white no-underline hover:opacity-80 transition-opacity"
          >
            Too good to gatekeep. Sara is now free.
          </Link>
          <Link
            href="https://sara-open.sirp.io/"
            target="_blank"
            rel="noopener noreferrer"
            className="relative flex flex-col items-center gap-0.5 no-underline hover:opacity-80 transition-opacity"
          >
            <span
              className="font-sans text-sm text-white"
              style={{ fontWeight: 600, letterSpacing: '0.02em' }}
            >
              Try her now
            </span>
            <span
              className="w-full h-[2px]"
              style={{ backgroundColor: 'rgb(184, 137, 255)', borderRadius: '30px' }}
            />
          </Link>
        </div>
      </div>

      {/* Main nav */}
      <nav className="container-sirp flex items-center justify-between h-16">

        {/* Logo */}
        <Link href="/" aria-label="SIRP home">
          <Image
            src="/images/logos/SIRP-Logo.png"
            alt="SIRP"
            width={100}
            height={36}
            priority
            className="h-9 w-auto object-contain"
          />
        </Link>

        {/* Desktop links */}
        <ul className="hidden lg:flex items-center gap-1 list-none m-0 p-0">
          {NAV_LINKS.map((item) => {
            const hasChildren = 'children' in item && item.children?.length
            const isActive    = pathname === item.href

            return (
              <li
                key={item.label}
                className="relative"
                onMouseEnter={() => hasChildren && handleMouseEnter(item.label)}
                onMouseLeave={() => hasChildren && handleMouseLeave()}
              >
                {hasChildren ? (
                  <>
                    <button
                      className={cn(
                        'flex items-center gap-1 px-4 py-2 font-sans text-sm rounded-[10px] transition-all duration-200 bg-transparent border-none cursor-pointer',
                        isActive ? 'text-white' : 'text-white hover:text-white',
                      )}
                    >
                      {item.label}
                      <ChevronDown
                        className={cn(
                          'w-3.5 h-3.5 transition-transform duration-200',
                          activeDropdown === item.label && 'rotate-180',
                        )}
                      />
                    </button>

                    {/* Dropdown */}
                    {activeDropdown === item.label && (
                      <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-64 z-50">
                        <div className="bg-[#000000] border border-[#3a3a4c] rounded-2xl p-2 shadow-2xl shadow-black/50">
                          {'children' in item && item.children?.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              className="block px-3 py-2.5 rounded-[10px] hover:bg-[#0f0f1a] transition-colors duration-150 no-underline"
                            >
                              <span className="block font-sans text-sm font-medium text-white">
                                {child.label}
                              </span>
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className={cn(
                      'flex items-center px-4 py-2 font-sans text-sm rounded-[10px] transition-all duration-200 no-underline',
                      isActive ? 'text-white' : 'text-white hover:text-white',
                    )}
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            )
          })}
        </ul>

        {/* CTA */}
        <div className="hidden lg:flex items-center">
          <Button href="/contact" variant="secondary">
            Get a demo
          </Button>
        </div>

        {/* Mobile burger */}
        <button
          className="lg:hidden p-2 text-white/60 hover:text-white transition-colors bg-transparent border-none cursor-pointer"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-[#3a3a4c] bg-[#080810]/98 backdrop-blur-md">
          <div className="container-sirp py-4 space-y-1">
            {NAV_LINKS.map((item) => (
              <div key={item.label}>
                {'children' in item && item.children ? (
                  <>
                    <p className="px-3 py-2 font-mono text-[11px] font-medium text-white/40 uppercase tracking-widest">
                      {item.label}
                    </p>
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-5 py-2.5 font-sans text-sm text-white hover:bg-white/5 rounded-[10px] transition-colors no-underline"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className="block px-3 py-2.5 font-sans text-sm font-medium text-white hover:bg-white/5 rounded-[10px] transition-colors no-underline"
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
            <div className="pt-3 border-t border-[#3a3a4c]">
              <Button href="/contact" variant="secondary" className="w-full justify-center">
                Get a demo
              </Button>
            </div>
          </div>
        </div>
      )}

    </header>
  )
}
