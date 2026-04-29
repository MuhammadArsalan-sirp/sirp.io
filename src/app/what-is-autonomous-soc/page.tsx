import { PageHeader } from '@/components/layout/PageHeader'
import { WHAT_IS_AUTONOMOUS_SOC_HEADER } from '@/lib/constants'

export default function Page() {
  const { badgeText, heading, subtext } = WHAT_IS_AUTONOMOUS_SOC_HEADER

  return (
    <PageHeader
      badgeText={badgeText}
      heading={
        <>
          {heading.prefix}
          <br />
          <em>{heading.emphasized}</em>
          {heading.suffix}
        </>
      }
      subtext={
        <>
          <span className="page-header-subtext-block">{subtext.paragraph1}</span>
          <span className="page-header-subtext-gap">{subtext.paragraph2}</span>
          <span className="page-header-subtext-gap">{subtext.paragraph3}</span>
        </>
      }
    />
  )
}
