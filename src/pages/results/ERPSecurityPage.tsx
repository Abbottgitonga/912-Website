import React from 'react';
import { CaseStudyLayout } from '@/components/layout/CaseStudyLayout';

export default function ERPSecurityPage() {
  return (
    <CaseStudyLayout
      eyebrow="FINANCIAL SERVICES · NAIROBI · 2023"
      title="Microsoft Dynamics on the cloud, locked down so tightly that zero unauthorised access incidents have happened since."
      metrics={[
        { value: '0', label: 'Unauthorised access incidents' },
        { value: 'Layered', label: 'VPN + AD + 2FA architecture' },
        { value: 'Live', label: 'DB replication for DR' },
      ]}
      situation="A financial services client running Microsoft Dynamics in the cloud needed real access security — not the dashboard kind. Their existing setup relied on basic username/password authentication with no session monitoring, no time-based access restrictions, and no disaster recovery beyond nightly backups that had never been tested."
      intervention={
        <>
          <p>We built a layered security architecture from the ground up: VPN as the first gate, then Active Directory authentication, then two-factor authentication as the final layer. Every access request passes through all three before reaching the application.</p>
          <p>On top of the access layers, we implemented time-based restrictions on user roles (finance users can only access the system during business hours), full session monitoring with automatic timeout, and role-based data visibility controls.</p>
          <p>For disaster recovery, we set up live database replication to a geographically separate secondary site — not nightly backups, but continuous real-time replication with automated failover testing.</p>
        </>
      }
      resolution="Zero unauthorised access incidents since deployment. Session monitoring has flagged and prevented multiple out-of-hours access attempts. The disaster recovery architecture has been tested quarterly with full failover — something the previous backup system was never capable of. The client's compliance posture improved significantly, which directly affected their insurance premiums."
      whatThisMeans="Most ERP security implementations focus on the perimeter — a firewall and a password policy. Real security is layered, monitored, and tested. If your ERP provider can't tell you when the last successful disaster recovery test was, you don't have disaster recovery — you have a backup that might work."
      nextStudy={{ title: 'Senegal factory rescue — 25 days restored', slug: 'senegal-factory-rescue' }}
    />
  );
}
