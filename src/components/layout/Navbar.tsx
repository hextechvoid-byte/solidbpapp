import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { companyInfo, navigation } from '@/lib/data';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);

  const isActive = (href: string) => {
    if (href === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(href);
  };

  return (
    <>
      {/* Top bar */}
      <div className="bg-solidbp-blue text-white py-2 hidden md:block">
        <div className="container-custom flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <a 
              href={`tel:${companyInfo.phone}`} 
              className="flex items-center gap-2 hover:text-solidbp-orange transition-colors"
            >
              <Phone className="w-4 h-4" />
              {companyInfo.phone}
            </a>
            <span>{companyInfo.email}</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-white/80">Gratis offerte binnen 24 uur</span>
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <header
        className={cn(
          "sticky top-0 z-50 transition-all duration-300",
          isScrolled 
            ? "bg-white shadow-lg" 
            : "bg-white/95 backdrop-blur-sm"
        )}
      >
        <nav className="container-custom">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-solidbp-blue rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">S</span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-xl text-solidbp-blue leading-tight">Solidbp</span>
                <span className="text-xs text-muted-foreground hidden sm:block">Betonreparatie & Coatings</span>
              </div>
            </Link>

            {/* Desktop navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navigation.main.map((item) => (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => item.children && setActiveDropdown(item.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    to={item.href}
                    className={cn(
                      "flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium transition-colors",
                      isActive(item.href)
                        ? "text-solidbp-blue bg-solidbp-blue/10"
                        : "text-foreground hover:text-solidbp-blue hover:bg-muted"
                    )}
                  >
                    {item.label}
                    {item.children && (
                      <ChevronDown className={cn(
                        "w-4 h-4 transition-transform",
                        activeDropdown === item.label && "rotate-180"
                      )} />
                    )}
                  </Link>

                  {/* Dropdown menu */}
                  <AnimatePresence>
                    {item.children && activeDropdown === item.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-border overflow-hidden z-50"
                      >
                        <div className="py-2">
                          {item.children.map((child) => (
                            <Link
                              key={child.label}
                              to={child.href}
                              className={cn(
                                "block px-4 py-2.5 text-sm transition-colors",
                                isActive(child.href)
                                  ? "text-solidbp-blue bg-solidbp-blue/5 font-medium"
                                  : "text-foreground hover:text-solidbp-blue hover:bg-muted"
                              )}
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <Link
                to="/offerte"
                className="btn-primary"
              >
                Gratis offerte
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-muted transition-colors"
              aria-label={isMobileMenuOpen ? "Sluit menu" : "Open menu"}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </nav>

        {/* Mobile menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-white border-t border-border overflow-hidden"
            >
              <div className="container-custom py-4">
                <div className="flex flex-col gap-2">
                  {navigation.main.map((item) => (
                    <div key={item.label}>
                      <Link
                        to={item.href}
                        className={cn(
                          "block px-4 py-3 rounded-lg font-medium transition-colors",
                          isActive(item.href)
                            ? "text-solidbp-blue bg-solidbp-blue/10"
                            : "text-foreground hover:bg-muted"
                        )}
                      >
                        {item.label}
                      </Link>
                      
                      {item.children && (
                        <div className="ml-4 mt-1 border-l-2 border-border">
                          {item.children.map((child) => (
                            <Link
                              key={child.label}
                              to={child.href}
                              className={cn(
                                "block px-4 py-2 text-sm transition-colors",
                                isActive(child.href)
                                  ? "text-solidbp-blue font-medium"
                                  : "text-muted-foreground hover:text-foreground"
                              )}
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                  
                  <Link
                    to="/offerte"
                    className="btn-primary mt-4 text-center"
                  >
                    Gratis offerte aanvragen
                  </Link>
                  
                  <a
                    href={`tel:${companyInfo.phone}`}
                    className="flex items-center justify-center gap-2 text-solidbp-blue font-medium py-3"
                  >
                    <Phone className="w-5 h-5" />
                    {companyInfo.phone}
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
