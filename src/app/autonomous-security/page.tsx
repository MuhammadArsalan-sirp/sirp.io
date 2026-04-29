import { PageHeader } from '@/components/layout/PageHeader'

export default function Page() {
  return (
    <PageHeader
      badgeText="Pillar"
      heading={
        <>
          <em>Autonomous SOC</em>
          <br />
          From Playbooks to
          <br />
          Decision Systems
        </>
      }
      subtext={
        <>
          <span className="page-header-subtext-block">
            Security operations were built for human-paced threats. Modern attacks operate at machine speed. The SOC operating model must evolve.
          </span>
          <span className="page-header-subtext-gap">
            An Autonomous SOC is a security operations model where AI systems independently analyze alerts, compute risk, decide response actions, and execute remediation within defined governance boundaries. Unlike traditional SOAR platforms that automate static workflows, an Autonomous SOC enables decision-driven security operations.
          </span>
        </>
      }
    />
  )
}
