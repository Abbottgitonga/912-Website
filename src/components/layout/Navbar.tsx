import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ChevronDown, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { HoverBorderButton } from '@/components/ui/HoverBorderButton';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const serviceItems = [
  { title: "Physical & Security Infrastructure", href: "/services/physical-security" },
  { title: "Cloud & Core IT", href: "/services/cloud-it" },
  { title: "Applications & Software", href: "/services/applications-software" },
  { title: "Data & Intelligence", href: "/services/data-intelligence" },
];

const aboutItems = [
  { title: "Our Story", href: "/about" },
  { title: "The One Contract Model", href: "/about/one-contract", highlight: true },
  { title: "Our Team", href: "/about/team" },
  { title: "Get in Touch", href: "/contact" },
];

const industriesItems = [
  { title: "Financial Services", href: "/industries/financial-services" },
  { title: "Manufacturing & Logistics", href: "/industries/manufacturing-logistics" },
  { title: "Healthcare", href: "/industries/healthcare" },
  { title: "Retail & E-commerce", href: "/industries/retail-ecommerce" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <header
      className={cn(
        "fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 w-[98%] 2xl:w-[95%] max-w-screen-2xl",
        isScrolled
          ? "bg-white/90 dark:bg-brand-dark/90 backdrop-blur-xl py-3 px-4 xl:px-10 rounded-full border border-white/20 shadow-2xl"
          : "bg-white/50 backdrop-blur-md py-4 px-6 xl:px-12 rounded-full border border-white/10"
      )}
    >
      <div className="px-2">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group" aria-label="912 Home">
            <div className="relative w-10 h-10 bg-brand-orange rounded-full flex items-center justify-center overflow-hidden">
              <span className="text-white font-bold text-xl relative z-10">912</span>
            </div>
            <div className="flex flex-col whitespace-nowrap overflow-hidden">
              <span className="font-heading font-bold text-base xl:text-lg leading-none text-brand-blue">NINE ONE TWO</span>
              <span className="text-[7px] xl:text-[8px] uppercase tracking-[0.2em] font-medium opacity-70 hidden xl:block">One Contract. Every Technology Need.</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-4" aria-label="Main navigation">
            <NavigationMenu>
              <NavigationMenuList className="gap-0 xl:gap-2">
                {/* Services dropdown */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent hover:bg-transparent focus:bg-transparent data-[active]:bg-transparent data-[state=open]:bg-transparent font-medium whitespace-nowrap text-[11px] xl:text-sm px-1 xl:px-3">
                    Services
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[450px] p-6 lg:w-[600px]">
                      <div className="grid grid-cols-2 gap-4">
                        {serviceItems.map((item) => (
                          <NavigationMenuLink key={item.href} asChild>
                            <Link
                              to={item.href}
                              className="flex flex-col gap-1 p-4 rounded-xl hover:bg-slate-50 transition-all border border-transparent hover:border-slate-100 group"
                            >
                              <span className="font-heading font-bold text-sm text-brand-dark group-hover:text-brand-blue transition-colors">
                                {item.title}
                              </span>
                              <span className="text-[11px] text-slate-500 leading-snug">
                                {item.title === 'Physical & Security Infrastructure' ? 'Cameras, access control, and edge infrastructure.' :
                                 item.title === 'Cloud & Core IT' ? 'Enterprise cloud, networking, and server management.' :
                                 item.title === 'Applications & Software' ? 'Custom software, mobile apps, and SaaS platforms.' :
                                 'BI, reporting, and predictive data engineering.'}
                              </span>
                            </Link>
                          </NavigationMenuLink>
                        ))}
                      </div>
                      <div className="mt-4 pt-4 border-t border-slate-100">
                        <Link to="/services" className="text-xs font-bold text-brand-blue hover:text-brand-orange transition-colors uppercase tracking-wider flex items-center gap-2">
                          View Infrastructure Hub <ArrowRight className="w-3 h-3" />
                        </Link>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Industries dropdown */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent hover:bg-transparent focus:bg-transparent data-[active]:bg-transparent data-[state=open]:bg-transparent font-medium whitespace-nowrap text-[11px] xl:text-sm px-1 xl:px-3">
                    Industries
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[500px] p-6 lg:w-[700px]">
                      <div className="grid grid-cols-2 gap-x-6 gap-y-2">
                        {industriesItems.map((item) => (
                          <NavigationMenuLink key={item.href} asChild>
                            <Link
                              to={item.href}
                              className="flex flex-col gap-0.5 p-3 rounded-lg hover:bg-slate-50 transition-all group"
                            >
                              <span className="font-heading font-bold text-xs text-brand-dark group-hover:text-brand-orange transition-colors">
                                {item.title}
                              </span>
                              <span className="text-[10px] text-slate-400">
                                {item.title === 'Financial Services' ? 'Secure banking & fintech infrastructure.' :
                                 item.title === 'Healthcare' ? 'HISP, patient data, and connectivity.' :
                                 item.title === 'Retail & E-commerce' ? 'POS, inventory, and cross-border logistics.' :
                                 item.title === 'Manufacturing' ? 'IoT and supply chain automation.' :
                                 'Industry-specific technology rescue and design.'}
                              </span>
                            </Link>
                          </NavigationMenuLink>
                        ))}
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Case Studies */}
                <NavigationMenuItem>
                  <Link to="/results" className="text-[11px] xl:text-sm font-medium hover:text-brand-orange transition-colors px-1 xl:px-3 whitespace-nowrap tracking-tighter xl:tracking-normal">
                    Case Studies
                  </Link>
                </NavigationMenuItem>

                {/* About dropdown */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent hover:bg-transparent focus:bg-transparent data-[active]:bg-transparent data-[state=open]:bg-transparent font-medium whitespace-nowrap text-[11px] xl:text-sm px-1 xl:px-3">
                    About
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[400px] p-6">
                      <div className="grid grid-cols-1 gap-2">
                        {/* Static links for About */}
                        {[
                          { title: 'Our Story', href: '/about', desc: 'Bridging the technology gap across Africa since 2013.' },
                          { title: 'The One Contract', href: '/about/one-contract', desc: 'One partner, one cost, zero vendor finger-pointing.' },
                          { title: 'Our Team', href: '/about/team', desc: 'Specialists dedicated to regional success.' },
                          { title: 'Global FAQ', href: '/faq', desc: 'Find answers to common technical and process questions.' }
                        ].map((item) => (
                          <NavigationMenuLink key={item.href} asChild>
                            <Link
                              to={item.href}
                              className="flex flex-col gap-1 p-4 rounded-xl hover:bg-slate-50 transition-all group"
                            >
                              <span className="font-heading font-bold text-sm text-brand-dark group-hover:text-brand-blue transition-colors">
                                {item.title}
                              </span>
                              <span className="text-[11px] text-slate-500">
                                {item.desc}
                              </span>
                            </Link>
                          </NavigationMenuLink>
                        ))}
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Resources */}
                <NavigationMenuItem>
                  <Link to="/resources" className="text-[11px] xl:text-sm font-medium hover:text-brand-orange transition-colors px-1 xl:px-3 whitespace-nowrap tracking-tighter xl:tracking-normal">
                    Resources
                  </Link>
                </NavigationMenuItem>

                {/* Blog (was Intelligence Hub) */}
                <NavigationMenuItem>
                  <Link to="/blog" className={cn(
                    "text-[11px] xl:text-sm font-medium hover:text-brand-orange transition-colors px-1 xl:px-3 whitespace-nowrap tracking-tighter xl:tracking-normal",
                    location.pathname.startsWith('/blog') ? "text-brand-orange" : "text-brand-orange"
                  )}>
                    Blog
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <div className="flex items-center gap-1 xl:gap-4 border-l pl-2 xl:pl-6 border-border/50 shrink-0">
              <Link to="/contact">
                <HoverBorderButton variant="orange" className="px-3 xl:px-6 whitespace-nowrap text-[11px] xl:text-sm">
                  Book a Discovery Call
                </HoverBorderButton>
              </Link>
            </div>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2 text-foreground min-w-[44px] min-h-[44px] flex items-center justify-center"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-navigation"
          >
            {isMobileMenuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            className="lg:hidden absolute top-24 left-0 right-0 bg-white/95 dark:bg-brand-dark/95 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl overflow-hidden mx-4"
            id="mobile-navigation"
            role="navigation"
            aria-label="Mobile navigation"
          >
          {/* Mobile Menu Content */}
          <div className="md:hidden">
            <div className="px-6 py-8 space-y-8 bg-white/95 dark:bg-brand-dark/95 backdrop-blur-xl max-h-[70vh] overflow-y-auto rounded-b-3xl">
              {/* Main Links */}
              <div className="space-y-4">
                <Link to="/blog" className="block text-xl font-bold text-brand-orange hover:text-brand-blue transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Blog</Link>
                <Link to="/results" className="block text-xl font-bold text-brand-blue hover:text-brand-orange transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Case Studies</Link>
              </div>
              
              {/* Services Section */}
              <div className="space-y-4">
                <h4 className="font-heading font-black text-brand-dark/30 dark:text-white/20 uppercase text-xs tracking-[0.2em]">Services</h4>
                <ul className="space-y-2">
                  {serviceItems.map((item) => (
                    <li key={item.href}>
                      <Link to={item.href} className="block py-2 text-lg font-bold hover:text-brand-orange transition-colors" onClick={() => setIsMobileMenuOpen(false)}>{item.title}</Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Industries Section */}
              <div className="space-y-4">
                <h4 className="font-heading font-black text-brand-dark/30 dark:text-white/20 uppercase text-xs tracking-[0.2em]">Industries</h4>
                <ul className="grid grid-cols-1 gap-2">
                  {industriesItems.map((item) => (
                    <li key={item.href}>
                      <Link to={item.href} className="block py-2 text-lg font-bold hover:text-brand-orange transition-colors" onClick={() => setIsMobileMenuOpen(false)}>{item.title}</Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* About Section */}
              <div className="space-y-4">
                <h4 className="font-heading font-black text-brand-dark/30 dark:text-white/20 uppercase text-xs tracking-[0.2em]">Our Firm</h4>
                <ul className="space-y-2">
                  <li><Link to="/about" className="block py-2 text-lg font-bold hover:text-brand-orange transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Our Story</Link></li>
                  <li><Link to="/about/one-contract" className="block py-2 text-lg font-bold hover:text-brand-orange transition-colors" onClick={() => setIsMobileMenuOpen(false)}>The One Contract</Link></li>
                  <li><Link to="/about/team" className="block py-2 text-lg font-bold hover:text-brand-orange transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Our Team</Link></li>
                  <li><Link to="/faq" className="block py-2 text-lg font-bold hover:text-brand-orange transition-colors font-heading text-brand-blue" onClick={() => setIsMobileMenuOpen(false)}>Global FAQ Center</Link></li>
                </ul>
              </div>

              <div className="pt-6 border-t border-slate-100">
                <Link to="/contact" className="w-full block">
                  <HoverBorderButton variant="orange" className="w-full py-8 text-xl font-bold" containerClassName="w-full">
                    Book a Discovery Call
                  </HoverBorderButton>
                </Link>
              </div>
            </div>
          </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
