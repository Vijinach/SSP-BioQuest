'use client';

import { useState } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  MessageSquare,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Reveal } from '@/components/site/reveal';

const contactInfo = [
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 93844 43550',
    href: 'tel:+919384443550',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'info@sspbioquest.com',
    href: 'mailto:info@sspbioquest.com',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Serving laboratories and research facilities worldwide',
    href: null,
  },
  {
    icon: Clock,
    label: 'Business Hours',
    value: 'Monday - Saturday: 9:00 AM - 6:00 PM',
    href: null,
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setSubmitted(true);
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="overflow-hidden">
      {/* ====================== HERO ====================== */}
      <section className="relative flex min-h-[50vh] items-center justify-center gradient-mesh pt-32 pb-16">
        <div className="absolute top-1/4 left-10 h-64 w-64 animate-blob rounded-full bg-secondary/20 blur-3xl" />
        <div className="absolute bottom-1/4 right-10 h-80 w-80 animate-blob animation-delay-2000 rounded-full bg-primary/30 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <div className="animate-fade-down mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm">
            <MessageSquare className="h-4 w-4 text-secondary" />
            We're Here to Help
          </div>
          <h1 className="animate-fade-up animation-delay-200 text-4xl font-bold text-white text-shadow-lg sm:text-5xl md:text-6xl">
            Get in{' '}
            <span className="text-secondary">
              Touch
            </span>
          </h1>
          <p className="animate-fade-up animation-delay-400 mx-auto mt-6 max-w-3xl text-lg text-white/80">
            Schedule a consultation or contact us to collaborate and improve your
            scientific research. We appreciate the chance to collaborate with you!
          </p>
        </div>
      </section>

      {/* ====================== CONTACT INFO CARDS ====================== */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {contactInfo.map((info, i) => (
              <Reveal
                key={info.label}
                animation="fade-up"
                delay={i * 100}
                className="card-hover group rounded-2xl border border-primary/10 bg-white p-6 text-center shadow-sm"
              >
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl gradient-primary text-white transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                  <info.icon className="h-6 w-6" />
                </div>
                <h3 className="mb-1 text-sm font-semibold uppercase tracking-wider text-secondary">
                  {info.label}
                </h3>
                {info.href ? (
                  <a
                    href={info.href}
                    className="text-sm text-foreground transition-colors hover:text-primary"
                  >
                    {info.value}
                  </a>
                ) : (
                  <p className="text-sm text-muted-foreground">{info.value}</p>
                )}
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ====================== CONTACT FORM ====================== */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-start gap-12 lg:grid-cols-2">
            {/* Left: Info */}
            <Reveal animation="slide-in-left">
              <span className="text-sm font-semibold uppercase tracking-wider text-secondary">
                Contact SSP BioQuest
              </span>
              <h2 className="mt-3 text-3xl font-bold text-primary sm:text-4xl">
                Let's Start a Conversation
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Contact SSP BioQuest today to discover how we can elevate your
                scientific endeavors and help you achieve new milestones in
                research and discovery.
              </p>

              <div className="mt-8 space-y-4">
                {[
                  'Schedule a consultation with our experts',
                  'Get personalized product recommendations',
                  'Request a quote for bulk orders',
                  'Learn about our customization options',
                ].map((item, i) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 text-foreground"
                    style={{
                      animation: `slide-in-left 0.5s ease-out ${i * 100}ms both`,
                    }}
                  >
                    <CheckCircle2 className="h-5 w-5 text-secondary" />
                    {item}
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-2xl gradient-primary p-6 text-white">
                <h3 className="text-lg font-semibold">Office Phone Number</h3>
                <a
                  href="tel:+919384443550"
                  className="mt-2 flex items-center gap-2 text-2xl font-bold transition-opacity hover:opacity-80"
                >
                  <Phone className="h-6 w-6 text-secondary" />
                  +91 93844 43550
                </a>
              </div>
            </Reveal>

            {/* Right: Form */}
            <Reveal animation="slide-in-right" delay={200}>
              <div className="relative overflow-hidden rounded-3xl border border-primary/10 bg-white p-8 shadow-xl">
                <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-secondary/10 blur-2xl" />
                <div className="relative">
                  <h3 className="mb-6 text-2xl font-bold text-primary">
                    Send Us a Message
                  </h3>

                  {submitted && (
                    <div className="mb-6 flex items-center gap-3 rounded-xl border border-secondary/30 bg-accent p-4 animate-scale-in">
                      <CheckCircle2 className="h-5 w-5 text-secondary" />
                      <p className="text-sm text-foreground">
                        Thank you! Your message has been sent successfully. We'll
                        get back to you soon.
                      </p>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <label
                          htmlFor="name"
                          className="text-sm font-medium text-foreground"
                        >
                          Name <span className="text-destructive">*</span>
                        </label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your full name"
                          className={errors.name ? 'border-destructive' : ''}
                        />
                        {errors.name && (
                          <p className="text-xs text-destructive">
                            {errors.name}
                          </p>
                        )}
                      </div>
                      <div className="space-y-2">
                        <label
                          htmlFor="email"
                          className="text-sm font-medium text-foreground"
                        >
                          Email <span className="text-destructive">*</span>
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="you@example.com"
                          className={errors.email ? 'border-destructive' : ''}
                        />
                        {errors.email && (
                          <p className="text-xs text-destructive">
                            {errors.email}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <label
                          htmlFor="phone"
                          className="text-sm font-medium text-foreground"
                        >
                          Phone
                        </label>
                        <Input
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+91 98765 43210"
                        />
                      </div>
                      <div className="space-y-2">
                        <label
                          htmlFor="subject"
                          className="text-sm font-medium text-foreground"
                        >
                          Subject <span className="text-destructive">*</span>
                        </label>
                        <Input
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          placeholder="How can we help?"
                          className={errors.subject ? 'border-destructive' : ''}
                        />
                        {errors.subject && (
                          <p className="text-xs text-destructive">
                            {errors.subject}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label
                        htmlFor="message"
                        className="text-sm font-medium text-foreground"
                      >
                        Message <span className="text-destructive">*</span>
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your requirements..."
                        rows={5}
                        className={errors.message ? 'border-destructive' : ''}
                      />
                      {errors.message && (
                        <p className="text-xs text-destructive">
                          {errors.message}
                        </p>
                      )}
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full gradient-primary border-0 text-white group"
                    >
                      Send Message
                      <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </form>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ====================== CTA ====================== */}
      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 gradient-mesh" />
        <div className="absolute inset-0 bg-primary/80" />
        <div className="absolute -top-24 -right-24 h-72 w-72 animate-blob rounded-full bg-secondary/30 blur-3xl" />

        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <Reveal animation="fade-up">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Ready to Elevate Your Research?
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-white/80">
              Join the laboratories and research facilities that trust SSP BioQuest
              for their equipment and support needs.
            </p>
            <a
              href="tel:+919384443550"
              className="mt-8 inline-flex items-center gap-2 rounded-full gradient-secondary px-8 py-4 text-lg font-semibold text-white transition-opacity hover:opacity-90"
            >
              <Phone className="h-5 w-5" />
              Call Us Now
              <ArrowRight className="h-5 w-5" />
            </a>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
