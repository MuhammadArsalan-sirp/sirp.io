-- sirp.io marketing site — initial schema
-- blog_posts: public blog/changelog content rendered by the Next.js site
-- contact_submissions: inbound leads from the contact form

create table if not exists public.blog_posts (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  slug text not null unique,
  content text,
  excerpt text,
  cover_image text,
  published_at timestamptz,
  type text,
  created_at timestamptz not null default now(),
  -- a corrupted slug ("foo/blog") once made a post unreachable; never again
  constraint blog_posts_slug_no_slash check (slug !~ '/')
);

create index if not exists blog_posts_published_at_idx
  on public.blog_posts (published_at desc);

create table if not exists public.contact_submissions (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  first_name text not null,
  last_name text not null,
  job_title text,
  business_email text not null,
  company text,
  company_website text,
  phone text not null,
  company_size text,
  country_region text,
  referral_source text
);

-- Row Level Security: the site uses only the anon key.
alter table public.blog_posts enable row level security;
alter table public.contact_submissions enable row level security;

-- Anyone may read published posts; drafts (null/future published_at) are invisible.
create policy "public read published posts"
  on public.blog_posts for select
  using (published_at is not null and published_at <= now());

-- Anyone may submit the contact form; nobody may read leads with the anon key.
create policy "public insert contact submissions"
  on public.contact_submissions for insert
  with check (true);
