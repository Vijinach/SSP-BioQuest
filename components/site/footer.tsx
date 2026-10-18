'use client';
import Link from 'next/link';
import { FlaskConical, Phone, Mail, MapPin, ArrowRight, ArrowUp } from 'lucide-react';
import { navLinks, productCategories } from '@/lib/data';

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-foreground text-background">
      <div className="absolute -top-32 -right-32 h-64 w-64 rounded-full bg-primary/20 blur-3xl" />
      <div className="absolute -bottom-32 -left-32 h-64 w-64 rounded-full bg-secondary/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl gradient-primary text-white">
                <FlaskConical className="h-5 w-5" />
              </div>
              <span className="text-lg font-bold text-background">
                SSP BioQuest
              </span>
            </Link>
            <p className="text-sm text-background/60 max-w-xs">
              Empowering scientific discovery through the provision of the latest
              laboratory equipment and innovative solutions.
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-secondary">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group flex items-center gap-2 text-sm text-background/60 transition-colors hover:text-background"
                  >
                    <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-secondary">
              Products
            </h4>
            <ul className="space-y-2">
              {productCategories.slice(0, 5).map((cat) => (
                <li key={cat.id}>
                  <Link
                    href={`/products?category=${cat.id}`}
                    className="group flex items-center gap-2 text-sm text-background/60 transition-colors hover:text-background"
                  >
                    <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                    {cat.shortName}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-secondary">
              Get in Touch
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-sm text-background/60">
                <Phone className="h-4 w-4 shrink-0 text-secondary" />
                +91 93844 43550
              </li>
              <li className="flex items-center gap-3 text-sm text-background/60">
                <Mail className="h-4 w-4 shrink-0 text-secondary" />
                info@sspbioquest.com
              </li>
              <li className="flex items-start gap-3 text-sm text-background/60">
                <MapPin className="h-4 w-4 shrink-0 text-secondary mt-0.5" />
                Serving laboratories and research facilities worldwide.
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-background/10 pt-8 flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-background/50">
            &copy; {new Date().getFullYear()} SSP BioQuest. All rights reserved.
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2 rounded-xl px-4 py-2 text-sm text-background/60 transition-all hover:text-background hover:bg-background/10"
          >
            <ArrowUp className="h-4 w-4" />
            Back to Top
          </button>
        </div>
      </div>
    </footer>
  );
}
