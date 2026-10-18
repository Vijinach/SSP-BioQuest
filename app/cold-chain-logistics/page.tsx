'use client';

import Link from 'next/link';
import { ArrowRight, Phone, Zap } from 'lucide-react';
import { Reveal } from '@/components/site/reveal';

const PHONE = '+919944663593';

const products = [
  {
    title: 'Active Temperature Controlled RKN Container',
    image: '/images/Cold/Cold_1.png',
    brochure: '/Brouchers/Cold Chain/Active-Temperature-Controlled-RKN-Container.pdf',
  },
  {
    title: 'Biosafety Transport Container FS-Series',
    image: '/images/Cold/FS-12-18-35-54LS.png',
    brochure: '/Brouchers/Cold Chain/Biosafety-Transport-Container-FS-5-12-18-35-54LS-2024.07.04.pdf',
  },
  {
    title: 'Logistics Cold Chain Transport Cooler',
    image: '/images/Cold/Cold_3.png',
    brochure: '/Brouchers/Cold Chain/ControlColdChainTransport-CoolerBW25-12B-36B-64B-55B-2024.07.04.pdf',
  },
  {
    title: 'Medical Transport Cooler FS-Series',
    image: '/images/Cold/FS-12LS-18LS-35LS.png',
    brochure: '/Brouchers/Cold Chain/Medical-Transport-Cooler20FS-12201820352054LS2010020110L202024.12.09.pdf',
  },
  {
    title: 'Transport Cooler for Biological Products (Active Cooling)',
    image: '/images/Cold/Cold_5.png',
    brochure: '/Brouchers/Cold Chain/HZY-15Z-8Z-15ZA-8ZA-5B-9ZR.pdf',
  },
  {
    title: 'Transport Cooler for Biological Products (Passive Cooling)',
    image: '/images/Cold/Cold_6.png',
    brochure: '/Brouchers/Cold Chain/Vaccine-Transport-Cooler-passive.pdf',
  },
  {
    title: 'Transport Cooler for Infectious Materials (Active Cooling)',
    image: '/images/Cold/Cold_7.png',
    brochure: '/Brouchers/Cold Chain/Transport-Cooler-for-Infectious-Materials-Passive-Cooling-HZY-10B-2024.07.04.pdf',
  },
  {
    title: 'Vaccine Transport Cooler (Active Cooling)',
    image: '/images/Cold/Cold_8.png',
    brochure: '/Brouchers/Cold Chain/Logistics-Cold-Chain-Transport-Cooler-HZY-40Z-2024.07.04.pdf',
  },
  {
    title: 'Vaccine Transport Cooler (Passive Cooling)',
    image: '/images/Cold/Cold_9.png',
    brochure: '/Brouchers/Cold Chain/Vaccine-Transport-Cooler-Flyer-QBLL0606-0812-0820-0830-2024.07.04.pdf',
  },
];

export default function ColdChainLogisticsPage() {
  return (
    <div className="overflow-hidden">

      {/* HERO */}
      <section className="relative gradient-mesh" style={{ height: '300px' }}>
        <div className="absolute top-1/4 left-10 h-48 w-48 animate-blob rounded-full bg-secondary/20 blur-3xl" />
        <div className="absolute bottom-1/4 right-10 h-56 w-56 animate-blob animation-delay-2000 rounded-full bg-primary/30 blur-3xl" />
        <div className="relative flex h-full flex-col items-center justify-center pt-16 text-center px-4">
          <h1 className="text-4xl font-bold text-white sm:text-5xl">Cold Chain Logistics</h1>
        </div>
      </section>

      {/* BREADCRUMB */}
      <div style={{ background: '#eef2ff' }} className="border-b border-white/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3 flex items-center gap-2 text-sm text-muted-foreground">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <span>/</span>
          <Link href="/products" className="hover:text-primary transition-colors">Products</Link>
          <span>/</span>
          <span className="text-primary font-medium">Cold Chain Logistics</span>
        </div>
      </div>

      {/* PRODUCT GRID */}
      <section className="py-16" style={{ background: '#eef2ff' }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <Reveal animation="fade-up">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold text-primary">Our Cold Chain Logistics Range</h2>
              <p className="mt-2 text-muted-foreground">9 specialized products for temperature-controlled transport and logistics</p>
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

                    {/* View More → PDF */}
                    <a href={product.brochure} target="_blank" rel="noopener noreferrer" className="mb-3">
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
            <h2 className="text-3xl font-bold text-white sm:text-4xl mb-4">Need a Cold Chain Logistics Solution?</h2>
            <p className="mx-auto max-w-2xl text-lg text-white/80 mb-8">
              Talk to our experts for the right cold chain transport solution tailored to your requirements.
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
