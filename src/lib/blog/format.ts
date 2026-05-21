import type { BlogPostCard, BlogPostRow } from './types'

const DEFAULT_COVER = '/images/blogs/imgi_19_QTvmn6YhIx2oKxvKM3IfPUvJjeQ.png'

export function isChangelogType(type: string | null | undefined): boolean {
  return type?.trim().toLowerCase() === 'changelog'
}

/** Pillar first, then blog (default), then any other types */
export function getBlogTypeSortOrder(type: string | undefined): number {
  const normalized = type?.trim().toLowerCase()
  if (normalized === 'pillar') return 0
  if (!normalized || normalized === 'blog') return 1
  return 2
}

export function sortBlogGridPosts(posts: BlogPostCard[]): BlogPostCard[] {
  return [...posts].sort((a, b) => {
    const typeOrder = getBlogTypeSortOrder(a.type) - getBlogTypeSortOrder(b.type)
    if (typeOrder !== 0) return typeOrder
    return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  })
}

export function formatBlogDate(publishedAt: string | null): string {
  if (!publishedAt) return ''
  return new Date(publishedAt).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  })
}

export function rowToCard(
  row: Pick<BlogPostRow, 'id' | 'slug' | 'title' | 'excerpt' | 'cover_image' | 'published_at' | 'type'>
): BlogPostCard {
  const typeLabel = row.type?.trim()

  return {
    id: row.id,
    slug: row.slug,
    title: row.title,
    image: row.cover_image?.trim() || DEFAULT_COVER,
    date: formatBlogDate(row.published_at),
    publishedAt: row.published_at ?? '',
    type: typeLabel ? typeLabel.toUpperCase() : undefined,
    excerpt: row.excerpt ?? undefined,
  }
}
