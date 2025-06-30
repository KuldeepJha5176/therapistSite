"use client";
import React from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
// import FAQ from "./components/FAQ";
// import Contact from "./components/Contact";
// import Footer from "./components/Footer";
import PageTransition from "@/components/PageTransition";

const DrSerenaBlakePage = () => {
  return (
    <PageTransition>
      <div className="min-h-screen bg-stone-50 font-sans">
        <Navigation />
        <Hero />
        <About />
        <Services />
        {/* <FAQ />
        <Contact />
        <Footer /> */}
      </div>
    </PageTransition>
  );
};

export default DrSerenaBlakePage;