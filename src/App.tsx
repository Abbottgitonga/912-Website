import React, { Suspense, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Link } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { LampCTA } from '@/components/layout/LampCTA';
import { HoverBorderButton } from '@/components/ui/HoverBorderButton';
import { ArrowRight } from 'lucide-react';
import { SchemaManager } from '@/components/seo/SchemaManager';

const globalOrganizationSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "912",
  "image": "https://912.africa/logo.png",
  "@id": "https://912.africa",
  "url": "https://912.africa",
  "telephone": "+254000000000",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "12"
  },
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Technology Hub",
    "addressLocality": "Nairobi",
    "addressRegion": "Nairobi",
    "postalCode": "00100",
    "addressCountry": "KE"
  },
  "sameAs": [
    "https://www.linkedin.com/company/912-tech"
  ]
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

// Blog System
const BlogIndexPage = React.lazy(() => import('@/pages/blog/BlogIndexPage'));

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
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mt-8">
          <Link to="/" className="w-full sm:w-auto">
            <HoverBorderButton variant="blue" className="w-full sm:w-auto justify-center">
              Back to Homepage
            </HoverBorderButton>
          </Link>
          <Link to="/services" className="w-full sm:w-auto">
            <HoverBorderButton variant="orange" className="w-full sm:w-auto justify-center" theme="light">
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

              {/* Services hub */}
              <Route path="/services" element={<ServicesHubPage />} />
              <Route path="/services/physical-security-infrastructure" element={<PhysicalSecurityPage />} />
              <Route path="/services/cloud-core-it" element={<CloudITPage />} />
              <Route path="/services/applications-software" element={<ApplicationsSoftwarePage />} />
              <Route path="/services/data-intelligence" element={<DataIntelligencePage />} />

              {/* Legacy /expertise routes — same pages */}
              <Route path="/expertise" element={<ServicesHubPage />} />
              <Route path="/expertise/physical-&-security-infrastructure" element={<PhysicalSecurityPage />} />
              <Route path="/expertise/cloud-&-core-it" element={<CloudITPage />} />
              <Route path="/expertise/applications-&-software" element={<ApplicationsSoftwarePage />} />
              <Route path="/expertise/data-&-intelligence" element={<DataIntelligencePage />} />

              {/* Sub-service detail pages */}
              <Route path="/expertise/access-control" element={<AccessControlPage />} />
              <Route path="/expertise/backup-&-recovery" element={<BackupRecoveryPage />} />
              <Route path="/expertise/cloud" element={<CloudPage />} />
              <Route path="/expertise/cctv-&-surveillance" element={<CCTVPage />} />
              <Route path="/expertise/power-bi-&-reporting" element={<PowerBIPage />} />
              <Route path="/expertise/web-applications" element={<WebApplicationsPage />} />
              <Route path="/expertise/mobile-applications" element={<MobileApplicationsPage />} />
              <Route path="/expertise/saas-platforms" element={<SaaSPlatformsPage />} />
              <Route path="/expertise/erp-systems" element={<ERPSystemsPage />} />
              <Route path="/expertise/cybersecurity" element={<CybersecurityPage />} />
              <Route path="/expertise/ip-telephony" element={<IPTelephonyPage />} />
              <Route path="/expertise/electric-fence" element={<ElectricFencePage />} />
              <Route path="/expertise/structured-cabling" element={<StructuredCablingPage />} />
              <Route path="/expertise/data-engineering" element={<DataEngineeringPage />} />

              {/* Case studies */}
              <Route path="/results" element={<ResultsPage />} />
              <Route path="/results/senegal-factory-rescue" element={<SenegalFactoryRescuePage />} />
              <Route path="/results/sap-hana-migration" element={<SAPHanaMigrationPage />} />
              <Route path="/results/internal-fraud-discovery" element={<InternalFraudPage />} />
              <Route path="/results/fmcg-automation" element={<FMCGAutomationPage />} />
              <Route path="/results/erp-security" element={<ERPSecurityPage />} />

              {/* Competitor alternatives */}
              <Route path="/compare/liquid-intelligent-vs-912" element={<LiquidIntelligentVs912Page />} />

              {/* Utility pages */}
              <Route path="/privacy" element={<PlaceholderPage title="Privacy Policy" />} />
              <Route path="/terms" element={<PlaceholderPage title="Terms of Service" />} />
              <Route path="/sitemap" element={<PlaceholderPage title="Sitemap" />} />

              {/* 404 */}
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Suspense>
        </div>
        <LampCTA />
        <Footer />
      </div>
    </Router>
  );
}
