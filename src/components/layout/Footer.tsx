import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { HoverBorderButton } from '@/components/ui/HoverBorderButton';
import { motion } from 'motion/react';

export function Footer() {
  return (
    <footer className="bg-brand-dark text-white pt-20 pb-10 relative overflow-hidden">
      {/* Ambient Animated Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <motion.div
          animate={{ x: [0, 150, 0], y: [0, 50, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-40 -left-40 w-96 h-96 bg-brand-orange rounded-full mix-blend-screen filter blur-[120px] opacity-20"
        />
        <motion.div
          animate={{ x: [0, -150, 0], y: [0, -100, 0], scale: [1, 1.5, 1] }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-40 -right-40 w-[600px] h-[600px] bg-brand-blue rounded-full mix-blend-screen filter blur-[150px] opacity-10"
        />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2 group" aria-label="912 Home">
              <div className="w-12 h-12 bg-brand-orange rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-2xl">912</span>
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-bold text-2xl leading-none text-white">NINE ONE TWO</span>
                <span className="text-[9px] uppercase tracking-[0.2em] font-medium opacity-70">One Contract. Every Technology Need.</span>
              </div>
            </Link>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs">
              The IT partner that exists because the multi-vendor model is broken. Founded in Nairobi, 2013.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.linkedin.com/in/njugunawaitara"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Njuguna Waitara on LinkedIn"
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-brand-orange hover:border-brand-orange transition-all duration-300"
              >
                <Linkedin className="w-4 h-4" aria-hidden="true" />
              </a>
              <a
                href="https://www.linkedin.com/company/nineonetwo"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Nine One Two on LinkedIn"
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-brand-orange hover:border-brand-orange transition-all duration-300"
              >
                <Linkedin className="w-4 h-4" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="font-heading font-bold text-sm uppercase tracking-wider mb-6 text-white/80">Services</h4>
            <ul className="space-y-1 text-white/50 text-sm">
              <li><Link to="/services/physical-security-infrastructure" className="flex items-center min-h-[44px] hover:text-brand-orange transition-colors">Physical & Security Infrastructure</Link></li>
              <li><Link to="/services/cloud-core-it" className="flex items-center min-h-[44px] hover:text-brand-orange transition-colors">Cloud & Core IT</Link></li>
              <li><Link to="/services/applications-software" className="flex items-center min-h-[44px] hover:text-brand-orange transition-colors">Applications & Software</Link></li>
              <li><Link to="/services/data-intelligence" className="flex items-center min-h-[44px] hover:text-brand-orange transition-colors">Data & Intelligence</Link></li>
              <li><Link to="/services" className="flex items-center min-h-[44px] hover:text-brand-orange transition-colors font-medium text-white/70">All Services</Link></li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="font-heading font-bold text-sm uppercase tracking-wider mb-6 text-white/80">Company</h4>
            <ul className="space-y-1 text-white/50 text-sm">
              <li><Link to="/about" className="flex items-center min-h-[44px] hover:text-brand-orange transition-colors">Our Story</Link></li>
              <li><Link to="/about/one-contract" className="flex items-center min-h-[44px] text-brand-orange font-medium hover:text-brand-orange/80 transition-colors">The One Contract Model</Link></li>
              <li><Link to="/about/team" className="flex items-center min-h-[44px] hover:text-brand-orange transition-colors">Our Team</Link></li>
              <li><Link to="/results" className="flex items-center min-h-[44px] hover:text-brand-orange transition-colors">Case Studies</Link></li>
              <li><Link to="/resources" className="flex items-center min-h-[44px] hover:text-brand-orange transition-colors">Resources</Link></li>
              <li><Link to="/contact" className="flex items-center min-h-[44px] hover:text-brand-orange transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Get In Touch Column */}
          <div className="space-y-6">
            <h4 className="font-heading font-bold text-sm uppercase tracking-wider mb-6 text-white/80">Get in touch</h4>
            <div className="space-y-2 text-sm text-white/50">
              <div className="flex items-start gap-3 min-h-[44px]">
                <MapPin className="w-4 h-4 mt-0.5 text-brand-orange flex-shrink-0" aria-hidden="true" />
                <div>
                  <p>The Chancery, 8th Floor</p>
                  <p>Valley Road, Nairobi, Kenya</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-brand-orange flex-shrink-0" aria-hidden="true" />
                <a href="tel:+254722974970" className="flex items-center min-h-[44px] hover:text-white transition-colors" aria-label="Call 912 via +254 722 974 970">+254 722 974 970</a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-brand-orange flex-shrink-0" aria-hidden="true" />
                <a href="mailto:info@nineonetwo.co.ke" className="flex items-center min-h-[44px] hover:text-white transition-colors" aria-label="Email Nine One Two at info@nineonetwo.co.ke">info@nineonetwo.co.ke</a>
              </div>
            </div>
            <Link to="/contact" className="w-full block">
              <HoverBorderButton variant="orange" containerClassName="w-full border-white/20">
                Book a Discovery Call
              </HoverBorderButton>
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/30">
          <p>&copy; 2026 Nine One Two Limited. All rights reserved.</p>
          <nav aria-label="Legal links">
            <ul className="flex flex-wrap justify-center gap-2 md:gap-6">
              <li><Link to="/privacy" className="flex items-center px-2 min-h-[44px] hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="flex items-center px-2 min-h-[44px] hover:text-white transition-colors">Terms of Service</Link></li>
              <li><Link to="/sitemap" className="flex items-center px-2 min-h-[44px] hover:text-white transition-colors">Sitemap</Link></li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}
