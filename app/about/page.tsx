'use client';

import Link from 'next/link';
import { useState } from 'react';
import {
  ArrowRight,
  Target,
  Eye,
  CheckCircle2,
  Phone,
  Package,
  Award,
  Settings2,
  Headphones,
  Leaf,
  Rocket,
  Globe,
  ShieldCheck,
  ChevronDown,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Reveal } from '@/components/site/reveal';

const offerings = [
  {
    icon: Package,
    title: 'Extensive Product Range',
    description:
      'From basic lab supplies to advanced research equipments with and state-of-the-art cold chain solutions, our offerings cater to a wide spectrum of scientific needs.',
  },
  {
    icon: Award,
    title: 'Unparalleled Quality',
    description:
      'We collaborate with top manufacturers to deliver reliable, high-performance equipment that meets rigorous industry standards.',
  },
  {
    icon: Settings2,
    title: 'Customized Solutions',
    description:
      'Every lab is unique, and we provide tailored solutions designed to meet your specific challenges and goals.',
  },
  {
    icon: Headphones,
    title: 'Expert Technical Support',
    description:
      'Our knowledgeable team is always available to assist with guidance, troubleshooting, and maintenance, ensuring your operations run seamlessly.',
  },
  {
    icon: Leaf,
    title: 'Energy-Efficient Innovations',
    description:
      'Sustainability is at our core, and our energy-efficient products are designed to reduce costs while minimizing environmental impact.',
  },
];

const timeline = [
  {
    icon: Rocket,
    title: 'The Beginning',
    description:
      'SSP BioQuest was founded with a vision to empower researchers and institutions with world-class laboratory solutions.',
  },
  {
    icon: Package,
    title: 'Expanding Our Product Range',
    description:
      'We continuously expanded our catalog to cover everything from cold-chain solutions to advanced research instruments.',
  },
  {
    icon: ShieldCheck,
    title: 'Commit to Quality',
    description:
      'Our partnerships with leading manufacturers ensure every product meets the highest standards of performance and reliability.',
  },
  {
    icon: Globe,
    title: 'Global Reach',
    description:
      'Today, SSP BioQuest serves laboratories and research facilities worldwide, driving innovation across scientific communities.',
  },
];

