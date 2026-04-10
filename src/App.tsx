import React, { Suspense, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Link } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { LampCTA } from '@/components/layout/LampCTA';
import { HoverBorderButton } from '@/components/ui/HoverBorderButton';
import { ArrowRight } from 'lucide-react';

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

// 404 page per copy deck
function NotFoundPage() {
  return (
    <main className="pt-32 pb-20 min-h-[60vh]">
      <div className="container mx-auto px-4">
        <span className="text-brand-orange uppercase tracking-[0.4em] text-xs font-black mb-4 block">404</span>
        <h1 className="text-5xl md:text-7xl font-heading font-bold text-brand-dark mb-6">
          That page doesn't exist.
        </h1>
        <p className="text-xl text-slate-500 max-w-2xl mb-12">
          It might have moved, it might have been renamed, or it might never have existed. Here are a few places that probably do.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mb-16">
          {[
            { title: 'The One Contract Model', desc: 'How 912 is structured differently from traditional IT vendors', href: '/about/one-contract' },
            { title: 'Our Services', desc: 'Four pillars, fourteen services, one contract', href: '/services' },
            { title: 'Case Studies', desc: 'Real outcomes with real numbers', href: '/results' },
          ].map((item) => (
            <Link key={item.href} to={item.href} className="p-8 bg-slate-50 border border-slate-200 hover:border-brand-blue transition-colors group">
              <h3 className="text-lg font-heading font-bold text-brand-dark mb-2 group-hover:text-brand-blue transition-colors">{item.title}</h3>
              <p className="text-sm text-slate-500">{item.desc}</p>
              <ArrowRight className="w-4 h-4 text-brand-orange mt-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          ))}
        </div>
        <div>
          <h2 className="text-2xl font-heading font-bold text-brand-dark mb-4">Or just talk to us directly.</h2>
          <Link to="/contact">
            <HoverBorderButton variant="orange" containerClassName="border-slate-300">
              <span className="!text-brand-dark">Book a Discovery Call</span>
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

              {/* Case studies */}
              <Route path="/results" element={<ResultsPage />} />
              <Route path="/results/senegal-factory-rescue" element={<SenegalFactoryRescuePage />} />
              <Route path="/results/sap-hana-migration" element={<SAPHanaMigrationPage />} />
              <Route path="/results/internal-fraud-discovery" element={<InternalFraudPage />} />
              <Route path="/results/fmcg-automation" element={<FMCGAutomationPage />} />
              <Route path="/results/erp-security" element={<ERPSecurityPage />} />

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
