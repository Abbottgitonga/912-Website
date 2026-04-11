import React from 'react';
import { FAQSection } from '@/components/ui/FAQSection';

const globalFaqs = [
  {
    question: "Why does the 'One Contract' model work better than multiple vendors?",
    answer: "Most IT issues in Africa go unresolved because vendors point fingers at each other. By managing every layer — from the physical gate to the cloud server — 912 eliminates the gaps where security risks and downtime hide. You get one phone number, one invoice, and zero excuses."
  },
  {
    question: "Do I have to outsource everything to 912?",
    answer: "No. We offer both Fully Managed IT (complete outsourcing) and Co-Managed IT (partnering with your existing internal team). We often act as the 'Tier 3' expert layer that supports internal IT managers with specialized infrastructure and security needs."
  },
  {
    question: "How do you handle multi-site operations across Africa?",
    answer: "We have a proven 'Nairobi-to-Nowhere' methodology. We can design, secure, and monitor infrastructure across borders remotely, with local field support for physical hardware deployments. Our systems are built to handle inconsistent network conditions typical in regional operations."
  },
  {
    question: "Are your security implementations compliant with local laws?",
    answer: "Yes. All our surveillance, data storage, and processing solutions are architected to be fully compliant with the Kenya Data Protection Act and the Office of the Data Protection Commissioner (ODPC) guidelines."
  }
];

export function GlobalFAQ() {
  return (
    <div className="border-t border-slate-100">
      <FAQSection 
        faqs={globalFaqs} 
        title="Common Questions" 
        subtitle="Everything you need to know about the 912 Managed Model"
        theme="light"
      />
    </div>
  );
}
