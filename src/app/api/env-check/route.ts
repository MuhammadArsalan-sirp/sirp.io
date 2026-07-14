import { NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'

/**
 * TEMPORARY diagnostic route — delete after recovering Supabase env.
 * Returns only NEXT_PUBLIC_* Supabase values, which are public-by-design
 * (the anon key ships to browsers on any Supabase-backed site).
 */
export function GET() {
  return NextResponse.json({
    supabaseUrl: process.env.NEXT_PUBLIC_SUPABASE_URL ?? null,
    supabaseAnonKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? null,
  })
}
