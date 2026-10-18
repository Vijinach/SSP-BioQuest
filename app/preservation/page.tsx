'use client';

import Link from 'next/link';
import { ArrowRight, Phone, Zap } from 'lucide-react';
import { Reveal } from '@/components/site/reveal';

const PHONE = '+919876543210'; // replace with actual number

const products = [
  {
    id: 'biomedical-cryo-freezers',
    name: 'Biomedical & Cryo Freezers',
    images: [
      '/images/Preservation/30°C Biomedical Freezer.png',
      '/images/Preservation/25°C Biomedical Freezer.png',
      '/images/Preservation/40°C-Double-Door-Biomedical-Freezer.png',
    ],
  },
  {
    id: 'cold-room-walk-in-freezer',
    name: 'Cold Room & Walk-in Freezer',
    images: [
      '/images/Preservation/Preservation_2.png',
      '/images/Preservation/Walk-in-ColdFreezer-Room.png',
      '/images/Preservation/SDD-Cold-Room.png',
    ],
  },
  {
    id: 'laboratory-refrigerator',
    name: 'Laboratory Refrigerator',
    images: [
      '/images/Preservation/lab_1.png',
      '/images/Preservation/lab_2.png',
      '/images/Preservation/refrigirator_1.png',
    ],
  },
  {
    id: 'pharmacy-automation',
    name: 'Pharmacy Automation',
    images: [
      '/images/Preservation/Anesthetic-Medication-Dispensing-Cabinet-2024.5.15.png',
      '/images/Preservation/Medication-Dispensing-System-2024.05.31.png',
      '/images/Preservation/automation_3.jpg',
    ],
  },
  {
    id: 'pharmacy-refrigerator',
    name: 'Pharmacy Refrigerator',
    images: [
      '/images/Preservation/refrigirator_2.png',
      '/images/Preservation/refrigirator_3.png',
      '/images/Preservation/HYC-1100C-Right.png',
    ],
  },
  {
    id: 'spark-free-refrigerator-freezer',
    name: 'Spark Free Refrigerator & Freezer',
    images: [
      '/images/Preservation/HLRF-319SF-Open.png',
      '/images/Preservation/spark_2.png',
      '/images/Preservation/spark_3.png',
    ],
  },
];

export default function PreservationPage() {
  return (
    <div className="overflow-hidden">

      {/* ====================== HERO ====================== */}
      <section className="relative gradient-mesh" style={{ height: '300px' }}>
        <div className="absolute top-1/4 left-10 h-48 w-48 animate-blob rounded-full bg-secondary/20 blur-3xl" />
        <div className="absolute bottom-1/4 right-10 h-56 w-56 animate-blob animation-delay-2000 rounded-full bg-primary/30 blur-3xl" />
        <div className="relative flex h-full flex-col items-center justify-center pt-16 text-center px-4">
          <h1 className="text-4xl font-bold text-white sm:text-5xl">
            Preservation
          </h1>
        </div>
      </section>

      {/* ====================== BREADCRUMB ====================== */}
      <div style={{ background: '#eef2ff' }} className="border-b border-white/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3 flex items-center gap-2 text-sm text-muted-foreground">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <span>/</span>
          <Link href="/products" className="hover:text-primary transition-colors">Products</Link>
          <span>/</span>
          <span className="text-primary font-medium">Preservation</span>
        </div>
      </div>

      {/* ====================== PRODUCT GRID ====================== */}
      <section className="py-16" style={{ background: '#eef2ff' }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <Reveal animation="fade-up">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold text-primary">Our Preservation Range</h2>
              <p className="mt-2 text-muted-foreground">6 specialized product categories for every cold storage need</p>
            </div>
          </Reveal>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product, i) => (
              <Reveal key={product.id} animation="fade-up" delay={i * 80}>
                <div
                  className="group flex flex-col overflow-hidden rounded-3xl transition-all duration-500 hover:-translate-y-2"
                  style={{ background: '#eef2ff', boxShadow: '8px 8px 20px #c5cce8, -8px -8px 20px #ffffff' }}
                >
                  {/* ---- image area with 3-image collage ---- */}
                  <div className="relative overflow-hidden" style={{ height: '240px' }}>
                    <div
                      className="absolute inset-0"
                      style={{ background: 'linear-gradient(135deg, #e8eeff 0%, #fce8f8 100%)' }}
                    />
                    {/* main image */}
                    <img
                      src={product.images[0]}
                      alt={product.name}
                      className="absolute inset-0 w-full h-full object-contain p-6 transition-transform duration-700 group-hover:scale-105"
                    />
                    {/* small thumbnails bottom-right */}
                    <div className="absolute bottom-3 right-3 flex gap-1.5">
                      {product.images.slice(1).map((img, idx) => (
                        <div
                          key={idx}
                          className="h-12 w-12 overflow-hidden rounded-xl border-2 border-white/80"
                          style={{ boxShadow: '2px 2px 8px rgba(58,93,165,0.15)' }}
                        >
                          <img src={img} alt="" className="h-full w-full object-contain bg-white/60 p-1" />
                        </div>
                      ))}
                    </div>
                    {/* hover overlay */}
                    {/* <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{ background: 'linear-gradient(to top, rgba(58,93,165,0.12) 0%, transparent 60%)' }}
                    /> */}
                  </div>

                  {/* ---- content ---- */}
                  <div className="flex flex-1 flex-col p-6">
                    <div
                      className="mb-4 h-0.5 w-full rounded-full"
                      style={{ background: 'linear-gradient(90deg, #3a5da5, #f888d6, transparent)' }}
                    />
                    <h3 className="text-lg font-bold text-primary mb-6 group-hover:text-secondary transition-colors duration-300">
                      {product.name}
                    </h3>
                    {/* ---- View More button ---- */}
                    <Link href={product.id === 'biomedical-cryo-freezers' ? '/biomedical-freezers' : product.id === 'cold-room-walk-in-freezer' ? '/cold-room-walk-in-freezer' : product.id === 'laboratory-refrigerator' ? '/laboratory-refrigerator' : product.id === 'pharmacy-automation' ? '/pharmacy-automation' : product.id === 'pharmacy-refrigerator' ? '/pharmacy-refrigerators' : product.id === 'spark-free-refrigerator-freezer' ? '/spark-free-refrigerator-freezer' : `/preservation/${product.id}`} className="mb-3">
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

                    {/* ---- Hurry Up + Ask row ---- */}
                    <div className="flex gap-3 mt-4">
                      {/* Hurry Up → contact */}
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

                      {/* Ask → phone */}
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

      {/* ====================== CTA ====================== */}
      <section className="relative overflow-hidden" style={{ minHeight: '380px' }}>
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(/images/Home_2.png)' }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(58,93,165,0.92) 0%, rgba(45,74,135,0.86) 50%, rgba(248,136,214,0.80) 100%)' }} />
        <div className="absolute -top-16 -left-16 h-56 w-56 animate-blob rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -bottom-16 -right-16 h-64 w-64 animate-blob animation-delay-2000 rounded-full bg-secondary/20 blur-3xl" />
        <div className="relative flex min-h-[380px] items-center justify-center px-4 py-16 text-center">
          <Reveal animation="fade-up">
            <h2 className="text-3xl font-bold text-white sm:text-4xl mb-4">Need a Preservation Solution?</h2>
            <p className="mx-auto max-w-2xl text-lg text-white/80 mb-8">
              Talk to our experts for the right cold storage solution tailored to your requirements.
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
