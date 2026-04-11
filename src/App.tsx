import React, { Suspense, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Link } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { GlobalFAQ } from '@/components/layout/GlobalFAQ';
import { LampCTA } from '@/components/layout/LampCTA';
import { HoverBorderButton } from '@/components/ui/HoverBorderButton';
import { ArrowRight } from 'lucide-react';
import { SchemaManager } from '@/components/seo/SchemaManager';

const globalOrganizationSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Nine One Two (912)",
  "alternateName": "912",
  "description": "Pan-African Managed IT Services Provider and Systems Integrator. End-to-end enterprise technology management — physical security, cloud & IT, custom software, and data intelligence — under a single One Contract model across 10 African countries.",
  "image": "https://nineonetwo.co.ke/images/logo-912.png",
  "@id": "https://nineonetwo.co.ke",
  "url": "https://nineonetwo.co.ke",
  "telephone": "+254111047120",
  "foundingDate": "2013",
  "founder": {
    "@type": "Person",
    "name": "Njuguna Waitara",
    "jobTitle": "Founder & CEO"
  },
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Nairobi",
    "addressRegion": "Nairobi",
    "postalCode": "00100",
    "addressCountry": "KE"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": -1.286389,
    "longitude": 36.817223
  },
  "areaServed": [
    { "@type": "Country", "name": "Kenya" },
    { "@type": "Country", "name": "Senegal" },
    { "@type": "Country", "name": "Rwanda" },
    { "@type": "Country", "name": "Ghana" },
    { "@type": "Country", "name": "DR Congo" },
    { "@type": "Country", "name": "Angola" },
    { "@type": "Country", "name": "Burkina Faso" },
    { "@type": "Country", "name": "Benin" },
    { "@type": "Country", "name": "Mali" },
    { "@type": "Country", "name": "Burundi" }
  ],
  "knowsAbout": [
    "Managed IT Services",
    "CCTV Installation",
    "Access Control Systems",
    "Cloud Migration",
    "Cybersecurity",
    "Custom Software Development",
    "ERP Systems",
    "Power BI Consulting",
    "Data Intelligence",
    "IT Infrastructure Africa"
  ],
  "sameAs": [
    "https://www.linkedin.com/company/912-tech"
  ],
  "priceRange": "$$$$"
};

// Lazy load route pages for bundle splitting
const HomePage = React.lazy(() => import('@/pages/HomePage'));
const OneContractPage = React.lazy(() => import('@/pages/OneContractPage'));
const AboutPage = React.lazy(() => import('@/pages/AboutPage'));
const ContactPage = React.lazy(() => import('@/pages/ContactPage'));
const PhysicalSecurityPage = React.lazy(() => import('@/pages/PhysicalSecurityPage'));
const CloudITPage = React.lazy(() => import('@/pages/CloudITPage'));
const ApplicationsSoftwarePage = React.lazy(() => import('@/pages/ApplicationsSoftwarePage'));
const DataIntelligencePage = React.lazy(() => import('@/pages/DataIntelligencePage'));
const ResultsPage = React.lazy(() => import('@/pages/ResultsPage'));
const ServicesHubPage = React.lazy(() => import('@/pages/ServicesHubPage'));
const ResourcesPage = React.lazy(() => import('@/pages/ResourcesPage'));
const TeamPage = React.lazy(() => import('@/pages/TeamPage'));
const IndustryPage = React.lazy(() => import('@/pages/IndustryPage'));
const SitemapPage = React.lazy(() => import('@/pages/SitemapPage'));
const PrivacyPolicyPage = React.lazy(() => import('@/pages/PrivacyPolicyPage'));
const TermsConditionsPage = React.lazy(() => import('@/pages/TermsConditionsPage'));
const FAQPage = React.lazy(() => import('@/pages/FAQPage'));

// Blog System
const BlogIndexPage = React.lazy(() => import('@/pages/blog/BlogIndexPage'));
const BlogPostPage = React.lazy(() => import('@/pages/blog/BlogPostPage'));

