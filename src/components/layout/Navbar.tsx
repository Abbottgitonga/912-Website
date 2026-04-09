import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ChevronDown, Search, Globe } from 'lucide-react';
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

const expertiseItems = [
  {
    title: "Service Pillars",
    items: [
      "Physical & Security Infrastructure",
      "Cloud & Core IT",
      "Applications & Software",
      "Data & Intelligence",
    ]
  },
  {
    title: "Key Solutions",
    items: [
      "Access Control",
      "Backup & Recovery",
      "Cloud",
      "CCTV & Surveillance",
      "Power BI & Reporting",
      "Corporate IT Maintenance",
    ]
  }
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
          <Link to="/" className="flex items-center gap-2 group">
            <div className="relative w-10 h-10 bg-brand-orange rounded-full flex items-center justify-center overflow-hidden">
              <motion.div 
                className="absolute inset-0 bg-white/20"
                animate={{
                  x: ["-100%", "100%"],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
              <span className="text-white font-bold text-xl relative z-10">912</span>
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-bold text-lg leading-none text-brand-blue">NINE ONE TWO</span>
              <span className="text-[8px] uppercase tracking-[0.2em] font-medium opacity-70">Infinite Possibilities</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent hover:bg-transparent focus:bg-transparent data-[active]:bg-transparent data-[state=open]:bg-transparent font-medium">
                    Expertise
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid grid-cols-2 w-[600px] p-6 gap-8">
                      {expertiseItems.map((section) => (
                        <div key={section.title}>
                          <h4 className="font-heading font-bold text-brand-blue mb-4 uppercase text-xs tracking-wider">
                            {section.title}
                          </h4>
                          <ul className="space-y-2">
                            {section.items.map((item) => (
                              <li key={item}>
                                <NavigationMenuLink asChild>
                                  <Link 
                                    to={`/expertise/${item.toLowerCase().replace(/ /g, '-').replace(/&/g, '%26')}`}
                                    className="text-sm hover:text-brand-orange transition-colors block py-1"
                                  >
                                    {item}
                                  </Link>
                                </NavigationMenuLink>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <Link to="/people" className="text-sm font-medium hover:text-brand-orange transition-colors px-4">
                    People
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent hover:bg-transparent focus:bg-transparent data-[active]:bg-transparent data-[state=open]:bg-transparent font-medium">
                    News
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[200px] p-4">
                      <ul className="space-y-2">
                        <li><Link to="/news" className="text-sm hover:text-brand-orange transition-colors block py-1">All News</Link></li>
                        <li><Link to="/news/podcasts" className="text-sm hover:text-brand-orange transition-colors block py-1">Podcast Hub</Link></li>
                        <li><Link to="/news/videos" className="text-sm hover:text-brand-orange transition-colors block py-1">Video Hub</Link></li>
                      </ul>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent hover:bg-transparent focus:bg-transparent data-[active]:bg-transparent data-[state=open]:bg-transparent font-medium">
                    About
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[240px] p-4">
                      <ul className="space-y-2">
                        <li><Link to="/about" className="text-sm hover:text-brand-orange transition-colors block py-1">About Us</Link></li>
                        <li><Link to="/about/history" className="text-sm hover:text-brand-orange transition-colors block py-1">Our History</Link></li>
                        <li><Link to="/about/one-contract" className="text-sm hover:text-brand-orange transition-colors block py-1 font-bold text-brand-blue">The One Contract Model</Link></li>
                        <li><Link to="/about/africa" className="text-sm hover:text-brand-orange transition-colors block py-1">Geographic Reach</Link></li>
                      </ul>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link to="/careers" className="text-sm font-medium hover:text-brand-orange transition-colors px-4">
                    Careers
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <div className="flex items-center gap-4 border-l pl-8 border-border/50">
              <button className="p-2 hover:text-brand-orange transition-colors">
                <Search className="w-5 h-5" />
              </button>
              <button className="flex items-center gap-1 text-sm font-medium hover:text-brand-orange transition-colors">
                <Globe className="w-4 h-4" />
                <span>Global</span>
              </button>
              <Button asChild className="bg-brand-blue hover:bg-brand-blue/90 text-white rounded-none px-6">
                <Link to="/contact">Contact</Link>
              </Button>
            </div>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden p-2 text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
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
          >
            <div className="px-6 py-8 space-y-6">
              <div className="space-y-4">
                <h4 className="font-heading font-bold text-brand-blue uppercase text-xs tracking-wider">Navigation</h4>
                <ul className="space-y-4">
                  <li><Link to="/expertise/physical-&-security-infrastructure" className="text-lg font-bold block hover:text-brand-orange transition-colors">Physical & Security</Link></li>
                  <li><Link to="/expertise/cloud-&-core-it" className="text-lg font-bold block hover:text-brand-orange transition-colors">Cloud & Core IT</Link></li>
                  <li><Link to="/expertise/applications-&-software" className="text-lg font-bold block hover:text-brand-orange transition-colors">Apps & Software</Link></li>
                  <li><Link to="/expertise/data-&-intelligence" className="text-lg font-bold block hover:text-brand-orange transition-colors">Data & Intelligence</Link></li>
                  <li><Link to="/about" className="text-lg font-bold block hover:text-brand-orange transition-colors">About Us</Link></li>
                  <li><Link to="/about/one-contract" className="text-lg font-bold block text-brand-orange">One Contract Model</Link></li>
                </ul>
              </div>
              <Button asChild className="w-full bg-brand-blue hover:bg-brand-blue/90 text-white rounded-xl py-6 text-lg font-bold">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
