'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { ArrowRight, Phone, Zap, ChevronLeft, ChevronRight, BookOpen, ShoppingCart, ChevronDown, Thermometer, Settings, Shield, RefreshCw, Wind, Bell, Lightbulb, LayoutGrid } from 'lucide-react';
import { Reveal } from '@/components/site/reveal';

const PHONE = '+919944663593';

const slides = [
  '/images/Preservation/Walk-in-ColdFreezer-Room.png',
  '/images/Preservation/SDD-Cold-Room.png',
  '/images/Preservation/Coldroom_3.png',
  '/images/Preservation/Coldroom_4.png',
  '/images/Preservation/Coldroom_5.png',
];

const relatedProducts = [
  {
    title: 'Cold Room',
    image: '/images/Preservation/Coldroom_4.png',
    brochure: '/Brouchers/Preservation/Vaccine-Walk-in-ColdFreezer-Room-Flyer-2024.10.17.pdf',
  },
  {
    title: 'Solar Direct Driven Cold Room',
    image: '/images/Preservation/SDD-Cold-Room.png',
    brochure: '/Brouchers/Preservation/Vaccine-Walk-in-ColdFreezer-Room-Flyer-2024.10.17.pdf',
  },
  {
    title: 'Walk-in Cold-Freezer Room',
    image: '/images/Preservation/Coldroom_5.png',
    brochure: '/Brouchers/Preservation/Vaccine-Walk-in-ColdFreezer-Room-Flyer-2024.10.17.pdf',
  },
];

const features = [
  {
    icon: Thermometer,
    title: 'Adjustable Temperature',
    desc: 'The set point of the cold room has an adjustable range of 0°C to 10°C (or -15°C to -25°C for the Freezer Room) with a resolution of 0.1°C.',
  },
  {
    icon: Shield,
    title: 'Durable Construction',
    desc: 'Internal and exterior surfaces are made up of hot-dipped galvanized steel sheet, coated in a white polyester coating. The floor is clad with non-slip material.',
  },
  {
    icon: Wind,
    title: 'High-Efficiency Insulation',
    desc: 'CFC-free polyurethane insulation foamed into place. With a density of 42kg/m³, a thickness of 100mm and an insulation K-value of 0.22 W/(m²)(K) or better.',
  },
  {
    icon: Settings,
    title: 'Change-over Switch',
    desc: 'A manual change-over switch is offered as standard, an automatic change-over switch is available as an optional extra.',
  },
  {
    icon: RefreshCw,
    title: 'Automatic Defrosting',
    desc: 'Automatic defrosting system ensures consistent performance and reduces manual maintenance requirements.',
  },
  {
    icon: Bell,
    title: 'Alarm System',
    desc: 'Temperature recorder and audible alarm system.',
  },
  {
    icon: Lightbulb,
    title: 'CFC-free & Lighting',
    desc: 'CFC-free refrigerant used throughout.Rooms are equipped with tungsten lighting for safe interior visibility.',
  },
  {
    icon: LayoutGrid,
    title: 'Dual Refrigeration & Shelving',
    desc: 'Rooms are equipped with shelving systems on 3 of their walls. Dual refrigeration system – while one system is working, the other one is reserved as a back-up.',
  },
];

export default function ColdRoomPage() {
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
          <h1 className="text-4xl font-bold text-white sm:text-5xl">Cold Room & Walk-in Freezer</h1>
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
          <span className="text-primary font-medium">Cold Room & Walk-in Freezer</span>
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
                    alt="Cold Room"
                    className="absolute inset-0 w-full h-full object-contain p-8 transition-all duration-500"
                  />
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
                    href="/Brouchers/Preservation/Vaccine-Walk-in-ColdFreezer-Room-Flyer-2024.10.17.pdf"
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
              <div className="mt-16 lg:mt-16">
                <h2 className="text-2xl font-bold text-primary mb-4">Cold Room & Walk-in Freezer</h2>
                <div
                  className="mb-5 h-0.5 w-24 rounded-full"
                  style={{ background: 'linear-gradient(90deg, #3a5da5, #f888d6)' }}
                />
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Haier Biomedical walk-in cold rooms are for storage of vaccines and other temperature sensitive products. The complete unit is also designed for installations in housed areas such as warehouses to meet specified temperature standards. These units have been installed in India, Guinea, Syria, Pakistan, Burundi, Zimbabwe and other regions across the world.
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
                      +91 99446 63593
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
              <p className="mt-2 text-muted-foreground">Explore our full range of cold room solutions</p>
            </div>
          </Reveal>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {relatedProducts.map((product, i) => (
              <Reveal key={i} animation="fade-up" delay={i * 80}>
                <div
                  className="group flex flex-col overflow-hidden rounded-3xl transition-all duration-500 hover:-translate-y-2"
                  style={{ background: '#eef2ff', boxShadow: '8px 8px 20px #c5cce8, -8px -8px 20px #ffffff' }}
                >
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

                  <div className="flex flex-1 flex-col p-5">
                    <div
                      className="mb-3 h-0.5 w-full rounded-full"
                      style={{ background: 'linear-gradient(90deg, #3a5da5, #f888d6, transparent)' }}
                    />
                    <h3 className="text-sm font-bold text-primary mb-6 group-hover:text-secondary transition-colors duration-300">
                      {product.title}
                    </h3>

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
              <Reveal key={i} animation="fade-up" delay={i * 60}>
                <div
                  className="overflow-hidden rounded-2xl transition-all duration-300"
                  style={{ background: '#eef2ff', boxShadow: '6px 6px 16px #c5cce8, -6px -6px 16px #ffffff' }}
                >
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
