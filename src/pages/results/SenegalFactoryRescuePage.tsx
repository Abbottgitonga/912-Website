import React from 'react';
import { CaseStudyLayout } from '@/components/layout/CaseStudyLayout';

export default function SenegalFactoryRescuePage() {
  return (
    <CaseStudyLayout
      eyebrow="MANUFACTURING · WEST AFRICA · 2024"
      title="25 days locked out of every system. Restored remotely from Nairobi."
      metrics={[
        { value: '25 days', label: 'Total lockout duration' },
        { value: '0 → Full', label: 'Asset registry built from scratch' },
        { value: '50%', label: 'Infrastructure cost reduction' },
      ]}
      situation="A manufacturing client's internal IT employee resigned and walked out with every password to every system. No documentation existed. No asset registry. No backup credentials. No handover notes. The entire business — ERP, email, file servers, security systems — was locked. For 25 days, operations ran on paper and phone calls."
      intervention={
        <>
          <p>We worked the recovery remotely from Nairobi. Our team reconstructed access to every system through vendor escalation, firmware-level resets, and direct engagement with cloud providers. We didn't fly a team in — we ran it end-to-end from Nairobi.</p>
          <p>Simultaneously, we built a complete digital asset registry from scratch — every device, every license, every credential, documented and secured in a central vault.</p>
          <p>We then migrated their SAP HANA environment off shared cloud onto dedicated bare-metal, restructuring their hosting architecture entirely.</p>
        </>
      }
      resolution="Full operations restored. Complete asset registry created where none existed. Monthly hosting cost cut in half through the SAP HANA migration. The client now has documentation, backup credentials, and a structured IT environment for the first time in the company's history."
      whatThisMeans="If one person leaving your company can take your IT with them, you don't have an IT system — you have a dependency. The 912 model is built to make this scenario structurally impossible. Every client gets a documented, redundant, vendor-independent technology environment from day one."
      nextStudy={{ title: 'SAP HANA migration — EUR 58,200 saved', slug: 'sap-hana-migration' }}
    />
  );
}
