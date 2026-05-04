import type { Metadata } from 'next'
import { PageHeader } from '@/components/layout/PageHeader'
import { SectionLead } from '@/components/global/SectionLead'
import { BlackGradientCard } from '@/components/global/BlackGradientCard'
import { StatementLinesSection } from '@/components/global/StatementLinesSection'
import './page.css'

export const metadata: Metadata = {
  title: 'SOAR Alternatives',
  description:
    'Organizations searching for SOAR alternatives are typically experiencing operational friction — not feature gaps. Explore Autonomous SOC as a governed alternative to legacy workflow automation.',
}

export default function Page() {
  return (
    <div className="soar-alternatives-page">
      <PageHeader
        heading="SOAR Alternatives"
        subtext={
          <>
            <p className="page-header-subtitle">
              Replacing Workflow Automation with Autonomous SOC
            </p>
            <p>
              Organizations searching for SOAR alternatives are typically experiencing operational friction — not feature
              gaps.
            </p>
            <p>
              Traditional SOAR platforms automate workflows and coordinate tools. But as security environments become
              cross-domain, identity-driven, and AI-accelerated, workflow orchestration alone often becomes the bottleneck.
            </p>
            <p>
              Autonomous SOC platforms replace legacy SOAR with governed decision systems that compute risk dynamically,
              enforce policy boundaries, and execute response actions without routing every incident through human queues.
              This architectural shift defines what an autonomous SOC is and how security decisions are computed directly
              inside the platform.
            </p>
            <p>
              If your SOC relies heavily on playbook tuning, manual validation, and workflow maintenance, it may be time
              to evaluate alternatives.
            </p>
          </>
        }
      />

      <SectionLead
        heading="Why Teams Look for SOAR Alternatives"
        subheading="The interest in SOAR replacement is rarely about abandoning automation. It is about overcoming structural limitations."
      >
        <BlackGradientCard
          title="Static Playbooks Cannot Adapt"
          text={
            <p>
              SOAR executes predefined logic trees. When incident state changes mid-response, workflows do not reinterpret
              risk — they continue executing as written. Modern attacks evolve in real time. Automation without reasoning
              struggles to keep pace.
            </p>
          }
        />
        <BlackGradientCard
          title="Human Routing Creates Latency"
          text={
            <>
              <p>In most SOAR environments:</p>
              <ul>
                <li>Alert triggers workflow</li>
                <li>Workflow generates recommendation</li>
                <li>Analyst reviews</li>
                <li>Supervisor validates</li>
                <li>Action executes</li>
              </ul>
              <p>Each handoff increases response time.</p>
              <p>Each delay increases potential blast radius.</p>
              <p>SOAR coordinates actions. It does not own decisions.</p>
            </>
          }
        />
        <BlackGradientCard
          title="Continuous Tuning Becomes Operational Overhead"
          text={
            <>
              <p>Maintaining SOAR environments requires:</p>
              <ul>
                <li>Playbook rewrites</li>
                <li>Threshold tuning</li>
                <li>Integration updates</li>
                <li>Logic maintenance</li>
              </ul>
              <p>The system does not improve autonomously. It must be maintained manually.</p>
            </>
          }
        />
      </SectionLead>

      <StatementLinesSection heading="Intelligence Does Not Compound">
        <p>Incidents close.</p>
        <p>The platform remains static.</p>
        <p>Without embedded learning, decision quality does not improve based on precedent.</p>
        <p>Workflow orchestration scales steps — not judgment.</p>
      </StatementLinesSection>
    </div>
  )
}
