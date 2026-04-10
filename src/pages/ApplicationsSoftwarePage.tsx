import React from 'react';
import { ServiceLayout } from '@/components/layout/ServiceLayout';
import { ProjectShowcase } from '@/components/ui/ProjectShowcase';
import { FAQSection } from '@/components/ui/FAQSection';
import { SplineSceneAlternative } from '@/components/ui/SplineScene';

const appFaqs = [
  { question: "How much does custom software cost?", answer: "Custom software costs depend entirely on the scope of the project, features required, platforms (web vs. mobile), and integration needs. We provide a transparent scope of work and a fixed-price contract after our initial discovery phase." },
  { question: "How long does app development take?", answer: "A typical Minimum Viable Product (MVP) takes 3 to 4 months. More complex enterprise applications, such as a full ERP system or multi-platform SaaS, may take 6 to 9 months for initial rollout." },
  { question: "Who owns the code after the project is done?", answer: "You do. Upon project completion and final payment, we hand over full intellectual property rights, the complete source code, and comprehensive documentation to your organization." },
  { question: "Do you provide maintenance and support?", answer: "Yes. Under our One Contract model, we provide continuous monitoring, security updates, feature enhancements, and active support to ensure your application scales with your business." }
];

const appSolutions = [
  {
    id: "web-applications",
    title: "Web Applications",
    description: "Custom-built web platforms designed for performance, security, and exceptional user experience.",
    href: "/expertise/web-applications",
    category: "Development",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "mobile-applications",
    title: "Mobile Applications",
    description: "Native and cross-platform mobile apps.",
    href: "/expertise/mobile-applications",
    category: "Development",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "saas-platforms",
    title: "SaaS Platforms",
    description: "End-to-end development of software products.",
    href: "/expertise/saas-platforms",
    category: "Product",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "erp-systems",
    title: "ERP Systems",
    description: "Integrated business management software.",
    href: "/expertise/erp-systems",
    category: "Enterprise",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800"
  }
];

export default function ApplicationsSoftwarePage() {
  return (
    <ServiceLayout
      hero={{
        title: "Applications & Software",
        subtitle: "Custom Development | SaaS Architecture | Enterprise Integration",
        description: "We don't just write code; we build digital products that solve real business problems and drive growth across Africa.",
        animation: <SplineSceneAlternative />,
        breadcrumbs: [
          { label: "Home", href: "/" },
          { label: "Expertise", href: "/expertise" },
          { label: "Applications & Software" }
        ]
      }}
      capabilities={{
        title: "Software Capabilities",
        items: [
          {
            title: "Web Platforms",
            description: "High-performance business applications.",
            points: [
              "Custom portal development",
              "Progressive Web Apps (PWA)",
              "API integration"
            ]
          },
          {
            title: "Mobile Apps",
            description: "Connecting you with customers everywhere.",
            points: [
              "iOS & Android development",
              "Cross-platform architecture",
              "Mobile UI/UX design"
            ]
          },
          {
            title: "Enterprise Systems",
            description: "Unifying operations and data.",
            points: [
              "Custom ERP solutions",
              "Legacy system modernization",
              "Process automation"
            ]
          }
        ]
      }}
      challenges={{
        title: "Digital Challenges",
        items: [
          "Off-the-shelf software failing to match unique business logic.",
          "Legacy systems slowing down operations and creating data silos.",
          "Poor user experience driving customers away.",
          "Difficulty integrating new software with existing legacy infrastructure."
        ]
      }}
      process={{
        title: "Our Development Process",
        description: "A methodical approach to shipping successful products.",
        steps: [
          {
            title: "Discovery & UX",
            description: "User research, wireframing, and defining the exact scope of requirements."
          },
          {
            title: "Agile Development",
            description: "Iterative sprints with regular demos and continuous client feedback."
          },
          {
            title: "Launch & Iterate",
            description: "Rigorous QA testing, deployment, and performance monitoring."
          }
        ]
      }}
      advantages={{
        title: "Why 912 Software?",
        items: [
          {
            title: "Business-First Approach",
            description: "We focus on ROI, not just lines of code. Every feature must serve a purpose."
          },
          {
            title: "Modern Tech Stack",
            description: "We use the latest frameworks like React and Node.js for scalability."
          }
        ]
      }}
      outcomes={{
        title: "Software Outcomes",
        subtitle: "Digital Excellence Delivered",
        stats: [
          { value: "40%", label: "Faster Workflow" },
          { value: "99%", label: "Bug-Free Releases" },
          { value: "100%", label: "Data Ownership" }
        ]
      }}
    >
      <ProjectShowcase 
        items={appSolutions} 
        title="Explore Specific Solutions"
        theme="light"
      />
      <FAQSection 
        faqs={appFaqs} 
        title="Frequently Asked Questions" 
        subtitle="Common questions about our Software Development services"
        theme="light"
      />
    </ServiceLayout>
  );
}
