import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const serviceItems = [
  { title: "Physical & Security Infrastructure", href: "/services/physical-security-infrastructure" },
  { title: "Cloud & Core IT", href: "/services/cloud-core-it" },
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
  { title: "Retail & E-commerce", href: "/industries/retail" },
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
        "fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 w-[95%] max-w-7xl",
        isScrolled
          ? "bg-white/80 dark:bg-brand-dark/80 backdrop-blur-xl py-3 px-6 rounded-full border border-white/20 shadow-2xl"
          : "bg-white/40 backdrop-blur-md py-4 px-8 rounded-full border border-white/10"
      )}
    >
      <div className="px-2">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group" aria-label="912 Home">
            <div className="relative w-10 h-10 bg-brand-orange rounded-full flex items-center justify-center overflow-hidden">
              <span className="text-white font-bold text-xl relative z-10">912</span>
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-bold text-lg leading-none text-brand-blue">NINE ONE TWO</span>
              <span className="text-[8px] uppercase tracking-[0.2em] font-medium opacity-70">One Contract. Every Technology Need.</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6" aria-label="Main navigation">
            <NavigationMenu>
              <NavigationMenuList>
                {/* Services dropdown */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent hover:bg-transparent focus:bg-transparent data-[active]:bg-transparent data-[state=open]:bg-transparent font-medium">
                    Services
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[320px] p-4">
                      <h4 className="font-heading font-bold text-brand-blue mb-3 uppercase text-xs tracking-wider">
                        The Four Pillars
                      </h4>
                      <ul className="space-y-1">
                        {serviceItems.map((item) => (
                          <li key={item.href}>
                            <NavigationMenuLink asChild>
                              <Link
                                to={item.href}
                                className="text-sm hover:text-brand-orange transition-colors block py-2 px-3 rounded-lg hover:bg-slate-50"
                              >
                                {item.title}
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                      <div className="border-t border-slate-100 mt-3 pt-3">
                        <Link to="/services" className="text-xs font-bold text-brand-blue hover:text-brand-orange transition-colors uppercase tracking-wider">
                          View All Services
                        </Link>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Industries dropdown */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent hover:bg-transparent focus:bg-transparent data-[active]:bg-transparent data-[state=open]:bg-transparent font-medium">
                    Industries
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[320px] p-4">
                      <h4 className="font-heading font-bold text-brand-blue mb-3 uppercase text-xs tracking-wider">
                        Who We Serve
                      </h4>
                      <ul className="space-y-1">
                        {industriesItems.map((item) => (
                          <li key={item.href}>
                            <NavigationMenuLink asChild>
                              <Link
                                to={item.href}
                                className="text-sm hover:text-brand-orange transition-colors block py-2 px-3 rounded-lg hover:bg-slate-50"
                              >
                                {item.title}
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Case Studies */}
                <NavigationMenuItem>
                  <Link to="/results" className="text-sm font-medium hover:text-brand-orange transition-colors px-4">
                    Case Studies
                  </Link>
                </NavigationMenuItem>

                {/* About dropdown */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent hover:bg-transparent focus:bg-transparent data-[active]:bg-transparent data-[state=open]:bg-transparent font-medium">
                    About
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[240px] p-4">
                      <ul className="space-y-1">
                        {aboutItems.map((item) => (
                          <li key={item.href}>
                            <NavigationMenuLink asChild>
                              <Link
                                to={item.href}
                                className={cn(
                                  "text-sm hover:text-brand-orange transition-colors block py-2 px-3 rounded-lg hover:bg-slate-50",
                                  item.highlight && "font-bold text-brand-blue"
                                )}
                              >
                                {item.title}
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Resources */}
                <NavigationMenuItem>
                  <Link to="/resources" className="text-sm font-medium hover:text-brand-orange transition-colors px-4">
                    Resources
                  </Link>
                </NavigationMenuItem>

                {/* Intelligence (Blog) */}
                <NavigationMenuItem>
                  <Link to="/blog" className="text-sm font-medium hover:text-brand-orange transition-colors px-4 text-brand-orange">
                    Intelligence
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <div className="flex items-center gap-4 border-l pl-6 border-border/50">
              <Button asChild className="bg-brand-orange hover:bg-brand-orange/90 text-white rounded-none px-6">
                <Link to="/contact">Book a Discovery Call</Link>
              </Button>
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
            <div className="px-6 py-8 space-y-6">
              {/* Services */}
              <div className="space-y-3">
                <h4 className="font-heading font-bold text-brand-blue uppercase text-xs tracking-wider">Services</h4>
                <ul className="space-y-3">
                  {serviceItems.map((item) => (
                    <li key={item.href}>
                      <Link to={item.href} className="text-base font-medium flex items-center min-h-[44px] hover:text-brand-orange transition-colors">
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              {/* Industries */}
              <div className="space-y-3 pt-4">
                <h4 className="font-heading font-bold text-brand-blue uppercase text-xs tracking-wider">Industries</h4>
                <ul className="space-y-3">
                  {industriesItems.map((item) => (
                    <li key={item.href}>
                      <Link to={item.href} className="text-base font-medium flex items-center min-h-[44px] hover:text-brand-orange transition-colors">
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              {/* Company */}
              <div className="space-y-3 border-t border-border/20 pt-6">
                <h4 className="font-heading font-bold text-brand-blue uppercase text-xs tracking-wider">Company</h4>
                <ul className="space-y-1">
                  <li><Link to="/results" className="text-base font-medium flex items-center min-h-[44px] hover:text-brand-orange transition-colors">Case Studies</Link></li>
                  <li><Link to="/about" className="text-base font-medium flex items-center min-h-[44px] hover:text-brand-orange transition-colors">Our Story</Link></li>
                  <li><Link to="/about/one-contract" className="text-base font-bold flex items-center min-h-[44px] text-brand-orange">The One Contract Model</Link></li>
                  <li><Link to="/about/team" className="text-base font-medium flex items-center min-h-[44px] hover:text-brand-orange transition-colors">Our People</Link></li>
                  <li><Link to="/resources" className="text-base font-medium flex items-center min-h-[44px] hover:text-brand-orange transition-colors">Resources Tracker</Link></li>
                  <li><Link to="/blog" className="text-base font-bold flex items-center min-h-[44px] text-brand-orange">Intelligence Blog</Link></li>
                </ul>
              </div>
              <Button asChild className="w-full bg-brand-orange hover:bg-brand-orange/90 text-white rounded-xl py-6 text-lg font-bold">
                <Link to="/contact">Book a Discovery Call</Link>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
