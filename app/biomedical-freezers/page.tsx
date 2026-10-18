'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { ArrowRight, Phone, Zap, ChevronLeft, ChevronRight, BookOpen, ShoppingCart, Thermometer, Volume2, Bell, Leaf, ChevronDown } from 'lucide-react';
import { Reveal } from '@/components/site/reveal';

const PHONE = '+919384443550';

const slides = [
  '/images/Preservation/25°C Biomedical Freezer.png',
  '/images/Preservation/30°C Biomedical Freezer.png',
  '/images/Preservation/40°C-Double-Door-Biomedical-Freezer.png',
  '/images/Preservation/biomedical_4.png',
];

const relatedProducts = [
  {
    title: '-60°C Biomedical Freezer',
    image: '/images/Preservation/60℃-Biomedical-Freezer.webp',
    brochure: '/Brouchers/Preservation/Catalogue-Biomedical-Freezers-25-30-40-60.pdf',
  },
  {
    title: '-40°C Biomedical Freezer',
    image: '/images/Preservation/40°C-Biomedical-Freezer.webp',
    brochure: '/Brouchers/Preservation/Catalogue-Biomedical-Freezers-25-30-40-60.pdf',
  },
  {
    title: '-30°C Biomedical Freezer',
    image: '/images/Preservation/30℃-Biomedical-Freezer-Direct-Cooling.webp',
    brochure: '/Brouchers/Preservation/Catalogue-Biomedical-Freezers-25-30-40-60.pdf',
  },
  {
    title: '-25°C Biomedical Freezer',
    image: '/images/Preservation/25°C-Biomedical-Freezer.webp',
    brochure: '/Brouchers/Preservation/Catalogue-Biomedical-Freezers-25-30-40-60.pdf',
  },
];

const features = [
  {
    icon: Thermometer,
    title: 'Versatile Purposes',
    desc: 'Our products are suitable and highly recommended for storing a wide variety of biological products',
  },
  {
    icon: Volume2,
    title: 'Low noise output',
    desc: 'Noise cancelling technology yields a smoother operation and a sound level of less than 43dB(A).',
  },
  {
    icon: Bell,
    title: 'Multiple alarm system',
    desc: 'Includes temperature alarm, system failure, system malfunction, remote alarm contact, remote monitoring, self diagnosis & etc',
  },
  {
    icon: Leaf,
    title: 'HC refrigerant system',
    desc: 'Optimized to improve refrigeration efficiency by 30%, and save energy by about 50%.',
  },
];

