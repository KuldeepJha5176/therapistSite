"use client";
import React, { useEffect, useRef, useState } from "react";
import { Heart } from "lucide-react";

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
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
    setIsMenuOpen(false);
  };

  const services = [
    {
      title: "Anxiety & Stress Management",
      description:
        "Learn effective coping strategies and techniques to manage anxiety, reduce stress, and regain control over your daily life through evidence-based therapeutic approaches.",
      image:
        "https://images.unsplash.com/photo-1544027993-37dbfe43562a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      overlayImage:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      delay: "0.2s",
    },
    {
      title: "Relationship Counseling",
      description:
        "Strengthen your connections with others through improved communication, conflict resolution, and deeper understanding of relationship dynamics and patterns.",
      image:
        "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      overlayImage:
        "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      delay: "0.4s",
    },
    {
      title: "Trauma Recovery",
      description:
        "Navigate the healing journey from traumatic experiences with compassionate support, specialized techniques, and a safe therapeutic environment for processing and recovery.",
      image:
        "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      overlayImage:
        "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      delay: "0.6s",
    },
  ];

  return (
    <section id="services" className="py-20 bg-stone-50" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2
            className={`text-4xl md:text-5xl font-serif text-stone-700 mb-4 transition-all duration-1000 transform ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            Areas of Focus
          </h2>
          <div
            className={`h-1 w-24 bg-amber-700 mx-auto transition-all duration-1000 transform origin-center ${
              isVisible ? "scale-x-100" : "scale-x-0"
            }`}
            style={{ transitionDelay: "0.3s" }}
          ></div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className={`text-center group transition-all duration-1000 transform ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                }`}
                style={{ transitionDelay: service.delay }}
              >
                {/* Circular Image Container */}
                <div className="relative mb-8 mx-auto">
                  <div className="w-72 h-72 mx-auto relative overflow-hidden rounded-full shadow-2xl group-hover:shadow-3xl transition-all duration-500 transform group-hover:scale-105">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                        e.currentTarget.nextElementSibling.style.display =
                          "flex";
                      }}
                    />
                    {/* Fallback background */}
                    <div
                      className="absolute inset-0 bg-gradient-to-br from-stone-200 to-stone-300 flex items-center justify-center"
                      style={{ display: "none" }}
                    >
                      <img
                        src={service.overlayImage}
                        alt={`${service.title} icon`}
                        className="w-16 h-16 rounded-full object-cover"
                      />
                    </div>

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    {/* Floating Image */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-75 group-hover:scale-100">
                      <div className="bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-lg">
                        <img
                          src={service.overlayImage}
                          alt={`${service.title} overlay`}
                          className="w-16 h-16 rounded-full object-cover"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Decorative Ring */}
                  <div className="absolute inset-0 w-72 h-72 mx-auto rounded-full border-2 border-amber-700/20 scale-110 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-xl md:text-2xl font-serif text-stone-700 group-hover:text-amber-700 transition-colors duration-300">
                    {service.title}
                  </h3>

                  <p className="text-stone-600 leading-relaxed max-w-sm mx-auto group-hover:text-stone-700 transition-colors duration-300">
                    {service.description}
                  </p>

                  {/* Learn More Button */}
                  <div className="pt-4">
                    <button className="inline-flex items-center px-6 py-3 bg-transparent border-2 border-amber-700 text-amber-700 font-medium rounded-full hover:bg-amber-700 hover:text-white transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                      Learn More
                      <svg
                        className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div
          className={`text-center mt-16 transition-all duration-1000 transform ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
          style={{ transitionDelay: "0.8s" }}
        >
          <p className="text-stone-600 mb-6 max-w-2xl mx-auto">
            Ready to begin your journey toward healing and growth? I&#39;m here
            to support you every step of the way.
          </p>
          <button
            onClick={() => scrollToSection("contact")}
            className="inline-flex items-center px-8 py-4 bg-amber-700 text-white font-medium rounded-full hover:bg-amber-800 transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
          >
            Schedule a Consultation
            <Heart className="ml-2 w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
