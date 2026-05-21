import Link from 'next/link'
import { PageHeader } from '@/components/layout/PageHeader'
import { PurplePill } from '@/components/shared/PurplePill'
import { BlogGrid } from '@/sections/blog/BlogGrid'
import { BlogChangelog } from '@/sections/blog/BlogChangelog'
import { BLOG_HERO } from '@/lib/constants/blog'
import './page.css'

export const metadata = {
  title: 'Blog | SIRP',
  description:
    'Autonomous SOC insights, security operations research, and AI-native security content from the SIRP team.',
}

export default function BlogPage() {
  const hero = BLOG_HERO

  return (
    <div className="blog-page">
      <PageHeader
        badgeText={hero.badge}
        heading={
          <>
            {hero.heading.line1}
            <br />
            {hero.heading.line2prefix}
            <em>{hero.heading.italic}</em>
          </>
        }
        subtext={
          <>
            <p>
              {hero.descLine1}
              <br />
              {hero.descLine2}
            </p>
            <p className="page-header-subtext-gap">{hero.guideText}</p>
            <p className="page-header-subtext-gap">
              <Link href={hero.guideLink.href} className="blog-page-guide-pill-link">
                <PurplePill className="blog-page-guide-purple-pill">{hero.guideLink.label}</PurplePill>
              </Link>
            </p>
          </>
        }
      />
      <BlogGrid />
      <BlogChangelog />
    </div>
  )
}
