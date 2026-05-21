import { NextResponse } from 'next/server'
import { ValidationError } from 'yup'
import { contactFormSchema, type ContactFormValues } from '@/app/(site)/contact/contactFormSchema'
import { toContactSubmissionRow } from '@/lib/contact/submitContactSubmission'
import { createSupabaseClient } from '@/lib/supabase/server'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const values = (await contactFormSchema.validate(body, {
      abortEarly: false,
      stripUnknown: true,
    })) as ContactFormValues

    const supabase = createSupabaseClient()
    if (!supabase) {
      return NextResponse.json(
        { error: 'Contact form is not configured. Missing Supabase environment variables.' },
        { status: 503 }
      )
    }

    const { error } = await supabase
      .from('contact_submissions')
      .insert(toContactSubmissionRow(values))

    if (error) {
      console.error('[contact] insert failed:', error.message, error.details, error.hint)
      const message =
        process.env.NODE_ENV === 'development'
          ? `Failed to save: ${error.message}`
          : 'Failed to save your submission. Please try again.'
      return NextResponse.json({ error: message }, { status: 500 })
    }

    return NextResponse.json({ ok: true })
  } catch (error) {
    if (error instanceof ValidationError) {
      return NextResponse.json({ error: 'Invalid form data.' }, { status: 400 })
    }
    console.error('[contact] submit error:', error)
    return NextResponse.json(
      { error: 'Something went wrong. Please try again.' },
      { status: 500 }
    )
  }
}