// Case study pages
const SenegalFactoryRescuePage = React.lazy(() => import('@/pages/results/SenegalFactoryRescuePage'));
const SAPHanaMigrationPage = React.lazy(() => import('@/pages/results/SAPHanaMigrationPage'));
const InternalFraudPage = React.lazy(() => import('@/pages/results/InternalFraudPage'));
const FMCGAutomationPage = React.lazy(() => import('@/pages/results/FMCGAutomationPage'));
const ERPSecurityPage = React.lazy(() => import('@/pages/results/ERPSecurityPage'));

// Legacy sub-service pages
const AccessControlPage = React.lazy(() => import('@/pages/services/AccessControlPage'));
const BackupRecoveryPage = React.lazy(() => import('@/pages/services/BackupRecoveryPage'));
const CloudPage = React.lazy(() => import('@/pages/services/CloudPage'));
const CCTVPage = React.lazy(() => import('@/pages/services/CCTVPage'));
const PowerBIPage = React.lazy(() => import('@/pages/services/PowerBIPage'));
const WebApplicationsPage = React.lazy(() => import('@/pages/services/WebApplicationsPage'));
const MobileApplicationsPage = React.lazy(() => import('@/pages/services/MobileApplicationsPage'));
const SaaSPlatformsPage = React.lazy(() => import('@/pages/services/SaaSPlatformsPage'));
const ERPSystemsPage = React.lazy(() => import('@/pages/services/ERPSystemsPage'));
const CybersecurityPage = React.lazy(() => import('@/pages/services/CybersecurityPage'));
const IPTelephonyPage = React.lazy(() => import('@/pages/services/IPTelephonyPage'));
const ElectricFencePage = React.lazy(() => import('@/pages/services/ElectricFencePage'));
const StructuredCablingPage = React.lazy(() => import('@/pages/services/StructuredCablingPage'));
const DataEngineeringPage = React.lazy(() => import('@/pages/services/DataEngineeringPage'));

// Competitor alternative pages
const LiquidIntelligentVs912Page = React.lazy(() => import('@/pages/competitors/LiquidIntelligentVs912Page'));

// Programmatic SEO Location Pages
const LocationPage = React.lazy(() => import('@/pages/locations/LocationPage'));

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
    // Move focus to main content for screen reader users
    const mainEl = document.getElementById('main-content');
    if (mainEl) {
      mainEl.focus({ preventScroll: true });
    }
  }, [pathname]);
  return null;
}

// Loading fallback
function PageLoader() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center" role="status" aria-label="Loading page">
      <div className="w-12 h-12 border-4 border-brand-blue/20 border-t-brand-blue rounded-full animate-spin" />
    </div>
  );
}

// Placeholder for pages not yet built
const PlaceholderPage = ({ title }: { title: string }) => (
  <div className="pt-32 pb-20 container mx-auto px-4 min-h-[60vh]">
    <h1 className="text-4xl md:text-6xl font-heading font-bold text-brand-dark mb-8">{title}</h1>
    <p className="text-xl text-slate-500 max-w-2xl">
      This page is currently under development.
    </p>
  </div>
);

