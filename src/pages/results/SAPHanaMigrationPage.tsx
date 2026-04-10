import React from 'react';
import { CaseStudyLayout } from '@/components/layout/CaseStudyLayout';

export default function SAPHanaMigrationPage() {
  return (
    <CaseStudyLayout
      eyebrow="MANUFACTURING · MULTI-COUNTRY · 2024"
      title="From shared SAP HANA on the cloud to dedicated bare-metal. EUR 58,200 saved over 5 years."
      metrics={[
        { value: 'EUR 58.2K', label: 'Saved over 5 years' },
        { value: '2-5x', label: 'Faster query performance' },
        { value: '90+', label: 'Users supported' },
      ]}
      situation="A manufacturing group was paying roughly EUR 1,000 per month for shared cloud SAP HANA hosting. The environment slowed down at month-end when reporting loads peaked. Costs crept up every quarter as data grew. The vendor's pricing model penalised growth — the more the client used the system, the more they paid."
      intervention={
        <>
          <p>We migrated them to a fully dedicated bare-metal environment sized for up to 90-100 users at roughly EUR 19,000 per year. The environment includes full disaster recovery — live database replication to a secondary site.</p>
          <p>The migration was executed without production downtime. We ran parallel environments for two weeks, validated data integrity across all modules, and cut over during a planned weekend window.</p>
        </>
      }
      resolution="Total five-year cost dropped from approximately EUR 60,000 to EUR 95,000 on shared cloud to EUR 19,000 per year on dedicated infrastructure. Query performance improved 2-5x. Month-end reporting that previously took hours now completes in minutes. Disaster recovery is included — it wasn't before."
      whatThisMeans="Cloud is not always cheaper. For SAP HANA workloads above a certain threshold, dedicated bare-metal is significantly more cost-effective — and more performant. Most businesses don't evaluate this because their cloud provider has no incentive to suggest it. 912 is vendor-neutral — we recommend the architecture that costs you less."
      nextStudy={{ title: 'Internal fraud uncovered through an IT audit', slug: 'internal-fraud-discovery' }}
    />
  );
}
