import React from 'react';
import { CaseStudyLayout } from '@/components/layout/CaseStudyLayout';

export default function InternalFraudPage() {
  return (
    <CaseStudyLayout
      eyebrow="FINANCIAL SERVICES · NAIROBI · 2023"
      title="A small invoice discrepancy uncovered years of theft."
      metrics={[
        { value: 'Near-zero', label: 'Cost of initial flag' },
        { value: 'Multi-year', label: 'Fraud duration uncovered' },
        { value: 'Millions', label: 'Recovered in value' },
      ]}
      situation="A finance team flagged a small invoice discrepancy during a routine review. The amount was minor — small enough that most audit processes would have written it off as a rounding error or a data entry mistake. The client asked us to take a closer look as part of a broader IT systems audit."
      intervention={
        <>
          <p>The 912 audit team followed the discrepancy through the client's financial systems. We traced transaction logs, cross-referenced user access records with Active Directory timestamps, and mapped data modification patterns across multiple months.</p>
          <p>What we found was a multi-year scheme run by an internal Information Systems Manager who had been systematically moving funds through a combination of modified transaction records and exploited access privileges that had never been reviewed or rotated.</p>
        </>
      }
      resolution="The fraud was fully documented with forensic-grade evidence. The discovery cost the client almost nothing — it emerged as a byproduct of a standard IT audit engagement. The recovery was substantial. The client has since implemented the 912 access control and audit framework across all financial systems."
      whatThisMeans="Most internal fraud isn't discovered by expensive forensic investigations. It's discovered by IT audits that happen to look in the right place. The 912 model includes periodic access reviews, privilege audits, and transaction log analysis as standard practice — not as an add-on."
      nextStudy={{ title: 'FMCG automation — 14% profitability increase', slug: 'fmcg-automation' }}
    />
  );
}
