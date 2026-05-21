import type { HTMLAttributeAnchorTarget, ReactNode } from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import './Button.css'

export type ButtonVariant = 'primary' | 'secondary'

export type ButtonProps = {
  href: string
  children: ReactNode
  variant?: ButtonVariant
  className?: string
  target?: HTMLAttributeAnchorTarget
  rel?: string
}

export function Button({ href, children, variant = 'primary', className, target, rel }: ButtonProps) {
  return (
    <Link
      href={href}
      target={target}
      rel={rel}
      className={cn('sirp-button', variant === 'secondary' && 'sirp-button--secondary', className)}
    >
      <span className="sirp-button__text">{children}</span>
      {variant === 'primary' && <span className="sirp-button__glow" aria-hidden />}
    </Link>
  )
}
