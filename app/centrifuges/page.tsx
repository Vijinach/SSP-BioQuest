'use client';

import Link from 'next/link';
import { ArrowRight, Phone, Zap } from 'lucide-react';
import { Reveal } from '@/components/site/reveal';

const PHONE = '+919876543210';

const products = [
  {
    name: 'Benchtop High-speed Centrifuge',
    image: '/images/Laboratory/LX-165T2-J-Front.png',
    pdf: '/Brouchers/Laboratory Equipment/LX-165T2-J-2024.08.23.pdf',
  },
  {
    name: 'Benchtop High-speed Refrigerated Centrifuge',
    image: '/images/Laboratory/centrifuge_2.png',
    pdf: '/Brouchers/Laboratory Equipment/Benchtop-High-Speed-Refrigerated-Centrifuge-LX-185T100R-2024.08.05.pdf',
  },
  {
    name: 'Benchtop Low-speed Centrifuge',
    image: '/images/Laboratory/LX-60T100-J.png',
    pdf: '/Brouchers/Laboratory Equipment/Benchtop-Low-speed-Centrifuge-LX-60T100-J-2024.08.05.pdf',
  },
  {
    name: 'Floor Standing Low-Speed Refrigerated Centrifuge',
    image: '/images/Laboratory/LX-75L2400R.jpg',
    pdf: '/Brouchers/Laboratory Equipment/Haier-Biomedical-Blood-Banking-Centrifuge-LX-75L2400R-2024.08.08.pdf',
  },
  {
    name: 'Mini-Centrifuge',
    image: '/images/Laboratory/Mini-Centrifuge.png',
    pdf: '/Brouchers/Laboratory Equipment/Mini-Centrifuge-LX-120T2Z-50T2Z-2024.08.05.pdf',
  },
];

export default function CentrifugesPage() {
  return (
    <div className="overflow-hidden">

      {/* HERO */}
      <section className="relative gradient-mesh" style={{ height: '300px' }}>
        <div className="absolute top-1/4 left-10 h-48 w-48 animate-blob rounded-full bg-secondary/20 blur-3xl" />
        <div className="absolute bottom-1/4 right-10 h-56 w-56 animate-blob animation-delay-2000 rounded-full bg-primary/30 blur-3xl" />
        <div className="relative flex h-full flex-col items-center justify-center pt-16 text-center px-4">
          <h1 className="text-4xl font-bold text-white sm:text-5xl">Centrifuges</h1>
        </div>
      </section>

      {/* BREADCRUMB */}
      <div style={{ background: '#eef2ff' }} className="border-b border-white/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3 flex items-center gap-2 text-sm text-muted-foreground">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <span>/</span>
          <Link href="/products" className="hover:text-primary transition-colors">Products</Link>
          <span>/</span>
          <Link href="/laboratory-equipment" className="hover:text-primary transition-colors">Laboratory Equipment</Link>
          <span>/</span>
          <span className="text-primary font-medium">Centrifuges</span>
        </div>
      </div>

      {/* PRODUCT GRID */}
      <section className="py-16" style={{ background: '#eef2ff' }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <Reveal animation="fade-up">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold text-primary">Our Centrifuge Range</h2>
              <p className="mt-2 text-muted-foreground">5 specialized centrifuge products for every laboratory need</p>
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
                      alt={product.name}
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
                      {product.name}
                    </h3>

                    {/* View More → PDF */}
                    <a href={product.pdf} target="_blank" rel="noopener noreferrer" className="mb-3">
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

                    {/* Hurry Up + Ask */}
                    <div className="flex gap-3 mt-4">
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
            <h2 className="text-3xl font-bold text-white sm:text-4xl mb-4">Need a Centrifuge Solution?</h2>
            <p className="mx-auto max-w-2xl text-lg text-white/80 mb-8">
              Talk to our experts for the right centrifuge tailored to your laboratory requirements.
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
            </div>
          </Reveal>
        </div>
      </section>

    </div>
  );
}
