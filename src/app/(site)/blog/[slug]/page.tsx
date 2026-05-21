import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getBlogPostBySlug, getPublishedBlogSlugs } from '@/lib/blog/queries'
import { formatBlogDate } from '@/lib/blog/format'
import { BlogPostContent } from '@/sections/blog/BlogPostContent'
import './page.css'

export const revalidate = 60

type PageProps = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const slugs = await getPublishedBlogSlugs()
  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params
  const post = await getBlogPostBySlug(slug)

  if (!post) {
    return { title: 'Post not found' }
  }

  return {
    title: post.title,
    description: post.excerpt ?? undefined,
  }
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params
  const post = await getBlogPostBySlug(slug)

  if (!post) notFound()

  const coverImage =
    post.cover_image?.trim() || '/images/blogs/imgi_19_QTvmn6YhIx2oKxvKM3IfPUvJjeQ.png'
  const dateLabel = formatBlogDate(post.published_at)

  return (
    <article className="blog-post-page">
      <div className="container-sirp blog-post-page-inner">
        <Link href="/blog" className="blog-post-back">
          ← Back to blog
        </Link>

        <header className="blog-post-header">
          {dateLabel ? <time className="blog-post-date">{dateLabel}</time> : null}
          <h1 className="blog-post-title">{post.title}</h1>
          {post.excerpt ? <p className="blog-post-excerpt">{post.excerpt}</p> : null}
        </header>

        <div className="blog-post-cover">
          <Image
            src={coverImage}
            alt=""
            fill
            priority
            unoptimized
            style={{ objectFit: 'cover' }}
          />
        </div>

        <BlogPostContent content={post.content} />
      </div>
    </article>
  )
}
