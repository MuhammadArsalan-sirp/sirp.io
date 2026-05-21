import { createSupabaseClient } from '@/lib/supabase/server'
import { rowToCard } from './format'
import type { BlogPostCard, BlogPostRow } from './types'

const LIST_COLUMNS = 'id, title, slug, excerpt, cover_image, published_at' as const

function isPublished(publishedAt: string | null): boolean {
  if (!publishedAt) return false
  return new Date(publishedAt).getTime() <= Date.now()
}

export async function getPublishedBlogPosts(): Promise<BlogPostCard[]> {
  const supabase = createSupabaseClient()
  if (!supabase) {
    console.warn('[blog] Set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY in .env.local')
    return []
  }

  const { data, error } = await supabase
    .from('blog_posts')
    .select(LIST_COLUMNS)
    .not('published_at', 'is', null)
    .lte('published_at', new Date().toISOString())
    .order('published_at', { ascending: false })

  if (error) {
    console.error('[blog] getPublishedBlogPosts:', error.message)
    return []
  }

  return (data ?? []).filter((row) => isPublished(row.published_at)).map(rowToCard)
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPostRow | null> {
  const supabase = createSupabaseClient()
  if (!supabase) return null

  const { data, error } = await supabase
    .from('blog_posts')
    .select('*')
    .eq('slug', slug)
    .maybeSingle()

  if (error) {
    console.error('[blog] getBlogPostBySlug:', error.message)
    return null
  }

  if (!data || !isPublished(data.published_at)) return null

  return data as BlogPostRow
}

export async function getPublishedBlogSlugs(): Promise<string[]> {
  const posts = await getPublishedBlogPosts()
  return posts.map((p) => p.slug)
}
