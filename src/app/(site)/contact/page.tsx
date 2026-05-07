'use client'

import { FormEvent, useEffect, useState } from 'react'
import './page.css'
import { PurplePill } from '@/components/shared/PurplePill'

const COUNTRY_OPTIONS = [
  'Afghanistan',
  'Albania',
  'Algeria',
  'Andorra',
  'Angola',
  'Antigua and Barbuda',
  'Argentina',
  'Armenia',
  'Australia',
  'Austria',
  'Azerbaijan',
  'Bahamas',
  'Bahrain',
  'Bangladesh',
  'Barbados',
  'Belarus',
  'Belgium',
  'Belize',
  'Benin',
  'Bhutan',
  'Bolivia',
  'Bosnia and Herzegovina',
  'Botswana',
  'Brazil',
  'Brunei',
  'Bulgaria',
  'Burkina Faso',
  'Burundi',
  'Cambodia',
  'Cameroon',
  'Canada',
  'Cape Verde',
  'Central African Republic',
  'Chad',
  'Chile',
  'China',
  'Colombia',
  'Comoros',
  'Congo',
  'Costa Rica',
  "Cote d'Ivoire",
  'Croatia',
  'Cuba',
  'Cyprus',
  'Czech Republic',
  'Democratic Republic of the Congo',
  'Denmark',
  'Djibouti',
  'Dominica',
  'Dominican Republic',
  'Ecuador',
  'Egypt',
  'El Salvador',
  'Equatorial Guinea',
  'Eritrea',
  'Estonia',
  'Eswatini',
  'Ethiopia',
  'Fiji',
  'Finland',
  'France',
  'Gabon',
  'Gambia',
  'Georgia',
  'Germany',
  'Ghana',
  'Greece',
  'Grenada',
  'Guatemala',
  'Guinea',
  'Guinea-Bissau',
  'Guyana',
  'Haiti',
  'Honduras',
  'Hungary',
  'Iceland',
  'India',
  'Indonesia',
  'Iran',
  'Iraq',
  'Ireland',
  'Israel',
  'Italy',
  'Jamaica',
  'Japan',
  'Jordan',
  'Kazakhstan',
  'Kenya',
  'Kiribati',
  'Kosovo',
  'Kuwait',
  'Kyrgyzstan',
  'Laos',
  'Latvia',
  'Lebanon',
  'Lesotho',
  'Liberia',
  'Libya',
  'Liechtenstein',
  'Lithuania',
  'Luxembourg',
  'Madagascar',
  'Malawi',
  'Malaysia',
  'Maldives',
  'Mali',
  'Malta',
  'Marshall Islands',
  'Mauritania',
  'Mauritius',
  'Mexico',
  'Micronesia',
  'Moldova',
  'Monaco',
  'Mongolia',
  'Montenegro',
  'Morocco',
  'Mozambique',
  'Myanmar (Burma)',
  'Namibia',
  'Nauru',
  'Nepal',
  'Netherlands',
  'New Zealand',
  'Nicaragua',
  'Niger',
  'Nigeria',
  'North Korea',
  'North Macedonia',
  'Norway',
  'Oman',
  'Pakistan',
  'Palau',
  'Palestine',
  'Panama',
  'Papua New Guinea',
  'Paraguay',
  'Peru',
  'Philippines',
  'Poland',
  'Portugal',
  'Qatar',
  'Romania',
  'Russia',
  'Rwanda',
  'Saint Kitts and Nevis',
  'Saint Lucia',
  'Saint Vincent and the Grenadines',
  'Samoa',
  'San Marino',
  'Sao Tome and Principe',
  'Saudi Arabia',
  'Senegal',
  'Serbia',
  'Seychelles',
  'Sierra Leone',
  'Singapore',
  'Slovakia',
  'Slovenia',
  'Solomon Islands',
  'Somalia',
  'South Africa',
  'South Korea',
  'South Sudan',
  'Spain',
  'Sri Lanka',
  'Sudan',
  'Suriname',
  'Sweden',
  'Switzerland',
  'Syria',
  'Taiwan',
  'Tajikistan',
  'Tanzania',
  'Thailand',
  'Timor-Leste',
  'Togo',
  'Tonga',
  'Trinidad and Tobago',
  'Tunisia',
  'Turkey',
  'Turkmenistan',
  'Tuvalu',
  'Uganda',
  'Ukraine',
  'United Arab Emirates',
  'United Kingdom',
  'United States',
  'Uruguay',
  'Uzbekistan',
  'Vanuatu',
  'Vatican City',
  'Venezuela',
  'Vietnam',
  'Yemen',
  'Zambia',
  'Zimbabwe',
] as const

