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
    title: "Sector Specialisms",
    items: [
      "Agriculture, Aquaculture & Fishing",
      "Commercial Real Estate",
      "Construction & Engineering",
      "Consumer Goods, Services & Retail",
      "Corporate Debt, Turnaround & Restructuring",
      "Government and State-Owned Entities",
      "Healthcare & Pharmaceuticals",
      "Hospitality & Leisure",
      "Industrials, Manufacturing & Trade",
      "Mining & Minerals",
      "Oil & Gas",
      "Projects & Energy",
    ]
  },
  {
    title: "Practice Areas",
    items: [
      "Banking, Finance & Projects",
      "Competition Law",
      "Corporate & Commercial Law",
      "Dispute Resolution",
      "Employment Law",
      "Environmental Law",
      "Pro Bono & Human Rights",
      "Real Estate Law & Conveyancing",
      "Tax & Exchange Control",
      "Trusts & Estates Law",
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
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
        isScrolled 
          ? "bg-background/80 backdrop-blur-md py-2 border-border" 
          : "bg-transparent py-4 border-transparent"
      )}
    >
      <div className="container mx-auto px-4">
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
              <span className="font-heading font-bold text-xl leading-none text-brand-blue">NINE ONE TWO</span>
              <span className="text-[10px] uppercase tracking-[0.2em] font-medium opacity-70">Infinite Possibilities</span>
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
                                    to={`/expertise/${item.toLowerCase().replace(/ /g, '-')}`}
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
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background border-t border-border overflow-hidden"
          >
            <div className="container mx-auto px-4 py-8 space-y-6">
              <div className="space-y-4">
                <h4 className="font-heading font-bold text-brand-blue uppercase text-xs tracking-wider">Navigation</h4>
                <ul className="space-y-4">
                  <li><Link to="/expertise" className="text-lg font-medium block">Expertise</Link></li>
                  <li><Link to="/people" className="text-lg font-medium block">People</Link></li>
                  <li><Link to="/news" className="text-lg font-medium block">News</Link></li>
                  <li><Link to="/about" className="text-lg font-medium block">About</Link></li>
                  <li><Link to="/careers" className="text-lg font-medium block">Careers</Link></li>
                </ul>
              </div>
              <Button asChild className="w-full bg-brand-blue hover:bg-brand-blue/90 text-white rounded-none py-6 text-lg">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
