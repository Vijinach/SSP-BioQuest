'use client';

import Link from 'next/link';
import { ArrowRight, Phone, Zap } from 'lucide-react';
import { Reveal } from '@/components/site/reveal';

const PHONE = '+919944663593';

const products = [
  {
    title: 'CryoBio Series',
    image: '/images/Cryo/Cryo_1.png',
    brochure: null,
    href: '/cryobio-series',
  },
  {
    title: 'LN2 Container-Biobank Series',
    image: '/images/Cryo/850p.png',
    brochure: '/Brouchers/Cryo/Biobank-Series-for-Large-Scale-Storage-2024.06.17.pdf',
    href: null,
  },
  {
    title: 'LN2 Container-Dryshipper Series',
    image: '/images/Cryo/Cryo_3.png',
    brochure: '/Brouchers/Cryo/Dryshipper-Series-for-Transportation-Round-Canisters-2024.09.26.pdf',
    href: null,
  },
  {
    title: 'LN2 Container-High Capacity Series',
    image: '/images/Cryo/High-Capacity-Series-for-Storage-or-Transport.png',
    brochure: '/Brouchers/Cryo/High-Capacity-Series-for-Storage-or-Transport-Round-Canisters-2024.07.10.pdf',
    href: null,
  },
  {
    title: 'LN2 Container-Low Temperature Transport Trolley',
    image: '/images/Cryo/Cryo_5.png',
    brochure: '/Brouchers/Cryo/Mobile-Cryogenic-Transfer-Operation-Platform.pdf',
    href: null,
  },
  {
    title: 'LN2 Container-Medical Storage Series',
    image: '/images/Cryo/Cryo_6.png',
    brochure: '/Brouchers/Cryo/Medium-Sized-Storage-Series-Square-Racks-2024.06.04.pdf',
    href: null,
  },
  {
    title: 'LN2 Container-Self-pressurized Series',
    image: '/images/Cryo/Liquid-Nitrogen-Container-Self-pressurized-Series.png',
    brochure: '/Brouchers/Cryo/Self-pressurized-Series-for-LN2-Storage-and-Supply-YDZ-series-2022.08.05.pdf',
    href: null,
  },
  {
    title: 'LN2 Container-Small Sized Storage Series (Square Racks)',
    image: '/images/Cryo/Cryo_8.png',
    brochure: '/Brouchers/Cryo/Small-Sized-Storage-Series-Square-Racks-2024.09.26.pdf',
    href: null,
  },
  {
    title: 'LN2 Container-Smart Series',
    image: '/images/Cryo/95.png',
    brochure: '/Brouchers/Cryo/Smart-Series-Square-Racks-YDS-65-95-115-145-175-216-FZ-2022.8.5.pdf',
    href: null,
  },
  {
    title: 'Portable Cryogenic Transfer Tank',
    image: '/images/Cryo/Bio-2T.png',
    brochure: '/Brouchers/Cryo/Portable-Cryogenic-Transfer-Tank-Bio-2T-Air-2024.06.17.pdf',
    href: null,
  },
  {
    title: 'Smart Automated Biobank Solution',
    image: '/images/Cryo/Haier-Biomedical-Intelligent-Automated-Liquid-Nitrogen-Biospecimen-Storage-System.jpg',
    brochure: '/Brouchers/Cryo/Smart-Automated-Biobank-Scenario-Solution-2024.05.28.pdf',
    href: null,
  },
];

