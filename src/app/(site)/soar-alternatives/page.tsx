import type { Metadata } from 'next'
import { PageHeader } from '@/components/layout/PageHeader'
import { SectionLead } from '@/components/shared/SectionLead'
import { BlackGradientCard } from '@/components/shared/BlackGradientCard'
import { StatementLinesSection } from '@/components/shared/StatementLinesSection'
import { SplitInfoCtaImage } from '@/components/shared/SplitInfoCtaImage'
import { AutonomousSocComparisonSection } from '@/components/shared/AutonomousSocComparisonSection'
import { FaqAccordionSection } from '@/components/shared/FaqAccordionSection'
import { InfoCtaBlock } from '@/components/shared/InfoCtaBlock'
import { CtaSection } from '@/sections/home/CtaSection'
import {
  SOAR_ALTERNATIVES_FAQ,
  SOAR_ALTERNATIVES_KEY_DIFFERENCES,
  SOAR_ALTERNATIVES_OPERATING_MODEL_CTA,
  CTA_DATA,
} from '@/lib/constants'
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

      <SplitInfoCtaImage
        sectionClassName="soar-alt-split soar-alt-what-replaces"
        heading="What Replaces SOAR?"
        body={
          <>
            <p>
              An Autonomous SOC is not &ldquo;next-generation SOAR.&rdquo; It is a different architectural model.
            </p>
            <p>Instead of centering on playbooks, an Autonomous SOC platform:</p>
            <ul className="soc-point-list">
              <li>Continuously ingests multi-domain telemetry</li>
              <li>Constructs relational context across identities, endpoints, cloud, and behavior</li>
              <li>Computes risk state dynamically</li>
              <li>Selects response actions within enforced policy boundaries</li>
              <li>Executes autonomously for defined incident classes</li>
              <li>Records full reasoning trails for audit and compliance</li>
              <li>Learns from resolved incidents to improve future decisions</li>
            </ul>
            <p>
              This is not deeper automation. It is decision relocation into a governed autonomous SOC platform capable of
              executing within defined policy boundaries.
            </p>
            <p>It is decision relocation.</p>
          </>
        }
        image={{
          src: '/images/soc-alternatives/whatreplacesSOAR.png',
          alt: 'From customers and alerts through analysts to cost explosion — workflow path illustration',
        }}
      />

      <AutonomousSocComparisonSection data={SOAR_ALTERNATIVES_KEY_DIFFERENCES} />

      <SplitInfoCtaImage
        sectionClassName="soar-alt-split soar-alt-who-should-replacing"
        imagePosition="left"
        heading="Who Should Consider Replacing SOAR?"
        body={
          <>
            <p className="info-cta-lead">Autonomous SOC is particularly suited for:</p>
            <ul>
              <li>Enterprises operating across identity, cloud, SaaS, and endpoint simultaneously</li>
              <li>MSSPs managing multi-tenant response at scale</li>
              <li>SOCs experiencing high alert volume and inconsistent response quality</li>
              <li>Organizations where response latency materially increases risk exposure</li>
            </ul>
            <p className="info-cta-lead">SOAR may still be sufficient if:</p>
            <ul>
              <li>Automation is limited to enrichment</li>
              <li>Incident volume is low</li>
              <li>Manual triage remains manageable</li>
            </ul>
            <p>
              Replacing SOAR becomes logical when workflow orchestration becomes the operational ceiling.
            </p>
          </>
        }
        image={{
          src: '/images/soc-alternatives/WhoShouldConsiderReplacingSOAR.png',
          alt: 'Fragmented alerts and handoffs converging into a single governed decision path',
        }}
      />

      <SplitInfoCtaImage
        sectionClassName="soar-alt-split soar-alt-migration-path"
        heading="Migration Path: Moving Beyond SOAR"
        body={
          <>
            <p>Replacing SOAR does not require a disruptive rip-and-replace strategy.</p>
            <p className="info-cta-lead">A phased transition can include:</p>
            <ul>
              <li>Running Autonomous SOC alongside existing SOAR</li>
              <li>Defining policy tiers and execution thresholds</li>
              <li>Moving repetitive containment classes into autonomous enforcement</li>
              <li>Measuring latency reduction and decision consistency</li>
              <li>Gradually reducing manual gating as confidence matures</li>
            </ul>
            <p>The objective is not eliminating analysts.</p>
            <p>It is moving analysts from routing work to defining governance.</p>
          </>
        }
        image={{
          src: '/images/soc-alternatives/Migration%20Path.png',
          alt: 'Phased migration: policy, thresholds, and audit around an execution path with team alignment',
        }}
      />

      <FaqAccordionSection data={SOAR_ALTERNATIVES_FAQ} />

      <div className="relative overflow-x-hidden overflow-y-visible isolate">
        <div className="pb-[26px]">
          <InfoCtaBlock
            sectionClassName="soar-alt-info-cta-outro"
            heading={
              <>
                {SOAR_ALTERNATIVES_OPERATING_MODEL_CTA.headingLine1}
                <br />
                {SOAR_ALTERNATIVES_OPERATING_MODEL_CTA.headingLine2}
              </>
            }
            body={
              <>
                {SOAR_ALTERNATIVES_OPERATING_MODEL_CTA.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </>
            }
            button={SOAR_ALTERNATIVES_OPERATING_MODEL_CTA.primaryButton}
            secondaryButton={SOAR_ALTERNATIVES_OPERATING_MODEL_CTA.secondaryButton}
          />
        </div>
        <CtaSection data={CTA_DATA} />
      </div>
    </div>
  )
}
