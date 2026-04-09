import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import HomePage from '@/pages/HomePage';
import OneContractPage from '@/pages/OneContractPage';
import AboutPage from '@/pages/AboutPage';
import ContactPage from '@/pages/ContactPage';
import PhysicalSecurityPage from '@/pages/PhysicalSecurityPage';
import CloudITPage from '@/pages/CloudITPage';
import ApplicationsSoftwarePage from '@/pages/ApplicationsSoftwarePage';
import DataIntelligencePage from '@/pages/DataIntelligencePage';
import AccessControlPage from '@/pages/services/AccessControlPage';
import BackupRecoveryPage from '@/pages/services/BackupRecoveryPage';
import CloudPage from '@/pages/services/CloudPage';
import CCTVPage from '@/pages/services/CCTVPage';
import PowerBIPage from '@/pages/services/PowerBIPage';

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
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-grow">
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
        </div>
        <Footer />
      </div>
    </Router>
  );
}
