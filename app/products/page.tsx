'use client';

import { Suspense } from 'react';
import { ArrowRight, Refrigerator, Thermometer, FlaskConical, Droplet, Layers, Wind } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Reveal } from '@/components/site/reveal';

const products = [
  {
    name: 'Preservation',
    shortName: 'Preservation',
    description: 'Advanced preservation solutions for biological samples and medical supplies.',
    icon: Refrigerator,
    image: '/images/Products/Product_1.jpg',
    href: '/preservation',
  },
  {
    name: 'Vaccine Storage Solution',
    shortName: 'Vaccine Storage',
    description: 'WHO-certified vaccine storage and cold-chain solutions for immunization programs.',
    icon: Thermometer,
    image: '/images/Products/Product_2.png',
    href: '/vaccine-storage-solution',
  },
  {
    name: 'Laboratory Equipment',
    shortName: 'Lab Equipment',
    description: 'Essential instruments for daily laboratory operations and analytical procedures.',
    icon: FlaskConical,
    image: '/images/Products/Product_3.png',
    href: '/laboratory-equipment',
  },
  {
    name: 'Blood Bank Solution',
    shortName: 'Blood Bank',
    description: 'Specialized equipment for blood banking, storage, and transfusion services.',
    icon: Droplet,
    image: '/images/Products/Product_4.png',
    href: '/blood-bank-solutions',
  },
  {
    name: 'Cold Chain Logistic',
    shortName: 'Cold Chain',
    description: 'End-to-end cold chain logistics solutions for temperature-sensitive shipments.',
    icon: Layers,
    image: '/images/Products/Product_5.png',
    href: '/cold-chain-logistics',
  },
  {
    name: 'Cryo Preservation',
    shortName: 'Cryo',
    description: 'Cryogenic storage and preservation systems for long-term biological sample storage.',
    icon: Wind,
    image: '/images/Products/Product_6.png',
    href: '/cryo-preservation',
  },
];

function ProductsContent() {
  return (
    <div className="overflow-hidden">

      {/* ====================== HERO ====================== */}
      <section className="relative gradient-mesh" style={{ height: '300px' }}>
        <div className="absolute top-1/4 left-10 h-48 w-48 animate-blob rounded-full bg-secondary/20 blur-3xl" />
        <div className="absolute bottom-1/4 right-10 h-56 w-56 animate-blob animation-delay-2000 rounded-full bg-primary/30 blur-3xl" />
        <div className="relative flex h-full items-center justify-center pt-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white sm:text-5xl">
              Our{' '}
              <span className="text-secondary">Products</span>
            </h1>
          </div>
        </div>
      </section>

      {/* ====================== PRODUCT CARDS ====================== */}
      <section className="py-16" style={{ background: '#eef2ff' }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product, i) => (
              <Reveal key={i} animation="fade-up" delay={i * 80}>
                <div
                  className="group relative overflow-hidden rounded-3xl transition-all duration-500 hover:-translate-y-2"
                  style={{ background: '#eef2ff', boxShadow: '8px 8px 20px #c5cce8, -8px -8px 20px #ffffff' }}
                >
                  {/* image area */}
                  <div className="relative overflow-hidden" style={{ height: '240px' }}>
                    <div
                      className="absolute inset-0 transition-transform duration-700 group-hover:scale-110"
                      style={{ background: 'linear-gradient(135deg, #e8eeff 0%, #fce8f8 100%)' }}
                    />
                    <img
                      src={product.image}
                      alt={product.name}
                      className="absolute inset-0 w-full h-full object-contain p-6 transition-transform duration-700 group-hover:scale-110"
                    />
                    {/* top badge */}
                    <div className="absolute top-4 left-4">
                      <div
                        className="flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold text-white"
                        style={{ background: 'linear-gradient(135deg,#3a5da5,#f888d6)' }}
                      >
                        <product.icon className="h-3 w-3" />
                        {product.shortName}
                      </div>
                    </div>
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{ background: 'linear-gradient(to top, rgba(58,93,165,0.15) 0%, transparent 60%)' }}
                    />
                  </div>

                  {/* content area */}
                  <div className="p-6">
                    <div
                      className="mb-4 h-0.5 w-full rounded-full"
                      style={{ background: 'linear-gradient(90deg, #3a5da5, #f888d6, transparent)' }}
                    />
                    <h3 className="text-xl font-bold text-primary mb-2 group-hover:text-secondary transition-colors duration-300">
                      {product.name}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-6 line-clamp-2">
                      {product.description}
                    </p>

                    <Link href={product.href}>
                      <button
                        className="w-full flex items-center justify-center gap-2 rounded-2xl py-3 text-sm font-semibold transition-all duration-300 group/btn"
                        style={{ background: '#eef2ff', boxShadow: '4px 4px 10px #c5cce8, -4px -4px 10px #ffffff', color: '#3a5da5' }}
                        onMouseEnter={(e) => {
                          (e.currentTarget as HTMLButtonElement).style.background = 'linear-gradient(135deg,#3a5da5,#f888d6)';
                          (e.currentTarget as HTMLButtonElement).style.color = '#ffffff';
                          (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 8px 20px rgba(58,93,165,0.3)';
                        }}
                        onMouseLeave={(e) => {
                          (e.currentTarget as HTMLButtonElement).style.background = '#eef2ff';
                          (e.currentTarget as HTMLButtonElement).style.color = '#3a5da5';
                          (e.currentTarget as HTMLButtonElement).style.boxShadow = '4px 4px 10px #c5cce8, -4px -4px 10px #ffffff';
                        }}
                      >
                        View More
                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                      </button>
                    </Link>
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
        <div className="relative flex min-h-[380px] items-center justify-center px-4 py-16 text-center sm:px-6 lg:px-8">
          <Reveal animation="fade-up">
            <h2 className="text-3xl font-bold text-white sm:text-4xl mb-4">Need a Custom Solution?</h2>
            <p className="mx-auto max-w-2xl text-lg text-white/80 mb-8">
              We provide specialized solutions to satisfy your unique needs. Contact us today to discuss your requirements.
            </p>
            <Link href="/contact">
              <Button size="lg" className="border-0 text-primary font-bold group px-8 py-6 text-base shadow-2xl hover:opacity-90" style={{ background: '#ffffff' }}>
                Contact Now
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </Reveal>
        </div>
      </section>

    </div>
  );
}

export default function ProductsPage() {
  return (
    <Suspense fallback={<div className="min-h-screen" />}>
      <ProductsContent />
    </Suspense>
  );
}
