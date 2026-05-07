import { BlogHero } from '@/sections/blog/BlogHero'
import { BlogGrid } from '@/sections/blog/BlogGrid'
import { BlogChangelog } from '@/sections/blog/BlogChangelog'

export const metadata = {
  title: 'Blog | SIRP',
  description:
    'Autonomous SOC insights, security operations research, and AI-native security content from the SIRP team.',
}

export default function BlogPage() {
  return (
    <>
      <BlogHero />
      <BlogGrid />
      <BlogChangelog />
    </>
  )
}
