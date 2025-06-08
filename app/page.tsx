'use client';

import { useRef } from 'react';
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import PropertiesSection from '@/components/Properties';
import HomeDecorSection from '@/components/Furnishing';
import OurStory from '@/components/OurStory';
import TestimonialsSection from '@/components/TestimonialsSection';
// Update the import path and casing if the file is named differently, e.g. Contactsection, contactSection, or contact-section
import ContactSection from "@/components/Contact"
import FooterSection from '@/components/FooterSection';
import NewsletterSection from '@/components/NewsletterSection';

export default function HomePage() {
  const sections = {
    navbar: useRef<HTMLElement>(null),
    hero: useRef<HTMLElement>(null),
    about: useRef<HTMLElement>(null),
    products: useRef<HTMLElement>(null),
    services: useRef<HTMLElement>(null),
    testimonials: useRef<HTMLElement>(null),
    contact: useRef<HTMLElement>(null),
    properties: useRef<HTMLElement>(null),
  };

  const scrollToSection = (key: keyof typeof sections) => {
    sections[key].current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main>
      <Navbar  onNavClick={scrollToSection} />
      <Hero ref={sections.hero} />
      <PropertiesSection ref={sections.properties} />
      <HomeDecorSection ref={sections.products} />
      <OurStory ref={sections.about} />
      <TestimonialsSection ref={sections.testimonials} /> 
      <ContactSection ref={sections.contact} /> 
      <NewsletterSection ref={sections.services} />
      <FooterSection />
      {/* Add FooterSection if you have one, or remove this line if not */}
      
    </main>
  );
}
