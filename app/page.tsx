'use client';

import Link from 'next/link';
import {
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Zap,
  Wrench,
  Settings2,
  Layers3,
  Phone,
  Microscope,
  FlaskConical,
  Award,
  Headphones,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Reveal } from '@/components/site/reveal';
import { productCategories } from '@/lib/data';

const features = [
  {
    icon: Layers3,
    title: 'Versatility',
    description: 'Our products are suitable for the broad spectrum of uses, including storage, transportation & etc',
  },
  {
    icon: ShieldCheck,
    title: 'Quality Control',
    description: 'Our products are getting through multiple quality testing processes to make sure it performs beyond your expectations and lasts long',
  },
  {
    icon: Zap,
    title: 'Energy Efficiency',
    description: 'Our solutions are to use resources as efficiently as possible. It reduces the energy consumptions & maintenance cost',
  },
  {
    icon: Wrench,
    title: 'Professional Assistance',
    description: 'Our group of technical experts with utmost professional experience are constantly available to help you around the clock with setup, upkeep & diagnosis.',
  },
  {
    icon: Settings2,
    title: 'Customization',
    description: 'Each of us have individual needs, why have to adjust with standard options??? At SSP BioQuest we provide specialized solutions to satisfy your unique needs',
  },
];

const whyChoose = [
  {
    icon: FlaskConical,
    title: 'Comprehensive Product Range',
    description: 'From essential lab supplies to sophisticated research tools and cold-chain solutions, we offer an extensive range of products to cater to your specific requirements.',
  },
  {
    icon: Award,
    title: 'Unmatched Quality',
    description: 'We source our products from top-tier manufacturers, guaranteeing that every item meets stringent standards for performance, durability, and precision.',
  },
  {
    icon: Microscope,
    title: 'Tailored Solutions',
    description: "We understand that every research endeavor is unique. That’s why we work closely with you to deliver customized solutions that align with your goals and challenges.",
  },
  {
    icon: Headphones,
    title: 'Expert Technical Support',
    description: 'Our dedicated team of technical experts ensures your operations run seamlessly with professional guidance, troubleshooting, and ongoing maintenance support.',
  },
];

import { useState } from 'react';

function scrollToWelcome() {
  document.getElementById('welcome')?.scrollIntoView({ behavior: 'smooth' });
}

