"use client";

import React from "react";
import BlackholeBackground from "@/components/BlackholeBackground";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Projects from "@/components/Projects";
import Certificates from "@/components/Certificates";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function HomePage() {
  return (
    <div className="relative min-h-screen flex flex-col">
      <BlackholeBackground />
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Education />
          <Projects />
          <Certificates />
          <Contact />
        </main>
        <Footer />
      </div>
      <WhatsAppButton />
    </div>
  );
}
