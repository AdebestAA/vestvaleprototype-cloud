'use client';

import { useRef } from 'react';
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';


export default function HomePage() {
  const sections = {
    navbar: useRef<HTMLElement>(null),
    hero: useRef<HTMLElement>(null),
    about: useRef<HTMLElement>(null),
    products: useRef<HTMLElement>(null),
    services: useRef<HTMLElement>(null),
    testimonials: useRef<HTMLElement>(null),
    contact: useRef<HTMLElement>(null),
  };

  const scrollToSection = (key: keyof typeof sections) => {
    sections[key].current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main>
      <Navbar  onNavClick={scrollToSection} />
      <Hero ref={sections.hero} />
      
    </main>
  );
}
