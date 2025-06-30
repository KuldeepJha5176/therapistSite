"use client";
import React, { useEffect, useRef, useState } from "react";

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      title: "Individual Therapy",
      description:
        "One-on-one sessions focused on your personal growth, mental health challenges, and life transitions.",
      features: [
        "Anxiety & Depression",
        "Trauma Recovery",
        "Life Transitions",
        "Self-Esteem",
      ],
      icon: "🧠",
    },
    {
      title: "Couples Therapy",
      description:
        "Strengthen your relationship through improved communication and deeper understanding.",
      features: [
        "Communication Skills",
        "Conflict Resolution",
        "Intimacy Issues",
        "Relationship Building",
      ],
      icon: "💑",
    },
    {
      title: "Family Therapy",
      description:
        "Heal family dynamics and improve relationships between family members of all ages.",
      features: [
        "Parent-Child Relations",
        "Blended Families",
        "Teen Issues",
        "Family Communication",
      ],
      icon: "👨‍👩‍👧‍👦",
    },
    {
      title: "Specialized Care",
      description:
        "Targeted therapy for specific populations and unique challenges.",
      features: [
        "Healthcare Providers",
        "Second-Generation Immigrants",
        "Grief & Loss",
        "Professional Burnout",
      ],
      icon: "⭐",
    },
  ];

  return (
    <section id="services" className="py-20 bg-stone-50" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center space-y-4 mb-16 transition-all duration-1000 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h2 className="text-4xl font-bold text-stone-800 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto">
            Comprehensive mental health support tailored to your unique needs and journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 transform ${
                isVisible 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-10 opacity-0'
              } hover:scale-105 group`}
              style={{
                animationDelay: isVisible ? `${index * 200}ms` : '0ms'
              }}
            >
              <div className="flex items-center mb-6">
                <div className="text-4xl mr-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-semibold text-stone-800">
                  {service.title}
                </h3>
              </div>
              
              <p className="text-stone-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <div className="space-y-3">
                <h4 className="font-semibold text-stone-700 mb-3">
                  Focus Areas:
                </h4>
                <div className="grid grid-cols-2 gap-2">
                  {service.features.map((feature, featureIndex) => (
                    <div
                      key={feature}
                      className="flex items-center text-sm text-stone-600"
                    >
                      <div className="w-2 h-2 bg-emerald-500 rounded-full mr-2 flex-shrink-0"></div>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="mt-6 pt-4 border-t border-stone-100">
                <button className="text-emerald-600 font-medium hover:text-emerald-700 transition-colors duration-200 flex items-center group">
                  Learn More
                  <svg 
                    className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className={`text-center mt-16 transition-all duration-1000 delay-800 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold text-stone-800 mb-4">
              Not Sure Which Service is Right for You?
            </h3>
            <p className="text-stone-600 mb-6">
              Schedule a free consultation to discuss your needs and find the best path forward for your mental health journey.
            </p>
            <button className="bg-emerald-600 text-white px-8 py-3 rounded-full font-medium hover:bg-emerald-700 transition-colors duration-200 shadow-lg hover:shadow-xl">
              Schedule Free Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;