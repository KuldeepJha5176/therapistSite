"use client";
import React, { useEffect, useState } from "react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 200);
    return () => clearTimeout(timer);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="hero"
      className="relative pt-16 min-h-screen flex items-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800"><defs><linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:%23f3f4f6;stop-opacity:1" /><stop offset="50%" style="stop-color:%23e5e7eb;stop-opacity:1" /><stop offset="100%" style="stop-color:%23d1d5db;stop-opacity:1" /></linearGradient></defs><rect width="100%" height="100%" fill="url(%23grad1)"/><circle cx="200" cy="150" r="80" fill="%23f59e0b" opacity="0.1"/><circle cx="1000" cy="200" r="120" fill="%23d97706" opacity="0.1"/><circle cx="600" cy="600" r="100" fill="%23f59e0b" opacity="0.05"/><path d="M0,400 Q300,350 600,400 T1200,400 L1200,800 L0,800 Z" fill="%23fef3c7" opacity="0.3"/></svg>')`,
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-br from-stone-50/90 via-amber-50/80 to-stone-100/90"></div>
      </div>

      {/* Floating Animation Elements */}
      <div className="absolute inset-0 z-10">
        <div className="absolute top-20 left-10 w-4 h-4 bg-amber-400/20 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-6 h-6 bg-stone-400/20 rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-40 left-20 w-3 h-3 bg-amber-300/30 rounded-full animate-ping" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 right-40 w-5 h-5 bg-stone-300/20 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className={`space-y-8 transition-all duration-1000 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light text-stone-800 leading-tight">
                Psychological Care for
                <span className="block text-amber-700 font-medium relative">
                  <span className="relative z-10">Change, Insight, and Well-Being</span>
                  <div className="absolute bottom-2 left-0 w-full h-3 bg-amber-200/50 -z-10 animate-pulse"></div>
                </span>
              </h1>
              <p className="text-lg md:text-xl text-stone-600 leading-relaxed max-w-2xl">
                Offering compassionate individual psychotherapy for adults in
                a safe, supportive environment dedicated to your mental health
                journey.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => scrollToSection("contact")}
                className="group bg-amber-700 text-white px-8 py-3 rounded-md hover:bg-amber-800 transition-all duration-300 font-medium transform hover:scale-105 hover:shadow-lg"
              >
                <span className="group-hover:animate-pulse">Schedule Consultation</span>
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="border border-stone-300 text-stone-700 px-8 py-3 rounded-md hover:bg-stone-100 hover:border-stone-400 transition-all duration-300 font-medium transform hover:scale-105"
              >
                Learn More
              </button>
            </div>

            <div className="pt-8 border-t border-stone-200">
              <p className="text-sm text-stone-500 italic animate-fade-in">
                "Therapy can be a space where you invest in yourself—one of
                the highest forms of self-care."
              </p>
            </div>
          </div>

          <div className={`relative transition-all duration-1000 transform delay-300 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <div className="aspect-[4/5] bg-gradient-to-br from-amber-100 to-stone-200 rounded-2xl shadow-2xl overflow-hidden relative group">
              {/* Professional placeholder image */}
              <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-stone-100 to-amber-100 flex items-center justify-center">
                <div className="text-center text-stone-400">
                  <div className="w-32 h-32 bg-stone-300 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-4xl">👩‍⚕️</span>
                  </div>
                  <p className="text-sm">Professional Photo</p>
                </div>
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent group-hover:from-black/30 transition-all duration-300"></div>
              
              <div className="absolute bottom-8 left-8 right-8 transform transition-all duration-300 group-hover:translate-y-0 translate-y-2">
                <div className="bg-white/90 backdrop-blur-sm rounded-lg p-6 shadow-lg">
                  <p className="text-stone-800 font-medium">
                    Dr. Serena Blake, Ph.D.
                  </p>
                  <p className="text-stone-600 text-sm">
                    Licensed Clinical Psychologist
                  </p>
                  <div className="flex space-x-2 mt-2">
                    <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse"></div>
                    <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                    <div className="w-2 h-2 bg-amber-300 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-amber-200 rounded-full opacity-70 animate-bounce"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-stone-300 rounded-full opacity-70 animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-stone-400 rounded-full flex justify-center">
            <div className="w-1 h-2 bg-stone-400 rounded-full mt-2 animate-ping"></div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out 1s both;
        }
      `}</style>
    </section>
  );
};

export default Hero;