function FeaturesAccordion() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <>
      {/* Desktop: 5-column horizontal expand */}
      <div className="hidden md:flex gap-3 h-80">
        {features.map((feature, i) => {
          const isOpen = openIndex === i;
          return (
            <div
              key={feature.title}
              onClick={() => setOpenIndex(i)}
              className="relative cursor-pointer rounded-2xl overflow-hidden transition-all duration-500 flex flex-col justify-end"
              style={{
                flex: isOpen ? '4' : '1',
                background: isOpen ? 'linear-gradient(160deg, #3a5da5 0%, #2d4a87 100%)' : '#eef2ff',
                boxShadow: isOpen
                  ? '8px 8px 20px #c5cce8, -8px -8px 20px #ffffff'
                  : '5px 5px 14px #c5cce8, -5px -5px 14px #ffffff',
                minWidth: 0,
              }}
            >
              {!isOpen && (
                <div className="flex flex-col items-center justify-center h-full gap-4 px-2 py-6">
                  <div
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl"
                    style={{ background: '#eef2ff', boxShadow: '4px 4px 10px #c5cce8, -4px -4px 10px #ffffff' }}
                  >
                    <feature.icon className="h-5 w-5 text-primary" />
                  </div>
                  <p
                    className="text-xs font-semibold text-primary tracking-widest uppercase"
                    style={{ writingMode: 'vertical-rl', textOrientation: 'mixed', transform: 'rotate(180deg)' }}
                  >
                    {feature.title}
                  </p>
                </div>
              )}
              {isOpen && (
                <div className="flex flex-col justify-between h-full p-7">
                  <div>
                    <div
                      className="flex h-14 w-14 items-center justify-center rounded-xl mb-5"
                      style={{ background: 'rgba(255,255,255,0.15)', boxShadow: 'inset 3px 3px 8px rgba(0,0,0,0.15), inset -3px -3px 8px rgba(255,255,255,0.1)' }}
                    >
                      <feature.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                    <p className="text-sm leading-relaxed text-white/80">{feature.description}</p>
                  </div>
                  <div className="mt-4 flex items-center gap-2">
                    <div className="h-1 w-8 rounded-full bg-secondary" />
                    <div className="h-1 w-4 rounded-full bg-white/30" />
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Mobile: vertical row accordion */}
      <div className="flex flex-col gap-3 md:hidden">
        {features.map((feature, i) => {
          const isOpen = openIndex === i;
          return (
            <div
              key={feature.title}
              className="overflow-hidden rounded-2xl cursor-pointer transition-all duration-300"
              style={{
                background: '#eef2ff',
                boxShadow: isOpen
                  ? '8px 8px 20px #c5cce8, -8px -8px 20px #ffffff'
                  : '4px 4px 12px #c5cce8, -4px -4px 12px #ffffff',
              }}
              onClick={() => setOpenIndex(i)}
            >
              {/* Header */}
              <div className="flex items-center gap-4 px-5 py-4">
                <div
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl transition-all duration-300"
                  style={{
                    background: '#eef2ff',
                    boxShadow: isOpen
                      ? 'inset 4px 4px 10px #c5cce8, inset -4px -4px 10px #ffffff'
                      : '4px 4px 10px #c5cce8, -4px -4px 10px #ffffff',
                  }}
                >
                  <feature.icon className={`h-5 w-5 transition-colors duration-300 ${isOpen ? 'text-secondary' : 'text-primary'}`} />
                </div>
                <h3 className={`flex-1 text-base font-semibold transition-colors duration-300 ${isOpen ? 'text-secondary' : 'text-foreground'}`}>
                  {feature.title}
                </h3>
                <div
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full"
                  style={{ background: '#eef2ff', boxShadow: '3px 3px 8px #c5cce8, -3px -3px 8px #ffffff' }}
                >
                  <ArrowRight className={`h-4 w-4 text-primary transition-transform duration-300 ${isOpen ? 'rotate-90' : ''}`} />
                </div>
              </div>
              {/* Content */}
              <div style={{ maxHeight: isOpen ? '200px' : '0px', overflow: 'hidden', transition: 'max-height 0.35s ease' }}>
                <div
                  className="mx-4 mb-4 rounded-xl px-4 py-3"
                  style={{ background: '#eef2ff', boxShadow: 'inset 3px 3px 8px #c5cce8, inset -3px -3px 8px #ffffff' }}
                >
                  <p className="text-sm leading-relaxed text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default function HomePage() {
  return (
    <div className="overflow-hidden">

      {/* ====================== HERO ====================== */}
      <section className="relative flex min-h-screen items-center justify-center gradient-mesh pt-20 pb-12">
        <div className="absolute top-1/4 left-10 h-72 w-72 animate-blob rounded-full bg-secondary/20 blur-3xl" />
        <div className="absolute bottom-1/4 right-10 h-96 w-96 animate-blob animation-delay-2000 rounded-full bg-primary/30 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 h-64 w-64 -translate-x-1/2 animate-blob animation-delay-1000 rounded-full bg-secondary/10 blur-3xl" />
        <div className="absolute inset-0 overflow-hidden">
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className="absolute h-2 w-2 rounded-full bg-white/20"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animation: `float ${4 + Math.random() * 6}s ease-in-out ${Math.random() * 5}s infinite`,
              }}
            />
          ))}
        </div>

        {/* Scroll mouse indicator — clickable */}
        <button
          onClick={scrollToWelcome}
          aria-label="Scroll down"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 group cursor-pointer focus:outline-none"
        >
          <div className="flex h-10 w-6 justify-center rounded-full border-2 border-white/40 pt-2 transition-all duration-300 group-hover:border-white group-hover:shadow-[0_0_16px_rgba(255,255,255,0.4)]">
            <div className="h-2 w-1 animate-bounce rounded-full bg-white/70 group-hover:bg-white" />
          </div>
          <p className="mt-2 text-xs text-white/50 group-hover:text-white/80 transition-colors duration-300 tracking-widest uppercase">scroll</p>
        </button>
      </section>

      {/* ====================== WELCOME — two column ====================== */}
      <section id="welcome" className="relative overflow-hidden py-24" style={{ background: 'linear-gradient(135deg, #eef2ff 0%, #fdf0fa 100%)' }}>
        {/* decorative blobs */}
        <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-primary/8 blur-3xl" />
        <div className="absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-secondary/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-14 lg:grid-cols-[1fr_420px]">

            {/* LEFT — text */}
            <Reveal animation="slide-in-left">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-white/70 px-4 py-2 text-sm font-medium text-primary backdrop-blur-sm shadow-sm mb-6">
                <Sparkles className="h-4 w-4 text-secondary" />
                Your Trusted Laboratory Partner
              </div>
              <h1 className="text-3xl font-bold leading-tight text-primary sm:text-4xl lg:text-5xl">
                Welcome to{' '}
                <span className="text-secondary">
                  SSP BioQuest
                </span>
              </h1>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                At SSP BioQuest, we empower scientific discovery through the provision of latest laboratory equipment and innovative solutions for your varied laboratory and research needs. Whether advancing life science innovation or seeking breakthroughs in scientific research, we are dedicated to providing the tools and support you need to excel.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/contact">
                  <Button size="lg" className="gradient-secondary border-0 text-white hover:opacity-90 px-8 py-6 text-base group shadow-xl shadow-secondary/25">
                    Contact Now
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
                <Link href="/products">
                  <Button size="lg" variant="outline" className="border-primary/30 bg-white/70 text-primary backdrop-blur-sm hover:bg-white px-8 py-6 text-base shadow-md">
                    Explore Products
                  </Button>
                </Link>
              </div>
            </Reveal>

            {/* RIGHT — image */}
            <Reveal animation="slide-in-right" delay={150}>
              <div className="relative w-full max-w-[420px] mx-auto">
                {/* glow behind image */}
                <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-primary/20 to-secondary/20 blur-2xl" />
                <div
                  className="relative overflow-hidden rounded-3xl"
                  style={{ boxShadow: '0 24px 64px rgba(58,93,165,0.22), 0 0 0 1px rgba(255,255,255,0.6)' }}
                >
                  <img
                    src="/images/Home_1.png"
                    alt="SSP BioQuest Laboratory"
                    className="w-full h-auto object-contain transition-transform duration-700 hover:scale-105"
                  />
                  {/* glass caption */}
                  <div
                    className="absolute bottom-4 left-4 right-4 rounded-2xl px-4 py-3"
                    style={{
                      background: 'rgba(58,93,165,0.55)',
                      backdropFilter: 'blur(14px)',
                      WebkitBackdropFilter: 'blur(14px)',
                      border: '1px solid rgba(255,255,255,0.25)',
                    }}
                  >
                    <p className="text-sm font-semibold text-white">SSP BioQuest — Your Lab Partner</p>
                    <p className="text-xs text-white/75 mt-0.5">Advanced equipment for every research need</p>
                  </div>
                </div>
                {/* floating badge */}
                <div
                  className="absolute -top-5 -right-5 flex h-20 w-20 flex-col items-center justify-center rounded-full text-white shadow-xl animate-float"
                  style={{ background: 'linear-gradient(135deg,#3a5da5,#f888d6)' }}
                >
                  <FlaskConical className="h-7 w-7" />
                  <span className="text-[9px] font-bold mt-0.5 tracking-wide">BioQuest</span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ====================== FEATURES ====================== */}
      <section className="relative py-24" style={{ background: 'linear-gradient(160deg, #f8f9ff 0%, #fdf0fa 100%)' }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="mb-16 text-center">
            <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary mb-3">Our Strengths</span>
            <h2 className="text-3xl font-bold text-primary sm:text-4xl md:text-5xl">Why Choose SSP BioQuest?</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              We deliver excellence through innovation, quality, and dedicated support for all your laboratory needs.
            </p>
          </Reveal>

          <FeaturesAccordion />
        </div>
      </section>

      {/* ====================== ABOUT — image left, text right ====================== */}
      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, #e8eeff 0%, #fce8f8 100%)' }} />
        <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-secondary/10 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="mb-14 text-center">
            <span className="inline-block rounded-full bg-secondary/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-secondary mb-3">About Us</span>
            <h2 className="text-3xl font-bold text-primary sm:text-4xl md:text-5xl">About Us — SSP BioQuest</h2>
          </Reveal>

          <div className="grid items-center gap-14 lg:grid-cols-2">
            {/* image */}
            <Reveal animation="slide-in-left">
              <div className="relative w-full max-w-[500px] mx-auto">
                <div className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-secondary/20 to-primary/15 blur-2xl" />
                <div className="relative overflow-hidden rounded-3xl" style={{ boxShadow: '0 20px 50px rgba(58,93,165,0.22), 0 0 0 1px rgba(255,255,255,0.5)' }}>
                  <img
                    src="/images/Home_2.png"
                    alt="SSP BioQuest Laboratory"
                    className="w-full h-auto object-contain transition-transform duration-700 hover:scale-105"
                  />
                  <div
                    className="absolute bottom-0 left-0 right-0 px-5 py-4"
                    style={{ background: 'linear-gradient(to top, rgba(58,93,165,0.92) 0%, rgba(58,93,165,0.5) 70%, transparent 100%)' }}
                  >
                    <p className="text-sm font-bold text-white tracking-wide">SSP BioQuest — Lab Solutions</p>
                    <p className="text-xs text-white/90 mt-0.5">Precision equipment for every research need</p>
                  </div>
                </div>
                <div className="absolute -bottom-5 -right-5 flex h-20 w-20 items-center justify-center rounded-full gradient-primary text-white shadow-xl animate-float">
                  <Microscope className="h-9 w-9" />
                </div>
              </div>
            </Reveal>

            {/* text */}
            <Reveal animation="slide-in-right" delay={200}>
              <div
                className="rounded-3xl p-8"
                style={{
                  background: 'rgba(255,255,255,0.65)',
                  backdropFilter: 'blur(20px)',
                  WebkitBackdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255,255,255,0.8)',
                  boxShadow: '0 8px 40px rgba(58,93,165,0.12), inset 0 1px 0 rgba(255,255,255,0.95)',
                }}
              >
                <p className="text-lg text-muted-foreground leading-relaxed">
                 At <strong>SSP BioQuest</strong>, we are passionate about empowering scientific discovery and driving innovation in laboratories and research facilities worldwide. Our mission is to provide cutting-edge laboratory equipment and tailored solutions that address the diverse needs of scientists, researchers, and innovators across various disciplines.
                </p>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  With a strong commitment to excellence, we partner with leading manufacturers to bring you the highest-quality products, ensuring performance and reliability for every solution we deliver. Whether you’re advancing life sciences, conducting groundbreaking experiments, or seeking breakthroughs in scientific research, SSP BioQuest is here to support your journey every step of the way.
                </p>
                <Link href="/about" className="mt-6 inline-block">
                  <Button className="gradient-primary border-0 text-white group shadow-lg shadow-primary/25" size="lg">
                    Order Now
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ====================== WHO WE ARE ====================== */}
      <section className="relative py-24" style={{ background: '#eef2ff' }}>
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <Reveal className="mb-12 text-center">
            <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary mb-3">Our Identity</span>
            <h2 className="text-3xl font-bold text-primary sm:text-4xl md:text-5xl">Who We Are</h2>
          </Reveal>

          <Reveal animation="fade-up">
            <div
              className="rounded-3xl p-10"
              style={{ background: '#eef2ff', boxShadow: '10px 10px 24px #c5cce8, -10px -10px 24px #ffffff' }}
            >
              <div className="grid gap-8 lg:grid-cols-3">
                <div className="lg:col-span-2">
                  <p className="text-lg text-muted-foreground leading-relaxed mt-14">
                    At SSP BioQuest, we are more than just a provider of laboratory equipment—we are a trusted partner in scientific discovery and innovation. Founded with a vision to empower researchers and institutions, we are dedicated to delivering world-class solutions that meet the dynamic needs of laboratories across various fields.  
                  </p>
                </div>

                <div className="flex flex-col justify-center gap-5">
                  {[
                    { value: '50+', label: 'Products', icon: FlaskConical },
                    { value: '100+', label: 'Satisfied Clients', icon: Award },
                    { value: '24/7', label: 'Expert Support', icon: Headphones },
                  ].map((s) => (
                    <div
                      key={s.label}
                      className="flex items-center gap-4 rounded-2xl px-5 py-4"
                      style={{ background: '#eef2ff', boxShadow: '6px 6px 14px #c5cce8, -6px -6px 14px #ffffff' }}
                    >
                      <div
                        className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl"
                        style={{ background: '#eef2ff', boxShadow: 'inset 3px 3px 8px #c5cce8, inset -3px -3px 8px #ffffff' }}
                      >
                        <s.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold gradient-text">{s.value}</div>
                        <div className="text-xs text-muted-foreground">{s.label}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div
                className="mt-8 rounded-2xl px-6 py-4 text-center"
                style={{ background: '#eef2ff', boxShadow: 'inset 4px 4px 10px #c5cce8, inset -4px -4px 10px #ffffff' }}
              >
                <p className="text-sm font-medium text-primary">
                  🔬 Empowering researchers &nbsp;·&nbsp; 🧪 Delivering quality &nbsp;·&nbsp; 🌍 Serving globally
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ====================== WHY CHOOSE ====================== */}
      <section className="relative py-24" style={{ background: 'linear-gradient(160deg, #f8f9ff 0%, #fdf0fa 100%)' }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="mb-16 text-center">
            <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary mb-3">Our Promise</span>
            <h2 className="text-3xl font-bold text-primary sm:text-4xl md:text-5xl">Why Choose SSP BioQuest?</h2>
          </Reveal>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {whyChoose.map((item, i) => (
              <Reveal key={item.title} animation="fade-up" delay={i * 120}>
                <div
                  className="card-hover group relative rounded-2xl p-6 h-full text-center"
                  style={{
                    background: 'rgba(255,255,255,0.6)',
                    backdropFilter: 'blur(16px)',
                    WebkitBackdropFilter: 'blur(16px)',
                    border: '1px solid rgba(255,255,255,0.75)',
                    boxShadow: '0 8px 32px rgba(58,93,165,0.09), inset 0 1px 0 rgba(255,255,255,0.9)',
                  }}
                >
                  <div
                    className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-110"
                    style={{ background: '#eef2ff', boxShadow: '5px 5px 12px #c8d0e7, -5px -5px 12px #ffffff' }}
                  >
                    <item.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="mb-2 text-base font-semibold text-foreground">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ====================== CTA ====================== */}
      <section className="relative overflow-hidden" style={{ minHeight: '520px' }}>
        {/* background image */}
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(/images/Home_2.png)' }} />
        {/* overlay */}
        <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(58,93,165,0.92) 0%, rgba(45,74,135,0.86) 50%, rgba(248,136,214,0.80) 100%)' }} />
        {/* blobs */}
        <div className="absolute -top-20 -left-20 h-64 w-64 animate-blob rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -bottom-20 -right-20 h-72 w-72 animate-blob animation-delay-2000 rounded-full bg-secondary/20 blur-3xl" />

        <div className="relative flex min-h-[520px] items-center justify-center px-4 py-24 sm:px-6 lg:px-8">
          <Reveal animation="fade-up">
            <div className="mx-auto max-w-3xl text-center">
              <span
                className="inline-block rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-widest mb-5"
                style={{ background: 'rgba(255,255,255,0.15)', color: '#fff', border: '1px solid rgba(255,255,255,0.3)' }}
              >
                Get In Touch
              </span>
              <h2 className="text-3xl font-bold text-white sm:text-4xl md:text-5xl leading-tight mb-6">
                Ready to Elevate{' '}
                <span style={{ background: 'linear-gradient(90deg,#fff 0%,#f888d6 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                  Your Science?
                </span>
              </h2>
              <p className="text-lg text-white/80 leading-relaxed mb-10">
                Schedule a consultation or contact us to collaborate and improve your scientific research. We appreciate the chance to work with you!
              </p>
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link href="/contact">
                  <Button
                    size="lg"
                    className="border-0 text-primary font-bold group px-8 py-6 text-base shadow-2xl hover:opacity-90 transition-all"
                    style={{ background: '#ffffff' }}
                  >
                    Contact Us Now
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

    </div>
  );
}
