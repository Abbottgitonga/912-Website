import React, { Suspense, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

// §3 Performance: Lazy load route pages for bundle splitting
const HomePage = React.lazy(() => import('@/pages/HomePage'));
const OneContractPage = React.lazy(() => import('@/pages/OneContractPage'));
const AboutPage = React.lazy(() => import('@/pages/AboutPage'));
const ContactPage = React.lazy(() => import('@/pages/ContactPage'));
const PhysicalSecurityPage = React.lazy(() => import('@/pages/PhysicalSecurityPage'));
const CloudITPage = React.lazy(() => import('@/pages/CloudITPage'));
const ApplicationsSoftwarePage = React.lazy(() => import('@/pages/ApplicationsSoftwarePage'));
const DataIntelligencePage = React.lazy(() => import('@/pages/DataIntelligencePage'));
const AccessControlPage = React.lazy(() => import('@/pages/services/AccessControlPage'));
const BackupRecoveryPage = React.lazy(() => import('@/pages/services/BackupRecoveryPage'));
const CloudPage = React.lazy(() => import('@/pages/services/CloudPage'));
const CCTVPage = React.lazy(() => import('@/pages/services/CCTVPage'));
const PowerBIPage = React.lazy(() => import('@/pages/services/PowerBIPage'));

// §9 Navigation: Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

// Loading fallback for lazy routes
function PageLoader() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center" role="status" aria-label="Loading page">
      <div className="w-12 h-12 border-4 border-brand-blue/20 border-t-brand-blue rounded-full animate-spin" />
    </div>
  );
}

// Placeholder pages for the sitemap
const PlaceholderPage = ({ title }: { title: string }) => (
  <div className="pt-32 pb-20 container mx-auto px-4 min-h-[60vh]">
    <h1 className="text-4xl md:text-6xl font-heading font-bold text-brand-dark mb-8">{title}</h1>
    <p className="text-xl text-slate-500 max-w-2xl">
      This page is currently under development as part of the 912 digital transformation platform. 
      We are building infinite possibilities.
    </p>
  </div>
);

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      {/* §5 Layout: Use min-h-dvh for proper mobile viewport height */}
      <div className="flex flex-col min-h-dvh">
        <Navbar />
        {/* §1 Accessibility: Skip-link target */}
        <div className="flex-grow" id="main-content">
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/about/history" element={<PlaceholderPage title="Our History" />} />
              <Route path="/about/one-contract" element={<OneContractPage />} />
              <Route path="/about/africa" element={<PlaceholderPage title="Geographic Reach" />} />
              <Route path="/expertise" element={<PlaceholderPage title="Expertise" />} />
              <Route path="/people" element={<PlaceholderPage title="Our People" />} />
              <Route path="/news" element={<PlaceholderPage title="Latest News" />} />
              <Route path="/news/podcasts" element={<PlaceholderPage title="Podcast Hub" />} />
              <Route path="/news/videos" element={<PlaceholderPage title="Video Hub" />} />
              <Route path="/careers" element={<PlaceholderPage title="Careers" />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/privacy" element={<PlaceholderPage title="Privacy Policy" />} />
              <Route path="/terms" element={<PlaceholderPage title="Terms of Service" />} />
              <Route path="/cookies" element={<PlaceholderPage title="Cookie Policy" />} />
              <Route path="/sitemap" element={<PlaceholderPage title="Sitemap" />} />
              
              {/* Service Hubs */}
              <Route path="/expertise/physical-&-security-infrastructure" element={<PhysicalSecurityPage />} />
              <Route path="/expertise/cloud-&-core-it" element={<CloudITPage />} />
              <Route path="/expertise/applications-&-software" element={<ApplicationsSoftwarePage />} />
              <Route path="/expertise/data-&-intelligence" element={<DataIntelligencePage />} />

              {/* Specific Service Detail Pages */}
              <Route path="/expertise/access-control" element={<AccessControlPage />} />
              <Route path="/expertise/backup-&-recovery" element={<BackupRecoveryPage />} />
              <Route path="/expertise/cloud" element={<CloudPage />} />
              <Route path="/expertise/cctv-&-surveillance" element={<CCTVPage />} />
              <Route path="/expertise/power-bi-&-reporting" element={<PowerBIPage />} />
              
              {/* 404 */}
              <Route path="*" element={<PlaceholderPage title="404 - Page Not Found" />} />
            </Routes>
          </Suspense>
        </div>
        <Footer />
      </div>
    </Router>
  );
}