function OfferingsAccordion() {
  const [openIndex, setOpenIndex] = useState<number>(0);
  return (
    <div className="flex flex-col gap-3">
      {offerings.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div
            key={item.title}
            className="overflow-hidden rounded-2xl cursor-pointer transition-all duration-300"
            style={{
              background: '#eef2ff',
              boxShadow: isOpen
                ? '8px 8px 20px #c5cce8, -8px -8px 20px #ffffff'
                : '4px 4px 12px #c5cce8, -4px -4px 12px #ffffff',
            }}
            onClick={() => setOpenIndex(isOpen ? -1 : i)}
          >
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
                <item.icon className={`h-5 w-5 transition-colors duration-300 ${isOpen ? 'text-secondary' : 'text-primary'}`} />
              </div>
              <h3 className={`flex-1 text-base font-semibold transition-colors duration-300 ${isOpen ? 'text-secondary' : 'text-foreground'}`}>
                {item.title}
              </h3>
              <div
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full"
                style={{ background: '#eef2ff', boxShadow: '3px 3px 8px #c5cce8, -3px -3px 8px #ffffff' }}
              >
                <ChevronDown className={`h-4 w-4 text-primary transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
              </div>
            </div>
            <div style={{ maxHeight: isOpen ? '200px' : '0px', overflow: 'hidden', transition: 'max-height 0.35s ease' }}>
              <div
                className="mx-4 mb-4 rounded-xl px-4 py-3"
                style={{ background: '#eef2ff', boxShadow: 'inset 3px 3px 8px #c5cce8, inset -3px -3px 8px #ffffff' }}
              >
                <p className="text-sm leading-relaxed text-muted-foreground">{item.description}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default function AboutPage() {
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <div className="overflow-hidden" style={{ scrollBehavior: 'smooth' }}>

      {/* ====================== HERO — empty 300px ====================== */}
      <section className="relative gradient-mesh" style={{ height: '300px' }}>
        <div className="absolute top-1/4 left-10 h-48 w-48 animate-blob rounded-full bg-secondary/20 blur-3xl" />
        <div className="absolute bottom-1/4 right-10 h-56 w-56 animate-blob animation-delay-2000 rounded-full bg-primary/30 blur-3xl" />
      </section>

      {/* ====================== ABOUT — content left, image right ====================== */}
      <section className="relative overflow-hidden py-24" style={{ background: 'linear-gradient(135deg, #eef2ff 0%, #fdf0fa 100%)' }}>
        <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-primary/5 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-14 lg:grid-cols-2">

            {/* LEFT — content */}
            <Reveal animation="slide-in-left">
              <span className="inline-block rounded-full bg-secondary/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-secondary mb-4">About Us</span>
              <h2 className="text-3xl font-bold text-primary sm:text-4xl md:text-5xl">
                About Us
              </h2>
              <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
                Welcome to <strong>SSP BioQuest</strong>, where science meets innovation. We are a trusted provider of advanced laboratory equipment and custom solutions, committed to empowering researchers and innovators worldwide. Our mission is to accelerate scientific discovery by offering the tools, technologies, and support that laboratories and research facilities need to thrive.
              </p>
              <Link href="/products" className="mt-8 inline-block">
                <Button className="gradient-primary border-0 text-white group shadow-lg shadow-primary/25" size="lg">
                  Order Now
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </Reveal>

            {/* RIGHT — image */}
            <Reveal animation="slide-in-right" delay={150}>
              <div className="relative w-full max-w-[460px] mx-auto">
                <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-primary/20 to-secondary/20 blur-2xl" />
                <div
                  className="relative overflow-hidden rounded-3xl"
                  style={{ boxShadow: '0 24px 64px rgba(58,93,165,0.22), 0 0 0 1px rgba(255,255,255,0.6)' }}
                >
                  <img
                    src="/images/About_1.jpg"
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
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ====================== TIMELINE LEFT + CONTENT RIGHT ====================== */}
      <section className="relative py-24" style={{ background: '#eef2ff' }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="mb-14 text-center">
            <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary mb-3">Our Journey</span>
            <h2 className="text-3xl font-bold text-primary sm:text-4xl md:text-5xl">What we Offer</h2>
          </Reveal>

          <div className="grid items-start gap-14 lg:grid-cols-2">

            {/* LEFT — Timeline alternating */}
            <Reveal animation="slide-in-left">
              <div className="relative">
                {/* center vertical line */}
                <div className="absolute left-1/2 top-2 bottom-2 w-0.5 -translate-x-1/2 bg-gradient-to-b from-primary via-secondary to-primary rounded-full" />
                <div className="flex flex-col gap-12">
                  {[...timeline].map((item, i) => {
                    const isLeft = i % 2 === 0;
                    return (
                      <div key={item.title} className={`relative flex items-start gap-4 ${isLeft ? 'flex-row' : 'flex-row-reverse'}`}>
                        {/* card — takes half width */}
                        <div
                          className="w-[calc(50%-28px)] rounded-2xl px-5 py-4"
                          style={{ background: '#eef2ff', boxShadow: '6px 6px 14px #c5cce8, -6px -6px 14px #ffffff' }}
                        >
                          <p className={`font-semibold text-sm text-primary mb-2 ${isLeft ? 'text-right' : 'text-left'}`}>{item.title}</p>
                          <p className={`text-xs text-muted-foreground leading-relaxed ${isLeft ? 'text-right' : 'text-left'}`}>{item.description}</p>
                        </div>
                        {/* center dot */}
                        <div
                          className="relative z-10 mt-3 flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-white shadow-lg"
                          style={{ background: 'linear-gradient(135deg,#3a5da5,#f888d6)' }}
                        >
                          <item.icon className="h-4 w-4" />
                        </div>
                        {/* spacer for opposite side */}
                        <div className="w-[calc(50%-28px)]" />
                      </div>
                    );
                  })}
                </div>
              </div>
            </Reveal>

            {/* RIGHT — What We Offer */}
            <Reveal animation="slide-in-right" delay={150}>
              <p className="text-lg font-bold text-primary mb-4 px-1">What We Offer</p>
              <OfferingsAccordion />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ====================== WHY CHOOSE US ====================== */}
      <section className="relative py-24 overflow-hidden" style={{ background: 'linear-gradient(135deg, #eef2ff 0%, #f0f4ff 100%)' }}>
        <div className="absolute -top-16 -right-16 h-56 w-56 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute -bottom-16 -left-16 h-56 w-56 rounded-full bg-secondary/5 blur-3xl" />

        {/* heading + text */}
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center mb-14">
          <Reveal animation="fade-up">
            <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary mb-4">Our Identity</span>
            <h2 className="text-3xl font-bold text-primary sm:text-4xl md:text-5xl mb-6">Why Choose Us</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              SSP BioQuest stands apart as a reliable partner in scientific excellence. Our commitment to affordability and personalized service ensures that we meet your needs while exceeding your expectations. With us, you can focus on what truly matters: making groundbreaking discoveries.
            </p>
          </Reveal>
        </div>

        {/* infinite marquee slider */}
        <div className="relative overflow-hidden">
          {/* fade edges */}
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-32 z-10" style={{ background: 'linear-gradient(to right, #eef2ff, transparent)' }} />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-32 z-10" style={{ background: 'linear-gradient(to left, #eef2ff, transparent)' }} />

          <div className="flex animate-marquee gap-5" style={{ width: 'max-content' }}>
            {[
              ...Array.from({ length: 11 }, (_, i) => `/images/Slide_${i + 1}.png`),
              ...Array.from({ length: 11 }, (_, i) => `/images/Slide_${i + 1}.png`),
            ].map((src, idx) => (
              <div
                key={idx}
                className="shrink-0 overflow-hidden rounded-2xl transition-transform duration-300 hover:scale-105"
                style={{
                  width: '260px',
                  height: '200px',
                  background: '#eef2ff',
                  boxShadow: '6px 6px 16px #c5cce8, -6px -6px 16px #ffffff',
                }}
              >
                <img
                  src={src}
                  alt={`Slide ${(idx % 11) + 1}`}
                  className="w-full h-full object-contain p-3"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====================== VISION & MISSION ====================== */}
      <section className="relative py-20" style={{ background: '#eef2ff' }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal animation="fade-up">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
              {/* Our Vision */}
              <div
                className="rounded-3xl p-10"
                style={{ background: '#eef2ff', boxShadow: '8px 8px 20px #c5cce8, -8px -8px 20px #ffffff' }}
              >
                <div
                  className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl"
                  style={{ background: '#eef2ff', boxShadow: 'inset 4px 4px 10px #c5cce8, inset -4px -4px 10px #ffffff' }}
                >
                  <Eye className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed text-base">To be the trusted global leader in laboratory solutions, fostering innovation and excellence across scientific communities worldwide.</p>
              </div>

              {/* Our Mission */}
              <div
                className="rounded-3xl p-10"
                style={{ background: '#eef2ff', boxShadow: '8px 8px 20px #c5cce8, -8px -8px 20px #ffffff' }}
              >
                <div
                  className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl"
                  style={{ background: '#eef2ff', boxShadow: 'inset 4px 4px 10px #c5cce8, inset -4px -4px 10px #ffffff' }}
                >
                  <Target className="h-7 w-7 text-secondary" />
                </div>
                <h3 className="text-2xl font-bold text-secondary mb-4">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed text-base">To provide high-quality equipment and unparalleled support, enabling researchers and institutions to push the boundaries of scientific discovery.</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ====================== CTA ====================== */}
      <section className="relative overflow-hidden" style={{ minHeight: '480px' }}>
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(/images/Home_2.png)' }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(58,93,165,0.90) 0%, rgba(45,74,135,0.85) 50%, rgba(248,136,214,0.80) 100%)' }} />
        <div className="absolute -top-20 -left-20 h-64 w-64 animate-blob rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -bottom-20 -right-20 h-72 w-72 animate-blob animation-delay-2000 rounded-full bg-secondary/20 blur-3xl" />

        <div className="relative flex min-h-[480px] items-center justify-center px-4 py-24 sm:px-6 lg:px-8">
          <Reveal animation="fade-up">
            <div className="mx-auto max-w-3xl text-center">
              <span
                className="inline-block rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-widest mb-5"
                style={{ background: 'rgba(255,255,255,0.15)', color: '#fff', border: '1px solid rgba(255,255,255,0.3)' }}
              >
                Get In Touch
              </span>
              <h2 className="text-4xl font-bold text-white sm:text-5xl leading-tight mb-6">
                Ready to Elevate{' '}
                <span style={{ background: 'linear-gradient(90deg,#fff 0%,#f888d6 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                  Your Science?
                </span>
              </h2>
              <p className="text-lg text-white/80 leading-relaxed mb-10">
                Partner with SSP BioQuest to access world-class laboratory solutions, expert support, and cutting-edge equipment tailored to your research needs.
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
