import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { FAQSection } from '@/components/ui/FAQSection';
import { HoverBorderButton } from '@/components/ui/HoverBorderButton';
import { HelpCircle, Shield, Zap, Tool, Users, MessageSquare } from 'lucide-react';
import { SEOHead } from '@/components/seo/SEOHead';
import { FAQSchema } from '@/components/seo/FAQSchema';

const generalFaqs = [
  {
    question: "What is the 'One Contract' model?",
    answer: "The 'One Contract' model is our signature approach to enterprise IT. Instead of managing dozens of fragmented vendors for security, cloud, software, and data, you have a single partner and a single predictable monthly cost for your entire technology stack. This eliminates finger-pointing and ensures deep architectural integration."
  },
  {
    question: "Which countries across Africa do you serve?",
    answer: "We currently have operations and active deployments in 10 African countries, including Kenya, Senegal, Nigeria, and Ethiopia. We specialize in cross-border infrastructure that remains consistent regardless of the region."
  },
  {
    question: "How does 912 handle data privacy and ODPC compliance?",
    answer: "Data residency is critical. We architect our solutions to comply with local data protection laws (like Kenya's ODPC). We ensure that sensitive patient, financial, or corporate data stays where it's legally required to be, without sacrificing performance."
  }
];

const technicalFaqs = [
  {
    question: "Do you provide 24/7 support?",
    answer: "Yes. Our Service Level Agreements (SLAs) include proactive monitoring and around-the-clock support. Our engineers are notified of anomalies before they become critical failures."
  },
  {
    question: "Can you integrate with existing legacy systems?",
    answer: "We specialize in 'Rescue and Design.' Many of our projects begin with auditing and integrating legacy ERPs, databases, and physical security hardware into a modern, unified management layer."
  }
];

const securityFaqs = [
  { question: "Are your security systems ODPC compliant?", answer: "Yes. All our surveillance and access control solutions are designed to be fully compliant with the Office of the Data Protection Commissioner (ODPC) regarding data residency and privacy." },
  { question: "Do you offer remote monitoring?", answer: "Yes, our surveillance architectures enable secure, remote monitoring 24/7. Your security team can view live footage and receive instant alerts on mobile devices." }
];

const devFaqs = [
  { question: "Who owns the code after the project?", answer: "You do. Upon project completion and final payment, we hand over full intellectual property rights, the complete source code, and comprehensive documentation." },
  { question: "How long does a typical software project take?", answer: "A typical Minimum Viable Product (MVP) takes 3 to 4 months. More complex enterprise applications may take 6 to 9 months for initial rollout." }
];

const categories = [
  { name: "General", icon: HelpCircle, count: 5 },
  { name: "Security", icon: Shield, count: 4 },
  { name: "Development", icon: Zap, count: 3 },
  { name: "Process", icon: Users, count: 4 },
];

export default function FAQPage() {
  const allFaqs = [...generalFaqs, ...securityFaqs, ...developmentFaqs, ...processFaqs];
  return (
    <main className="pt-32 pb-20 bg-white">
      <SEOHead
        title="Frequently Asked Questions — Managed IT, Security & Cloud Kenya | 912"
        description="Answers to common questions about 912's One Contract Model, managed IT services, physical security, cloud migration, cybersecurity, and custom software development in Kenya and Africa."
      />
      <FAQSchema faqs={allFaqs} id="faq-page-schema" />
      {/* Hero */}
      <section className="container mx-auto px-4 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-brand-orange uppercase tracking-[.4em] text-xs font-black mb-4 block">Help Center</span>
          <h1 className="text-5xl md:text-7xl font-heading font-black tracking-tighter leading-none mb-8 uppercase text-brand-dark">
            Common <span className="text-brand-blue italic">Inquiries</span>
          </h1>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto font-medium">
            Everything you need to know about the 912 approach to enterprise technology and regional infrastructure.
          </p>
        </motion.div>
      </section>

      {/* Categories */}
      <section className="container mx-auto px-4 pb-24 border-b border-slate-100">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="p-8 border border-slate-100 rounded-3xl hover:border-brand-blue hover:shadow-xl hover:shadow-brand-blue/5 transition-all group cursor-pointer"
            >
              <cat.icon className="w-8 h-8 text-slate-300 group-hover:text-brand-blue transition-colors mb-4" />
              <h3 className="font-heading font-bold text-lg text-brand-dark">{cat.name}</h3>
              <p className="text-sm text-slate-400">{cat.count} Questions</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Main FAQ Sections */}
      <FAQSection 
        faqs={generalFaqs} 
        title="General Framework" 
        subtitle="Foundational questions about the 912 model."
        theme="light"
      />
      
      <div className="bg-slate-50">
        <FAQSection 
          faqs={securityFaqs} 
          title="Physical Security" 
          subtitle="Surveillance, Access Control, and Compliance."
          theme="light"
        />
      </div>

      <FAQSection 
        faqs={devFaqs} 
        title="Software & Development" 
        subtitle="Timelines, Ownership, and Technical Delivery."
        theme="light"
      />

      <div className="bg-slate-50">
        <FAQSection 
          faqs={technicalFaqs} 
          title="Core IT & Support" 
          subtitle="Engineering standards and maintenance frameworks."
          theme="light"
        />
      </div>

      {/* CTA */}
      <section className="container mx-auto px-4 py-24">
        <div className="bg-brand-dark rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-orange/10 rounded-full blur-[100px]" />
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-8">
              Still have <span className="text-brand-blue italic">questions?</span>
            </h2>
            <p className="text-white/60 text-lg mb-12 max-w-xl mx-auto">
              Our specialists are ready to discuss your specific regional requirements or technical challenges.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link to="/contact">
                <HoverBorderButton variant="orange" className="px-12 py-6 text-lg font-bold">
                  Speak to an Engineer
                </HoverBorderButton>
              </Link>
              <Link to="/contact">
                <HoverBorderButton variant="blue" className="px-12 py-6 text-lg font-bold" theme="dark">
                  Book Discovery Call
                </HoverBorderButton>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
