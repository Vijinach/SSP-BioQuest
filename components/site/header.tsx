'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect, useRef } from 'react';
import { Menu, X, FlaskConical, ChevronDown, Refrigerator, Thermometer, Droplet, Layers, Wind } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/products', label: 'Products' },
  { href: '/contact', label: 'Contact' },
];

const productCategories = [
  { name: 'Preservation', icon: Refrigerator, href: '/preservation' },
  { name: 'Vaccine Storage Solution', icon: Thermometer, href: '/vaccine-storage-solution' },
  { name: 'Laboratory Equipment', icon: FlaskConical, href: '/laboratory-equipment' },
  { name: 'Blood Bank Solution', icon: Droplet, href: '/blood-bank-solutions' },
  { name: 'Cold Chain Logistics', icon: Layers, href: '/cold-chain-logistics' },
  { name: 'Cryo Preservation', icon: Wind, href: '/cryo-preservation' },
];

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    setDropdownOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
          scrolled ? 'glass shadow-lg shadow-primary/5 py-2' : 'bg-transparent py-4'
        )}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link href="/" className="group flex items-center gap-2">
            <div className="relative">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl gradient-primary text-white transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                <FlaskConical className="h-5 w-5" />
              </div>
              <div className="absolute -inset-1 -z-10 rounded-xl gradient-secondary opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-40" />
            </div>
            <div className="flex flex-col">
              <span className={cn('text-lg font-bold leading-tight transition-colors duration-300', scrolled ? 'text-primary' : 'text-white')}>
                SSP BioQuest
              </span>
              <span className={cn('text-[10px] leading-tight transition-colors duration-300', scrolled ? 'text-muted-foreground' : 'text-white/70')}>
                Empowering Scientific Discovery
              </span>
            </div>
          </Link>

          <nav className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (link.href === '/products' && pathname.startsWith('/products'));
              if (link.href === '/products') {
                return (
                  <div key={link.href} className="relative" ref={dropdownRef}>
                    <div className="flex items-center">
                      <Link
                        href="/products"
                        className={cn(
                          'relative rounded-lg px-4 py-2 text-sm font-medium transition-colors duration-300',
                          scrolled
                            ? isActive ? 'text-primary' : 'text-foreground/70 hover:text-primary'
                            : isActive ? 'text-white' : 'text-white/80 hover:text-white'
                        )}
                      >
                        {link.label}
                        <span className={cn('absolute bottom-0 left-1/2 h-0.5 -translate-x-1/2 rounded-full bg-secondary transition-all duration-300', isActive ? 'w-1/2' : 'w-0')} />
                      </Link>
                      <button
                        onClick={() => setDropdownOpen(!dropdownOpen)}
                        className={cn(
                          'flex items-center rounded-lg px-1 py-2 transition-colors duration-300',
                          scrolled
                            ? isActive ? 'text-primary' : 'text-foreground/70 hover:text-primary'
                            : isActive ? 'text-white' : 'text-white/80 hover:text-white'
                        )}
                      >
                        <ChevronDown className={cn('h-3.5 w-3.5 transition-transform duration-200', dropdownOpen && 'rotate-180')} />
                      </button>
                    </div>
                    {dropdownOpen && (
                      <div
                        className="absolute left-0 top-full mt-2 w-56 overflow-hidden rounded-2xl py-2 z-50"
                        style={{
                          background: 'rgba(255,255,255,0.95)',
                          backdropFilter: 'blur(20px)',
                          WebkitBackdropFilter: 'blur(20px)',
                          boxShadow: '0 16px 48px rgba(58,93,165,0.18), 0 0 0 1px rgba(255,255,255,0.8)',
                        }}
                      >
                        <div className="mx-4 my-1 h-px bg-primary/10" />
                        {productCategories.map((cat, i) => (
                          <Link
                            key={i}
                            href={cat.href}
                            className="flex items-center gap-3 px-4 py-2.5 text-sm text-foreground/70 hover:text-primary hover:bg-primary/5 transition-colors"
                          >
                            <cat.icon className="h-4 w-4 shrink-0 text-secondary" />
                            {cat.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'relative rounded-lg px-4 py-2 text-sm font-medium transition-colors duration-300',
                    scrolled
                      ? isActive ? 'text-primary' : 'text-foreground/70 hover:text-primary'
                      : isActive ? 'text-white' : 'text-white/80 hover:text-white'
                  )}
                >
                  {link.label}
                  <span className={cn('absolute bottom-0 left-1/2 h-0.5 -translate-x-1/2 rounded-full bg-secondary transition-all duration-300', isActive ? 'w-1/2' : 'w-0')} />
                </Link>
              );
            })}
          </nav>

          <div className="hidden md:block">
            <Link href="/contact">
              <Button variant="default" className="gradient-primary text-white border-0 hover:opacity-90 transition-opacity">
                Contact Now
              </Button>
            </Link>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={cn('flex h-10 w-10 items-center justify-center rounded-lg transition-colors md:hidden', scrolled ? 'text-primary hover:bg-accent' : 'text-white hover:bg-white/10')}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        className={cn(
          'fixed inset-0 z-40 transition-all duration-300 md:hidden',
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        )}
      >
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setMobileOpen(false)} />
        <nav
          className={cn(
            'absolute right-0 top-0 h-full w-72 bg-background shadow-2xl transition-transform duration-300',
            mobileOpen ? 'translate-x-0' : 'translate-x-full'
          )}
        >
          <div className="flex h-full flex-col p-6 pt-24">
            {navLinks.map((link, i) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'rounded-lg px-4 py-3 text-base font-medium transition-colors',
                    isActive ? 'bg-accent text-primary' : 'text-foreground/80 hover:bg-muted'
                  )}
                  style={{ animation: mobileOpen ? `slide-in-right 0.4s ease-out ${i * 80}ms both` : 'none' }}
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link href="/contact" className="mt-6">
              <Button className="w-full gradient-primary text-white border-0">Contact Now</Button>
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
}
