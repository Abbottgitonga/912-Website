import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Footer() {
  return (
    <footer className="bg-brand-dark text-white pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-8">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="w-12 h-12 bg-brand-orange rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-2xl">912</span>
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-bold text-2xl leading-none text-white">NINE ONE TWO</span>
                <span className="text-xs uppercase tracking-[0.2em] font-medium opacity-70">Infinite Possibilities</span>
              </div>
            </Link>
            <p className="text-white/60 max-w-sm text-lg leading-relaxed">
              "Walk in with a problem. Walk out with a complete solution." 
              The single partner that powers every technology need across Africa.
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Instagram, Linkedin, Youtube].map((Icon, i) => (
                <a 
                  key={i} 
                  href="#" 
                  className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-brand-orange hover:border-brand-orange transition-all duration-300"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6">Firm</h4>
            <ul className="space-y-4 text-white/60">
              <li><Link to="/" className="hover:text-brand-orange transition-colors">Home</Link></li>
              <li><Link to="/people" className="hover:text-brand-orange transition-colors">People</Link></li>
              <li><Link to="/careers" className="hover:text-brand-orange transition-colors">Careers</Link></li>
              <li><Link to="/contact" className="hover:text-brand-orange transition-colors">Contact</Link></li>
              <li><Link to="/about/one-contract" className="text-brand-orange font-medium">One Contract Model</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold text-lg mb-6">Experience</h4>
            <ul className="space-y-4 text-white/60">
              <li><Link to="/expertise" className="hover:text-brand-orange transition-colors">Sectors</Link></li>
              <li><Link to="/expertise" className="hover:text-brand-orange transition-colors">Services</Link></li>
              <li><Link to="/about/africa" className="hover:text-brand-orange transition-colors">Geographic Reach</Link></li>
              <li><Link to="/news" className="hover:text-brand-orange transition-colors">News</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-6">
            <h4 className="font-heading font-bold text-lg mb-6">Subscribe</h4>
            <p className="text-white/60 text-sm">
              Get insight into the most recent legal and technological developments across Africa.
            </p>
            <div className="flex flex-col gap-3">
              <Button className="bg-brand-orange hover:bg-brand-orange/90 text-white rounded-none w-full py-6">
                Subscribe to News
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-10 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-white/40">
          <p>© 2026 Nine One Two Holdings. All rights reserved.</p>
          <nav>
            <ul className="flex flex-wrap justify-center gap-6">
              <li><Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
              <li><Link to="/cookies" className="hover:text-white transition-colors">Cookie Policy</Link></li>
              <li><Link to="/sitemap" className="hover:text-white transition-colors">Sitemap</Link></li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}
