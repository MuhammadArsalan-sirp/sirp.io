import { createClient, type SupabaseClient } from '@supabase/supabase-js'

/**
 * Public (browser-shipped) Supabase identifiers for the SIRP-owned project.
 * These are NOT secrets: the publishable key is served to every visitor by
 * design. Baked in as fallback because deployment env vars have pointed at a
 * deleted project before (July 2026 outage) and we cannot always edit them.
 */
const FALLBACK_URL = 'https://iamrjfypqtdfmmdxkozo.supabase.co'
const FALLBACK_KEY = 'sb_publishable_D_q5QdDDrsJ99C_79v_jHg_ih27YxxT'

/** Project refs that no longer exist; env pointing here must be ignored. */
const DEAD_PROJECT_REFS = ['wyqlabvqcrgdiebgwden']

export function createSupabaseClient(): SupabaseClient | null {
  let url = process.env.NEXT_PUBLIC_SUPABASE_URL
  let key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  // Missing or dead env config: fall back to the known-good pair. The key is
  // swapped together with the URL because keys are bound to one project.
  if (!url || !key || DEAD_PROJECT_REFS.some((ref) => url!.includes(ref))) {
    url = FALLBACK_URL
    key = FALLBACK_KEY
  }

  return createClient(url, key)
}
