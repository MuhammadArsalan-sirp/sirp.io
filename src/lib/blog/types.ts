/** Row shape from Supabase `blog_posts` table */
export type BlogPostRow = {
  id: string
  title: string
  slug: string
  content: string
  excerpt: string | null
  cover_image: string | null
  published_at: string | null
  type: string | null
}

/** Card data used by the blog listing UI */
export type BlogPostCard = {
  id: string
  slug: string
  title: string
  image: string
  date: string
  publishedAt: string
  type?: string
  excerpt?: string
}
