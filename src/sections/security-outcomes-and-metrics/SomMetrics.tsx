import {
  ImpactMetricsDashboard,
  type ImpactMetricsDashboardMetric,
} from '@/components/shared/ImpactMetricsDashboard'
import { SOM_METRICS } from '@/lib/constants/security-outcomes-and-metrics'

function toImpactMetrics(
  items: typeof SOM_METRICS.items,
): ImpactMetricsDashboardMetric[] {
  return items.map((item) => ({
    id: item.id,
    badge: item.badge,
    value: item.value,
    subtitle: item.sub,
    color: item.color,
    icon: item.icon,
    valueVariant: 'color' as const,
  }))
}

export function SomMetrics() {
  const { heading, subtext, items } = SOM_METRICS

  return (
    <ImpactMetricsDashboard
      heading={heading}
      subtext={subtext}
      metrics={toImpactMetrics(items)}
      pillStyle="filter"
    />
  )
}
