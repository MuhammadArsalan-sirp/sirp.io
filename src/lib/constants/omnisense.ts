export const OMNISENSE_PAGE_DATA = {
  hero: {
    badge:         'Autonomous SOC Platform',
    headingItalic: 'Actually',
    heading:       'autonomous.',
    description:   'SIRP OmniSense™ delivers a governed Autonomous SOC that continuously detects, decides, and executes response actions within defined policy boundaries. It also thinks, learns and acts at machine speed, without the noise or the burnout.',
    ctaLabel:      'Learn more about Autonomous SOC',
    ctaHref:       '/how-autonomous-soc-works',
    image:         '/images/omnisense/architecture.png',
    imageAlt:      'OmniSense architecture overview',
  },
  platform: {
    badge:         'The AI-native Autonomous SOC platform',
    heading:       'Not just smarter.',
    headingItalic: 'Truly',
    headingSuffix: 'autonomous.',
    tabs: [
      {
        id:          'omnisense-core',
        label:       'OmniSense Core',
        title:       'OmniSense Core',
        description: 'The foundation: a living mesh of autonomous security agents and the orchestrator that binds them. It\'s where reflex, reasoning, and execution converge.',
        image:       '/images/omnisense/omnisense-core.png',
      },
      {
        id:          'omnisec-llm',
        label:       'OmniSec LLM',
        title:       'OmniSec LLM',
        description: 'A security-tuned large language model trained on threat intel, incident data, and SOC workflows. It powers natural-language reasoning, alert narration, and co-analyst capabilities across the platform.',
        image:       '/images/omnisense/omnisec-llm.png',
      },
      {
        id:          'omnimap-rag',
        label:       'OmniMap + RAG',
        title:       'OmniMap + RAG',
        description: 'OmniMap builds a live relational graph of your environment — identities, devices, workloads, access paths. RAG grounds every decision in your organization\'s own context, history, and policies.',
        image:       '/images/omnisense/omnimap-rag.png',
      },
      {
        id:          'omniflex',
        label:       'OmniFlex',
        title:       'OmniFlex',
        description: 'The integration and orchestration layer. OmniFlex connects OmniSense to your entire security stack — SIEM, EDR, SOAR, identity, cloud — and executes bi-directional actions without manual routing.',
        image:       '/images/omnisense/omniflex.png',
      },
      {
        id:          'omnicollective',
        label:       'OmniCollective',
        title:       'OmniCollective',
        description: 'Collective threat intelligence that improves every OmniSense deployment. Anonymized signals from the network feed back into detection models, making every instance smarter over time.',
        image:       '/images/omnisense/omnicollective.png',
      },
    ],
  },
  agents: {
    heading:     'Agents in the mesh',
    description: "OmniSense's autonomous SOC agents in the mesh accelerate alert containment, optimizing security operations with faster incident analysis, remediation, and response.",
    items: [
      {
        icon:        'classification',
        title:       'Classification Agent',
        description: 'The Classification Agent categorizes incoming alerts based on type (e.g., phishing, malware, insider threat). This helps in efficient triaging and routing of the alerts for appropriate action.',
      },
      {
        icon:        'playbook',
        title:       'Suggest Playbook Agent',
        description: 'The Suggest Playbook Agent proposes relevant playbooks to follow based on the nature of the incident. It helps in ensuring that the right procedures are applied, aligning actions with pre-configured, best-practice response procedures.',
      },
      {
        icon:        'assign',
        title:       'Assign Analyst Agent',
        description: 'The Assign Analyst Agent automatically assigns alerts to available analysts based on their expertise and workload. This optimizes resource allocation, ensuring that the right person handles the right incident.',
      },
      {
        icon:        'header',
        title:       'Header Analysis Agent',
        description: 'Analysis email headers to detect spoofing, relay abuse, sender mismatches and anomalous routing, enhancing phishing detection, sender trust scoring and automated triage.',
      },
      {
        icon:        'preprocessor',
        title:       'Pre Processor Agent',
        description: 'Processes and normalizes raw alerts by extracting key entities and context for downstream triage and enrichment.',
      },
      {
        icon:        'enrichment',
        title:       'Enrichment Agent',
        description: 'The Enrichment Agent gathers external threat intelligence, asset data, and historical context to add depth to incoming alerts. It ensures that each alert is enriched with relevant details for better analysis and decision-making.',
      },
      {
        icon:        'analysis',
        title:       'Analysis Agent',
        description: 'The Analysis Agent analyzes alerts to identify patterns, behaviors, and trends. It examines alert data and context, highlighting anomalous activities and key indicators, aiding the analyst in setting to quicker threat detection.',
      },
      {
        icon:        'remediation',
        title:       'Remediation Agent',
        description: 'The Remediation Agent executes containment actions, such as isolating endpoints or blocking IPs, to automate remediation, ensuring swift and consistent incident response.',
      },
      {
        icon:        'actions',
        title:       'Suggested Actions Agent',
        description: 'The Suggested Actions Agent proposes targeted response steps based on alert context and severity, providing analysts with timely and appropriate responses to threats.',
      },
    ],
  },
  action: {
    heading: 'See Autonomous SOC in Action',
    description: 'Watch how SIRP ingests a live alert, constructs relational context, computes risk, enforces policy boundaries, and executes containment actions autonomously — without manual routing or workflow delays.',
    note1: 'This is not playbook automation.',
    note2: 'This is governed decision execution.',
    videoId: 'VIeVs8nbM6U',
  },
} as const