const CONTACT_SUBMITTED_STORAGE_KEY = 'sirp_contact_submitted'

export default function Page() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitStateReady, setIsSubmitStateReady] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined') return
    const submitted = window.localStorage.getItem(CONTACT_SUBMITTED_STORAGE_KEY)
    setIsSubmitted(submitted === 'true')
    setIsSubmitStateReady(true)
  }, [])

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(CONTACT_SUBMITTED_STORAGE_KEY, 'true')
    }
    setIsSubmitted(true)
  }

  return (
    <div className="contact-page">
      <section className="contact-hero">
        <div className="container-sirp contact-hero-inner">
          <div className="contact-copy">
            <PurplePill className="contact-badge-pill">Contact us</PurplePill>
            <h1 className="contact-title">
              Get a <em>demo</em>
            </h1>
            <p className="contact-description">
              Fill in the form below to ask a question or speak with someone at SIRP.
            </p>
          </div>

          {!isSubmitStateReady ? (
            <div className="contact-form-card contact-form-card--loading" aria-hidden="true" />
          ) : isSubmitted ? (
            <div className="contact-form-card contact-inline-message" role="status" aria-live="polite">
              <h2>You&rsquo;re In. Welcome to Actually Autonomous.</h2>
              <p>
                Thanks for requesting a demo of Sirp &mdash; the only platform built{' '}
                <i>from the ground up</i> for truly autonomous security operations.
              </p>
              <p>We&rsquo;ll reach out within one business day. But if you&rsquo;re ready to move faster, start now:</p>
              <p><strong>Two reads from the core of Autonomous SecOps:</strong></p>
              <ul>
                <li>
                  <a href="https://www.sirp.io/blog/sirp-6-0-3-actually-autonomous" target="_blank" rel="noopener noreferrer">
                    <strong>SIRP 6.0.3</strong> &rarr; Actually Autonomous
                  </a>
                </li>
                <li>
                  <a href="https://www.sirp.io/blog/inside-the-ai-mesh" target="_blank" rel="noopener noreferrer">
                    <strong>Inside the AI Mesh</strong> &rarr; How SIRP&rsquo;s triage agents eliminate noise at scale
                  </a>
                </li>
              </ul>
              <p>Talk soon.</p>
            </div>
          ) : (
            <form className="contact-form-card" aria-label="Contact form" onSubmit={handleSubmit}>
              <div className="contact-form-grid">
                <label className="contact-field">
                  <span>First Name*</span>
                  <input type="text" name="firstName" autoComplete="given-name" />
                </label>
                <label className="contact-field">
                  <span>Last Name*</span>
                  <input type="text" name="lastName" autoComplete="family-name" />
                </label>

                <label className="contact-field">
                  <span>Job Title*</span>
                  <input type="text" name="jobTitle" autoComplete="organization-title" />
                </label>
                <label className="contact-field">
                  <span>Business Email*</span>
                  <input type="email" name="businessEmail" autoComplete="email" />
                </label>

                <label className="contact-field">
                  <span>Company</span>
                  <input type="text" name="company" autoComplete="organization" />
                </label>
                <label className="contact-field">
                  <span>Company Website</span>
                  <input type="url" name="companyWebsite" autoComplete="url" />
                </label>

                <label className="contact-field">
                  <span>Phone*</span>
                  <input type="tel" name="phone" autoComplete="tel" />
                </label>
                <label className="contact-field">
                  <span>Company size*</span>
                  <select name="companySize" defaultValue="">
                    <option value="" disabled>
                      Please Select
                    </option>
                    <option value="<500">&lt;500</option>
                    <option value=">500">&gt;500</option>
                  </select>
                </label>
              </div>

              <label className="contact-field contact-field-full">
                <span>Country / Region*</span>
                <select name="countryRegion" defaultValue="">
                  <option value="" disabled>
                    Please Select
                  </option>
                  {COUNTRY_OPTIONS.map((country) => (
                    <option key={country} value={country}>
                      {country}
                    </option>
                  ))}
                </select>
              </label>

              <label className="contact-field contact-field-full">
                <span>How did you hear about us?*</span>
                <textarea name="howDidYouHear" rows={3} />
              </label>

              <p className="contact-legal">
                SIRP needs the contact information you provide to us to contact you about our products
                and services. You may unsubscribe from these communications at any time. For information
                on how to unsubscribe, as well as our privacy practices, and our commitment to protecting
                your privacy, please review our Privacy Policy.
              </p>

              <div className="contact-recaptcha">protected by reCAPTCHA</div>
              <button type="submit" className="contact-submit">
                Send
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  )
}
