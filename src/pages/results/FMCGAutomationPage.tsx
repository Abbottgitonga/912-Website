import React from 'react';
import { CaseStudyLayout } from '@/components/layout/CaseStudyLayout';

export default function FMCGAutomationPage() {
  return (
    <CaseStudyLayout
      eyebrow="FMCG · NAIROBI · 2023"
      title="Trucks waiting hours at the gate. Profitability went up 14%."
      metrics={[
        { value: 'Hours → Min', label: 'Order processing time' },
        { value: '14%', label: 'Profitability increase' },
        { value: 'Fully auto', label: 'LPO processing' },
      ]}
      situation="An FMCG client was losing money on the gap between when supermarkets placed an LPO and when goods left the warehouse. The process was manual — LPOs arrived by email, were printed, walked to the warehouse, verified by hand against stock, loaded, and dispatched. Trucks waited hours at the gate. Errors were common. The finance team reconciled everything manually at month-end."
      intervention={
        <>
          <p>We automated the entire process end to end. Emailed LPOs are now scanned and verified automatically on truck arrival. Accuracy reports are generated without human intervention. Real-time WhatsApp updates go to every stakeholder — warehouse, finance, dispatch, and the client — at each stage of the process.</p>
          <p>The system integrates directly with the client's existing ERP, so inventory counts update in real time and month-end reconciliation happens continuously rather than as a batch process.</p>
        </>
      }
      resolution="Order processing time dropped from hours to minutes. Manual errors were eliminated. Month-end reconciliation went from a multi-day exercise to a real-time dashboard. Overall profitability increased by 14% within the first quarter — not from new revenue, but from eliminating operational waste that had been invisible in the manual process."
      whatThisMeans="The biggest efficiency gains in most businesses aren't hiding in sophisticated AI projects. They're hiding in manual processes that everyone has gotten used to. A well-designed automation project — built around the way your operations actually work, not around a generic software demo — will outperform most technology investments by an order of magnitude."
      nextStudy={{ title: 'ERP security — zero unauthorised access', slug: 'erp-security' }}
    />
  );
}
