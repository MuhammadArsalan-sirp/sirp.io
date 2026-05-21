import type { BlogPostCard, BlogPostRow } from './types'

const DEFAULT_COVER = '/images/blogs/imgi_19_QTvmn6YhIx2oKxvKM3IfPUvJjeQ.png'

export function formatBlogDate(publishedAt: string | null): string {
  if (!publishedAt) return ''
  return new Date(publishedAt).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  })
}

export function rowToCard(row: Pick<BlogPostRow, 'id' | 'slug' | 'title' | 'excerpt' | 'cover_image' | 'published_at'>): BlogPostCard {
  return {
    id: row.id,
    slug: row.slug,
    title: row.title,
    image: row.cover_image?.trim() || DEFAULT_COVER,
    date: formatBlogDate(row.published_at),
    excerpt: row.excerpt ?? undefined,
  }
}
