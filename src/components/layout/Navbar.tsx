'use client'

import { useState, useEffect, useLayoutEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Menu, X, ChevronDown, ArrowRight } from 'lucide-react'
import { NAV_LINKS } from '@/lib/constants'
import { cn } from '@/lib/utils'
import { Button } from '@/components/shared/Button'

export function Navbar() {
  const [scrolled, setScrolled]     = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileExpanded, setMobileExpanded] = useState<string[]>([])
  const [collapsedPanelHeight, setCollapsedPanelHeight] = useState<number | null>(null)
  const [activeDropdown, setActive] = useState<string | null>(null)
  const pathname   = usePathname()
  const closeTimer = useRef<ReturnType<typeof setTimeout>>(null)
  const mobilePanelRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setMobileOpen(false); setActive(null) }, [pathname])

  useEffect(() => {
    if (!mobileOpen) {
      setMobileExpanded([])
      setCollapsedPanelHeight(null)
    }
  }, [mobileOpen])

  const hasMobileSubmenuOpen = mobileExpanded.length > 0

  useLayoutEffect(() => {
    if (!mobileOpen || hasMobileSubmenuOpen || !mobilePanelRef.current) return
    setCollapsedPanelHeight(mobilePanelRef.current.getBoundingClientRect().height)
  }, [mobileOpen, hasMobileSubmenuOpen])

  const toggleMobileSection = (label: string) => {
    setMobileExpanded((prev) => {
      if (prev.includes(label)) return []
      if (mobilePanelRef.current) {
        setCollapsedPanelHeight(mobilePanelRef.current.getBoundingClientRect().height)
      }
      return [label]
    })
  }

  const closeMobileSubmenu = () => setMobileExpanded([])

  const stopMobilePanelClose = (e: { stopPropagation: () => void }) => e.stopPropagation()

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

        {/* Content — mobile: space-between row | desktop: centered */}
        <div className="relative z-10 flex items-center justify-between lg:justify-center lg:gap-x-4 py-2 px-4">
          <Link
            href="/autonomous-security"
            className="font-sans text-sm text-white no-underline hover:opacity-80 transition-opacity"
          >
            Too good to gatekeep. Sara is now free.
          </Link>

          {/* Mobile: arrow button */}
          <Link
            href="https://sara-open.sirp.io/"
            target="_blank"
            rel="noopener noreferrer"
            className="lg:hidden flex items-center justify-center w-7 h-7 rounded-full text-white hover:opacity-80 transition-opacity no-underline flex-shrink-0"
            style={{ backgroundColor: 'rgb(184, 137, 255)' }}
            aria-label="Try Sara now"
          >
            <ArrowRight size={14} />
          </Link>

          {/* Desktop: Try her now with underline */}
          <Link
            href="https://sara-open.sirp.io/"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:relative lg:flex flex-col items-center gap-0.5 no-underline hover:opacity-80 transition-opacity"
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

      {/* Main nav + mobile menu (menu sits flush below logo row, same horizontal inset as nav) */}
      <div className="relative">
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
          className="lg:hidden flex items-center justify-center w-10 h-10 rounded-[50px] bg-[#8e2dff] text-white transition-colors hover:bg-[#a040ff] border-none cursor-pointer"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
        >
          {mobileOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      {/* Mobile menu — blur only behind the panel */}
      {mobileOpen && (
        <>
          <button
            type="button"
            className="fixed inset-0 z-30 cursor-default border-none bg-transparent lg:hidden"
            aria-label="Close menu"
            onClick={() => setMobileOpen(false)}
          />
          <div className="absolute left-0 right-0 top-full z-[31] lg:hidden">
            <div
              className="container-sirp"
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation"
              onClick={(e) => e.stopPropagation()}
            >
              <div
                className={cn(
                  'relative mx-auto w-full max-w-[353px] shadow-2xl shadow-black/40',
                  hasMobileSubmenuOpen ? 'overflow-visible' : 'overflow-hidden',
                )}
              >
                <div
                  ref={mobilePanelRef}
                  className="relative"
                  style={
                    hasMobileSubmenuOpen && collapsedPanelHeight
                      ? { minHeight: collapsedPanelHeight }
                      : undefined
                  }
                >
                  <div
                    className="pointer-events-none absolute inset-0 bg-[#14141a]/35 backdrop-blur-lg backdrop-saturate-150"
                    aria-hidden
                  />
                  <div
                    className={cn(
                      'relative z-[1] min-h-full bg-[#14141a] px-0 py-3',
                      hasMobileSubmenuOpen && 'overflow-visible',
                    )}
                    onClick={() => {
                      if (hasMobileSubmenuOpen) closeMobileSubmenu()
                    }}
                  >
                    <ul className="m-0 flex list-none flex-col items-center gap-0 p-0">
                      {NAV_LINKS.map((item) => {
                        const hasChildren = 'children' in item && item.children?.length
                        const isExpanded = mobileExpanded.includes(item.label)

                        return (
                          <li
                            key={item.label}
                            className={cn('w-full', hasChildren && isExpanded && 'relative z-20')}
                          >
                            {hasChildren ? (
                              <button
                                type="button"
                                className="w-full border-none bg-transparent px-4 py-2 text-center font-sans text-base font-medium text-white cursor-pointer transition-opacity hover:opacity-80"
                                onClick={(e) => {
                                  stopMobilePanelClose(e)
                                  toggleMobileSection(item.label)
                                }}
                                aria-expanded={isExpanded}
                              >
                                {item.label}
                              </button>
                            ) : (
                              <Link
                                href={item.href}
                                className="block px-4 py-2 text-center font-sans text-base font-medium text-white no-underline transition-opacity hover:opacity-80"
                                onClick={(e) => {
                                  stopMobilePanelClose(e)
                                  setMobileOpen(false)
                                }}
                              >
                                {item.label}
                              </Link>
                            )}
                            {hasChildren && isExpanded && item.children && (
                              <div
                                className="absolute left-1/2 top-full z-30 w-fit max-w-[calc(100vw-2rem)] -translate-x-1/2 -mt-2 rounded-[20px] bg-[#060606] px-5 py-6 shadow-lg shadow-black/30"
                                onClick={stopMobilePanelClose}
                              >
                                <ul className="m-0 flex list-none flex-col gap-0 p-0 text-left">
                                  {item.children.map((child) => (
                                    <li key={child.href}>
                                      <Link
                                        href={child.href}
                                        className="block whitespace-nowrap px-2 py-2.5 font-sans text-[15px] font-normal leading-[1.35] text-white no-underline transition-opacity hover:opacity-80"
                                        onClick={() => setMobileOpen(false)}
                                      >
                                        {child.label}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}
                          </li>
                        )
                      })}
                      <li className="flex w-full justify-center pt-1.5 pb-0" onClick={stopMobilePanelClose}>
                        <Button
                          href="/contact"
                          variant="secondary"
                          className="sirp-button--mobile-demo"
                        >
                          Get a demo
                        </Button>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      </div>

    </header>
  )
}