// 404 page
function NotFoundPage() {
  return (
    <main className="flex min-h-[80vh] flex-col items-center justify-center p-4 pt-32 pb-20">
      <div className="container mx-auto flex max-w-4xl flex-col items-center space-y-8 text-center">
        {/* Large 404 Display */}
        <div className="relative">
          <h1 className="select-none font-heading text-[120px] sm:text-[180px] md:text-[240px] font-black leading-none tracking-tighter text-transparent"
            style={{
              WebkitTextStroke: '2px rgba(27, 73, 194, 0.1)',
              backgroundImage: 'linear-gradient(to bottom, transparent, rgba(27, 73, 194, 0.05))',
            }}>
            404
          </h1>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-brand-orange uppercase tracking-[0.4em] text-sm md:text-base font-black mb-4">
              Page Not Found
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-brand-dark mb-4">
              We couldn't find that page.
            </h2>
          </div>
        </div>

        {/* Description */}
        <p className="text-lg md:text-xl text-slate-500 max-w-2xl leading-relaxed">
          The page you're looking for doesn't exist or has been moved.
          Let's get you back on track to finding the right solution.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto mt-8 justify-center">
          <Link to="/" className="w-full sm:w-auto">
            <HoverBorderButton variant="blue" className="w-full sm:w-auto justify-center px-10 py-4 text-lg font-bold">
              Back to Homepage
            </HoverBorderButton>
          </Link>
          <Link to="/services" className="w-full sm:w-auto">
            <HoverBorderButton variant="orange" className="w-full sm:w-auto justify-center px-10 py-4 text-lg font-bold" theme="light">
              Explore Our Services
            </HoverBorderButton>
          </Link>
        </div>
      </div>
    </main>
  );
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <SchemaManager schema={globalOrganizationSchema} id="organization-schema" />
      <div className="flex flex-col min-h-dvh">
        <Navbar />
        <div className="flex-grow" id="main-content" role="main" tabIndex={-1} style={{ outline: 'none' }}>
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/about/one-contract" element={<OneContractPage />} />
              <Route path="/about/team" element={<TeamPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/resources" element={<ResourcesPage />} />
              <Route path="/blog" element={<BlogIndexPage />} />
              <Route path="/blog/:id" element={<BlogPostPage />} />

              {/* Services hub */}
              <Route path="/services" element={<ServicesHubPage />} />
              <Route path="/services/physical-security" element={<PhysicalSecurityPage />} />
              <Route path="/services/cloud-it" element={<CloudITPage />} />
              <Route path="/services/applications-software" element={<ApplicationsSoftwarePage />} />
              <Route path="/services/data-intelligence" element={<DataIntelligencePage />} />

              {/* Legacy /expertise routes — same pages */}
              <Route path="/expertise" element={<ServicesHubPage />} />
              <Route path="/expertise/physical-&-security-infrastructure" element={<PhysicalSecurityPage />} />
              <Route path="/expertise/cloud-&-core-it" element={<CloudITPage />} />
              <Route path="/expertise/applications-&-software" element={<ApplicationsSoftwarePage />} />
              <Route path="/expertise/data-&-intelligence" element={<DataIntelligencePage />} />

              {/* Sub-service detail pages */}
              <Route path="/services/access-control" element={<AccessControlPage />} />
              <Route path="/services/backup-recovery" element={<BackupRecoveryPage />} />
              <Route path="/services/cloud" element={<CloudPage />} />
              <Route path="/services/cctv-surveillance" element={<CCTVPage />} />
              <Route path="/services/power-bi-reporting" element={<PowerBIPage />} />
              <Route path="/services/web-applications" element={<WebApplicationsPage />} />
              <Route path="/services/mobile-applications" element={<MobileApplicationsPage />} />
              <Route path="/services/saas-platforms" element={<SaaSPlatformsPage />} />
              <Route path="/services/erp-systems" element={<ERPSystemsPage />} />
              <Route path="/services/cybersecurity" element={<CybersecurityPage />} />
              <Route path="/services/ip-telephony" element={<IPTelephonyPage />} />
              <Route path="/services/electric-fence" element={<ElectricFencePage />} />
              <Route path="/services/structured-cabling" element={<StructuredCablingPage />} />
              <Route path="/services/data-engineering" element={<DataEngineeringPage />} />

              {/* Case studies */}
              <Route path="/results" element={<ResultsPage />} />
              <Route path="/results/senegal-factory-rescue" element={<SenegalFactoryRescuePage />} />
              <Route path="/results/sap-hana-migration" element={<SAPHanaMigrationPage />} />
              <Route path="/results/internal-fraud-discovery" element={<InternalFraudPage />} />
              <Route path="/results/fmcg-automation" element={<FMCGAutomationPage />} />
              <Route path="/results/erp-security" element={<ERPSecurityPage />} />

              {/* Competitor alternatives */}
              <Route path="/compare/liquid-intelligent-vs-912" element={<LiquidIntelligentVs912Page />} />

              <Route path="/industries/:slug" element={<IndustryPage />} />
              
              {/* Regional Location Pages (Programmatic SEO) */}
              <Route path="/locations/:slug" element={<LocationPage />} />

              {/* Utility pages */}
              <Route path="/privacy" element={<PrivacyPolicyPage />} />
              <Route path="/terms" element={<TermsConditionsPage />} />
              <Route path="/sitemap" element={<SitemapPage />} />
              <Route path="/faq" element={<FAQPage />} />

              {/* 404 */}
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Suspense>
        </div>
        <GlobalFAQ />
        <LampCTA />
        <Footer />
      </div>
    </Router>
  );
}
