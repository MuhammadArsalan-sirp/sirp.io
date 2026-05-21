import type { ContactFormValues } from '@/app/(site)/contact/contactFormSchema'

export type ContactSubmissionInsert = {
  first_name: string
  last_name: string
  job_title: string | null
  business_email: string
  company: string | null
  company_website: string | null
  phone: string
  company_size: string | null
  country_region: string | null
  referral_source: string | null
}

function optionalText(value: string | undefined): string | null {
  const trimmed = value?.trim()
  return trimmed ? trimmed : null
}

export function toContactSubmissionRow(
  values: ContactFormValues & Partial<Record<keyof ContactFormValues, string | undefined>>
): ContactSubmissionInsert {
  return {
    first_name: values.firstName.trim(),
    last_name: values.lastName.trim(),
    job_title: optionalText(values.jobTitle),
    business_email: values.businessEmail.trim(),
    company: optionalText(values.company),
    company_website: optionalText(values.companyWebsite),
    phone: values.phone.trim(),
    company_size: values.companySize || null,
    country_region: values.countryRegion || null,
    referral_source: optionalText(values.howDidYouHear),
  }
}