export default function BiomedicalFreezersPage() {
  const [current, setCurrent] = useState(0);
  const [openFeature, setOpenFeature] = useState<number | null>(null);
  const paused = useRef(false);

  const prev = () => setCurrent((c) => (c - 1 + slides.length) % slides.length);
  const next = () => setCurrent((c) => (c + 1) % slides.length);

  useEffect(() => {
    const timer = setInterval(() => {
      if (!paused.current) setCurrent((c) => (c + 1) % slides.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="overflow-hidden">

      {/* ====================== HERO ====================== */}
      <section className="relative gradient-mesh" style={{ height: '300px' }}>
        <div className="absolute top-1/4 left-10 h-48 w-48 animate-blob rounded-full bg-secondary/20 blur-3xl" />
        <div className="absolute bottom-1/4 right-10 h-56 w-56 animate-blob animation-delay-2000 rounded-full bg-primary/30 blur-3xl" />
        <div className="relative flex h-full flex-col items-center justify-center pt-16 text-center px-4">
          <h1 className="text-4xl font-bold text-white sm:text-5xl">Biomedical Freezers</h1>
          <p className="mt-3 text-lg text-white/80">(-25℃, -30℃, -40℃ &amp; -60℃)</p>
        </div>
      </section>

      {/* ====================== BREADCRUMB ====================== */}
      <div style={{ background: '#eef2ff' }} className="border-b border-white/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3 flex items-center gap-2 text-sm text-muted-foreground">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <span>/</span>
          <Link href="/products" className="hover:text-primary transition-colors">Products</Link>
          <span>/</span>
          <Link href="/preservation" className="hover:text-primary transition-colors">Preservation</Link>
          <span>/</span>
          <span className="text-primary font-medium">Biomedical Freezers</span>
        </div>
      </div>

      {/* ====================== MAIN CONTENT ====================== */}
      <section className="py-16" style={{ background: '#eef2ff' }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 items-start">

            {/* ---- Slider ---- */}
            <Reveal animation="fade-in">
              <div className="flex flex-col gap-4">
                <div
                  className="relative overflow-hidden rounded-3xl"
                  style={{ background: 'linear-gradient(135deg, #e8eeff 0%, #fce8f8 100%)', boxShadow: '8px 8px 20px #c5cce8, -8px -8px 20px #ffffff', height: '420px' }}
                  onMouseEnter={() => { paused.current = true; }}
                  onMouseLeave={() => { paused.current = false; }}
                >
                  <img
                    src={slides[current]}
                    alt="Biomedical Freezer"
                    className="absolute inset-0 w-full h-full object-contain p-8 transition-all duration-500"
                  />
                  {/* nav buttons */}
                  <button
                    onClick={prev}
                    className="absolute left-3 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full transition-all duration-200"
                    style={{ background: 'rgba(255,255,255,0.85)', boxShadow: '2px 2px 8px rgba(58,93,165,0.2)', color: '#3a5da5' }}
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <button
                    onClick={next}
                    className="absolute right-3 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full transition-all duration-200"
                    style={{ background: 'rgba(255,255,255,0.85)', boxShadow: '2px 2px 8px rgba(58,93,165,0.2)', color: '#3a5da5' }}
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                  {/* dots */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                    {slides.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setCurrent(i)}
                        className="h-2 rounded-full transition-all duration-300"
                        style={{ width: i === current ? '24px' : '8px', background: i === current ? '#3a5da5' : '#c5cce8' }}
                      />
                    ))}
                  </div>
                  {/* thumbnails */}
                  <div className="absolute bottom-10 right-3 flex flex-col gap-1.5">
                    {slides.map((img, i) => (
                      <button
                        key={i}
                        onClick={() => setCurrent(i)}
                        className="h-12 w-12 overflow-hidden rounded-xl border-2 transition-all duration-200"
                        style={{ borderColor: i === current ? '#3a5da5' : 'rgba(255,255,255,0.8)', boxShadow: '2px 2px 8px rgba(58,93,165,0.15)' }}
                      >
                        <img src={img} alt="" className="h-full w-full object-contain bg-white/60 p-1" />
                      </button>
                    ))}
                  </div>
                </div>

                {/* ---- Buttons under slider ---- */}
                <div className="flex gap-3 mt-10">
                  <a href={`tel:${PHONE}`} className="flex-1">
                    <button
                      className="w-full flex items-center justify-center gap-2 rounded-2xl py-3 text-sm font-semibold transition-all duration-300"
                      style={{ background: 'linear-gradient(135deg,#3a5da5,#2d4a87)', color: '#ffffff', boxShadow: '0 4px 14px rgba(58,93,165,0.35)' }}
                      onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.opacity = '0.88'; }}
                      onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.opacity = '1'; }}
                    >
                      <ShoppingCart className="h-4 w-4" />
                      Buy Now
                    </button>
                  </a>
                  <a
                    href="/Brouchers/Preservation/Catalogue-Biomedical-Freezers-25-30-40-60.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1"
                  >
                    <button
                      className="w-full flex items-center justify-center gap-2 rounded-2xl py-3 text-sm font-semibold transition-all duration-300"
                      style={{ background: '#eef2ff', boxShadow: '4px 4px 10px #c5cce8, -4px -4px 10px #ffffff', color: '#3a5da5' }}
                      onMouseEnter={(e) => {
                        const el = e.currentTarget as HTMLButtonElement;
                        el.style.background = 'linear-gradient(135deg,#f888d6,#e060b8)';
                        el.style.color = '#ffffff';
                        el.style.boxShadow = '0 8px 20px rgba(248,136,214,0.3)';
                      }}
                      onMouseLeave={(e) => {
                        const el = e.currentTarget as HTMLButtonElement;
                        el.style.background = '#eef2ff';
                        el.style.color = '#3a5da5';
                        el.style.boxShadow = '4px 4px 10px #c5cce8, -4px -4px 10px #ffffff';
                      }}
                    >
                      <BookOpen className="h-4 w-4" />
                      View Brochure
                    </button>
                  </a>
                </div>
              </div>
            </Reveal>

            {/* ---- Text content ---- */}
            <Reveal animation="fade-up">
              <div>
                <h2 className="text-2xl font-bold text-primary mb-4">Biomedical Freezer</h2>
                <div
                  className="mb-5 h-0.5 w-24 rounded-full"
                  style={{ background: 'linear-gradient(90deg, #3a5da5, #f888d6)' }}
                />
                <p className="text-muted-foreground leading-relaxed mb-4">
                  A versatile low-temperature freezer installed in hospitals, blood stations, diseases control &amp; prevention centers, research institutions, bioscience laboratories and medical laboratories. It is suitable for storing a wide variety of biological products including viruses, bacteria, red blood cells, white blood cells, skin, bone and semen as well as ocean-going supplies and electronic devices. It can also provide a low-temperature environment for testing of special materials.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  The secondary application is for the storage of fishery products such as tuna, Australian lobster, salmon, South American shrimps, Argentina red shrimp, top-quality beef, kanpachi, octopus, yellowtail, bonito fish, grouper, and fugu rubripes. This is a requirement for fishery products for human consumption and hence these freezers are popular among professional oceanic fisherman, seafood distributors, speciality seafood stores and sushi restaurants and commercial food manufacturers.
                </p>

                {/* Contact */}
                <div
                  className="mb-6 rounded-2xl p-4 flex items-center gap-3"
                  style={{ background: '#eef2ff', boxShadow: '4px 4px 10px #c5cce8, -4px -4px 10px #ffffff' }}
                >
                  <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                  <div>
                    <p className="text-xs text-muted-foreground">Contact Us</p>
                    <a href={`tel:${PHONE}`} className="font-bold text-primary hover:text-secondary transition-colors">
                      +91 93844 43550
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ====================== RELATED PRODUCTS ====================== */}
      <section className="py-16" style={{ background: '#eef2ff' }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal animation="fade-up">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold text-primary">Related Products</h2>
              <p className="mt-2 text-muted-foreground">Explore our full range of biomedical freezers</p>
            </div>
          </Reveal>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {relatedProducts.map((product, i) => (
              <Reveal key={i} animation="fade-up" delay={i * 80}>
                <div
                  className="group flex flex-col overflow-hidden rounded-3xl transition-all duration-500 hover:-translate-y-2"
                  style={{ background: '#eef2ff', boxShadow: '8px 8px 20px #c5cce8, -8px -8px 20px #ffffff' }}
                >
                  {/* image */}
                  <div
                    className="relative overflow-hidden"
                    style={{ height: '200px', background: 'linear-gradient(135deg, #e8eeff 0%, #fce8f8 100%)' }}
                  >
                    <img
                      src={product.image}
                      alt={product.title}
                      className="absolute inset-0 w-full h-full object-contain p-6 transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>

                  {/* content */}
                  <div className="flex flex-1 flex-col p-5">
                    <div
                      className="mb-3 h-0.5 w-full rounded-full"
                      style={{ background: 'linear-gradient(90deg, #3a5da5, #f888d6, transparent)' }}
                    />
                    <h3 className="text-sm font-bold text-primary mb-6 group-hover:text-secondary transition-colors duration-300">
                      {product.title}
                    </h3>

                    {/* View More → opens brochure */}
                    <a href={product.brochure} target="_blank" rel="noopener noreferrer" className="mb-3">
                      <button
                        className="w-full flex items-center justify-center gap-2 rounded-2xl py-2.5 text-sm font-semibold transition-all duration-300 group/btn"
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
                    <div className="flex gap-2 mt-4">
                      <Link href="/contact" className="flex-1">
                        <button
                          className="w-full flex items-center justify-center gap-1.5 rounded-2xl py-2 text-xs font-semibold transition-all duration-300"
                          style={{ background: 'linear-gradient(135deg,#3a5da5,#2d4a87)', color: '#ffffff', boxShadow: '0 4px 14px rgba(58,93,165,0.35)' }}
                          onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.opacity = '0.88'; }}
                          onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.opacity = '1'; }}
                        >
                          <Zap className="h-3 w-3" />
                          Hurry Up
                        </button>
                      </Link>
                      <a href={`tel:${PHONE}`} className="flex-1">
                        <button
                          className="w-full flex items-center justify-center gap-1.5 rounded-2xl py-2 text-xs font-semibold transition-all duration-300"
                          style={{ background: 'linear-gradient(135deg,#f888d6,#e060b8)', color: '#ffffff', boxShadow: '0 4px 14px rgba(248,136,214,0.4)' }}
                          onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.opacity = '0.88'; }}
                          onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.opacity = '1'; }}
                        >
                          <Phone className="h-3 w-3" />
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

      {/* ====================== FEATURES ====================== */}
      <section className="py-16" style={{ background: '#eef2ff' }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal animation="fade-up">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold text-primary">Features</h2>
            </div>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2">
            {features.map((f, i) => (
              <Reveal key={i} animation="fade-up" delay={i * 80}>
                <div
                  className="overflow-hidden rounded-2xl transition-all duration-300"
                  style={{ background: '#eef2ff', boxShadow: '6px 6px 16px #c5cce8, -6px -6px 16px #ffffff' }}
                >
                  {/* accordion header */}
                  <button
                    className="w-full flex items-center gap-4 p-5 text-left"
                    onClick={() => setOpenFeature(openFeature === i ? null : i)}
                  >
                    <div
                      className="flex-shrink-0 flex h-12 w-12 items-center justify-center rounded-xl"
                      style={{ background: 'linear-gradient(135deg,#3a5da5,#f888d6)', boxShadow: '0 4px 12px rgba(58,93,165,0.25)' }}
                    >
                      <f.icon className="h-6 w-6 text-white" />
                    </div>
                    <span className="flex-1 text-base font-bold text-primary">{f.title}</span>
                    <ChevronDown
                      className="h-5 w-5 text-primary transition-transform duration-300"
                      style={{ transform: openFeature === i ? 'rotate(180deg)' : 'rotate(0deg)' }}
                    />
                  </button>
                  {/* accordion body */}
                  <div
                    className="overflow-hidden transition-all duration-300"
                    style={{ maxHeight: openFeature === i ? '200px' : '0px' }}
                  >
                    <p className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed">
                      {f.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
