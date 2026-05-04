import type { Metadata } from 'next'
import { PageHeader } from '@/components/layout/PageHeader'
import './page.css'

export const metadata: Metadata = {
  title: 'The Autonomous SOC Manifesto',
  description:
    'A framework for classifying levels of security operations autonomy — from SIRP Labs.',
}

export default function Page() {
  return (
    <div className="manifesto-page">
      <PageHeader
        badgeText="Manifesto"
        heading={
          <>
            The Autonomous <em>SOC</em> Manifesto
          </>
        }
        subtext={
          <>
            <p className="page-header-subtitle">
              A Framework for Classifying Levels of Security Operations Autonomy
            </p>
            <p className="page-header-byline">Faiz Shuja | SIRP Labs | April 2026</p>
          </>
        }
      />
    </div>
  )
}