export default function CryoPreservationPage() {
  return (
    <div className="overflow-hidden">

      {/* HERO */}
      <section className="relative gradient-mesh" style={{ height: '300px' }}>
        <div className="absolute top-1/4 left-10 h-48 w-48 animate-blob rounded-full bg-secondary/20 blur-3xl" />
        <div className="absolute bottom-1/4 right-10 h-56 w-56 animate-blob animation-delay-2000 rounded-full bg-primary/30 blur-3xl" />
        <div className="relative flex h-full flex-col items-center justify-center pt-16 text-center px-4">
          <h1 className="text-4xl font-bold text-white sm:text-5xl">Cryo Preservation</h1>
        </div>
      </section>

      {/* BREADCRUMB */}
      <div style={{ background: '#eef2ff' }} className="border-b border-white/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3 flex items-center gap-2 text-sm text-muted-foreground">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <span>/</span>
          <Link href="/products" className="hover:text-primary transition-colors">Products</Link>
          <span>/</span>
          <span className="text-primary font-medium">Cryo Preservation</span>
        </div>
      </div>

      {/* PRODUCT GRID */}
      <section className="py-16" style={{ background: '#eef2ff' }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <Reveal animation="fade-up">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold text-primary">Our Cryo Preservation Range</h2>
              <p className="mt-2 text-muted-foreground">11 specialized products for cryogenic storage and preservation</p>
            </div>
          </Reveal>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product, i) => (
              <Reveal key={i} animation="fade-up" delay={i * 80}>
                <div
                  className="group flex flex-col overflow-hidden rounded-3xl transition-all duration-500 hover:-translate-y-2"
                  style={{ background: '#eef2ff', boxShadow: '8px 8px 20px #c5cce8, -8px -8px 20px #ffffff' }}
                >
                  {/* image */}
                  <div className="relative overflow-hidden" style={{ height: '240px' }}>
                    <div
                      className="absolute inset-0"
                      style={{ background: 'linear-gradient(135deg, #e8eeff 0%, #fce8f8 100%)' }}
                    />
                    <img
                      src={product.image}
                      alt={product.title}
                      className="absolute inset-0 w-full h-full object-contain p-6 transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>

                  {/* content */}
                  <div className="flex flex-1 flex-col p-6">
                    <div
                      className="mb-4 h-0.5 w-full rounded-full"
                      style={{ background: 'linear-gradient(90deg, #3a5da5, #f888d6, transparent)' }}
                    />
                    <h3 className="text-lg font-bold text-primary mb-6 group-hover:text-secondary transition-colors duration-300">
                      {product.title}
                    </h3>

                    {/* View More */}
                    {product.href ? (
                      <Link href={product.href} className="mb-3">
                        <button
                          className="w-full flex items-center justify-center gap-2 rounded-2xl py-3 text-sm font-semibold transition-all duration-300 group/btn"
                          style={{ background: '#eef2ff', boxShadow: '4px 4px 10px #c5cce8, -4px -4px 10px #ffffff', color: '#3a5da5' }}
                          onMouseEnter={(e) => {
                            const el = e.currentTarget as HTMLButtonElement;
                            el.style.background = 'linear-gradient(135deg,#3a5da5,#f888d6)';
                            el.style.color = '#ffffff';
                            el.style.boxShadow = '0 8px 20px rgba(58,93,165,0.3)';
                          }}
                          onMouseLeave={(e) => {
                            const el = e.currentTarget as HTMLButtonElement;
                            el.style.background = '#eef2ff';
                            el.style.color = '#3a5da5';
                            el.style.boxShadow = '4px 4px 10px #c5cce8, -4px -4px 10px #ffffff';
                          }}
                        >
                          View More
                          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                        </button>
                      </Link>
                    ) : (
                      <a href={product.brochure!} target="_blank" rel="noopener noreferrer" className="mb-3">
                        <button
                          className="w-full flex items-center justify-center gap-2 rounded-2xl py-3 text-sm font-semibold transition-all duration-300 group/btn"
                          style={{ background: '#eef2ff', boxShadow: '4px 4px 10px #c5cce8, -4px -4px 10px #ffffff', color: '#3a5da5' }}
                          onMouseEnter={(e) => {
                            const el = e.currentTarget as HTMLButtonElement;
                            el.style.background = 'linear-gradient(135deg,#3a5da5,#f888d6)';
                            el.style.color = '#ffffff';
                            el.style.boxShadow = '0 8px 20px rgba(58,93,165,0.3)';
                          }}
                          onMouseLeave={(e) => {
                            const el = e.currentTarget as HTMLButtonElement;
                            el.style.background = '#eef2ff';
                            el.style.color = '#3a5da5';
                            el.style.boxShadow = '4px 4px 10px #c5cce8, -4px -4px 10px #ffffff';
                          }}
                        >
                          View More
                          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                        </button>
                      </a>
                    )}

                    {/* Hurry Up + Ask */}
                    <div className="flex gap-3">
                      <Link href="/contact" className="flex-1">
                        <button
                          className="w-full flex items-center justify-center gap-1.5 rounded-2xl py-2.5 text-sm font-semibold transition-all duration-300"
                          style={{ background: 'linear-gradient(135deg,#3a5da5,#2d4a87)', color: '#ffffff', boxShadow: '0 4px 14px rgba(58,93,165,0.35)' }}
                          onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.opacity = '0.88'; }}
                          onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.opacity = '1'; }}
                        >
                          <Zap className="h-3.5 w-3.5" />
                          Hurry Up
                        </button>
                      </Link>
                      <a href={`tel:${PHONE}`} className="flex-1">
                        <button
                          className="w-full flex items-center justify-center gap-1.5 rounded-2xl py-2.5 text-sm font-semibold transition-all duration-300"
                          style={{ background: 'linear-gradient(135deg,#f888d6,#e060b8)', color: '#ffffff', boxShadow: '0 4px 14px rgba(248,136,214,0.4)' }}
                          onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.opacity = '0.88'; }}
                          onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.opacity = '1'; }}
                        >
                          <Phone className="h-3.5 w-3.5" />
                          Ask
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden" style={{ minHeight: '380px' }}>
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(/images/Home_2.png)' }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(58,93,165,0.92) 0%, rgba(45,74,135,0.86) 50%, rgba(248,136,214,0.80) 100%)' }} />
        <div className="absolute -top-16 -left-16 h-56 w-56 animate-blob rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -bottom-16 -right-16 h-64 w-64 animate-blob animation-delay-2000 rounded-full bg-secondary/20 blur-3xl" />
        <div className="relative flex min-h-[380px] items-center justify-center px-4 py-16 text-center">
          <Reveal animation="fade-up">
            <h2 className="text-3xl font-bold text-white sm:text-4xl mb-4">Need a Cryo Preservation Solution?</h2>
            <p className="mx-auto max-w-2xl text-lg text-white/80 mb-8">
              Talk to our experts for the right cryogenic storage solution tailored to your requirements.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link href="/contact">
                <button
                  className="flex items-center gap-2 rounded-2xl px-8 py-4 text-base font-bold transition-all duration-300 hover:opacity-90"
                  style={{ background: '#ffffff', color: '#3a5da5', boxShadow: '0 8px 24px rgba(0,0,0,0.15)' }}
                >
                  Contact Us <ArrowRight className="h-5 w-5" />
                </button>
              </Link>
              <a href={`tel:${PHONE}`}>
                <button
                  className="flex items-center gap-2 rounded-2xl px-8 py-4 text-base font-bold transition-all duration-300 hover:bg-white/20"
                  style={{ background: 'rgba(255,255,255,0.12)', color: '#ffffff', border: '2px solid rgba(255,255,255,0.5)' }}
                >
                  <Phone className="h-5 w-5" /> Call Now
                </button>
              </a>
            </div>
          </Reveal>
        </div>
      </section>

    </div>
  );
}
