"use client";
import React, { useEffect, useRef, useState } from "react";
import { Check } from "lucide-react";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

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

  return (
    <section id="about" className="py-20 bg-white" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className={`space-y-8 transition-all duration-1000 transform ${
            isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
          }`}>
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-serif text-stone-800">
                About Dr. Serena Blake
              </h2>
              <div className="h-1 w-20 bg-amber-700 transition-all duration-1000 transform origin-left scale-x-0"
                   style={{
                     transform: isVisible ? 'scaleX(1)' : 'scaleX(0)',
                     transitionDelay: '0.5s'
                   }}></div>
            </div>

            <div className="space-y-6 text-stone-600 leading-relaxed">
              <p className={`transition-all duration-700 transform ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'
              }`} style={{ transitionDelay: '0.3s' }}>
                Finding time and opportunities to care for ourselves can be
                incredibly challenging in today's busy and demanding world. I
                believe therapy offers a dedicated space for self-care,
                providing the support and tools needed to improve this
                essential practice.
              </p>
              <p className={`transition-all duration-700 transform ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'
              }`} style={{ transitionDelay: '0.5s' }}>
                I am dedicated to supporting your journey by offering active
                listening, psychological knowledge, empathy, compassion, and
                insights into behavioral patterns and tendencies. My approach
                is primarily psychodynamic and humanistic, enriched by
                influences from positive psychology, acceptance and commitment
                concepts, and mindfulness practices.
              </p>
              <p className={`transition-all duration-700 transform ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'
              }`} style={{ transitionDelay: '0.7s' }}>
                Whatever brings you to therapy—anxiety, depression,
                relationship stress, trauma, grief, or life transitions—you
                don't have to face it alone. Therapy offers you the time and
                space to work toward wellness and peace.
              </p>
            </div>

            <div className={`grid grid-cols-2 gap-6 pt-6 transition-all duration-700 transform ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'
            }`} style={{ transitionDelay: '0.9s' }}>
              <div className="text-center p-4 bg-stone-50 rounded-lg hover:bg-stone-100 transition-colors duration-300 group">
                <div className="text-2xl font-serif font-semibold text-amber-700 group-hover:scale-110 transition-transform duration-300">
                  15+
                </div>
                <div className="text-sm text-stone-600">Years Experience</div>
              </div>
              <div className="text-center p-4 bg-stone-50 rounded-lg hover:bg-stone-100 transition-colors duration-300 group">
                <div className="text-2xl font-serif font-semibold text-amber-700 group-hover:scale-110 transition-transform duration-300">
                  500+
                </div>
                <div className="text-sm text-stone-600">Clients Helped</div>
              </div>
            </div>
          </div>

          <div className={`space-y-8 transition-all duration-1000 transform ${
            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
          }`} style={{ transitionDelay: '0.2s' }}>
            <div className="bg-stone-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-serif font-semibold text-stone-800 mb-6">
                Education & Training
              </h3>
              <div className="space-y-4">
                {[
                  {
                    degree: "Ph.D. in Clinical Psychology",
                    institution: "Stanford University, 2015"
                  },
                  {
                    degree: "M.A. in Counseling Psychology",
                    institution: "University of California, Berkeley, 2012"
                  },
                  {
                    degree: "Licensed Clinical Psychologist",
                    institution: "California Board of Psychology"
                  }
                ].map((item, index) => (
                  <div key={index} className={`flex items-start space-x-3 transition-all duration-500 transform ${
                    isVisible ? 'translate-x-0 opacity-100' : 'translate-x-5 opacity-0'
                  }`} style={{ transitionDelay: `${0.5 + index * 0.1}s` }}>
                    <div className="w-2 h-2 bg-amber-700 rounded-full mt-2 flex-shrink-0 animate-pulse"></div>
                    <div>
                      <p className="font-medium text-stone-800">
                        {item.degree}
                      </p>
                      <p className="text-stone-600 text-sm">
                        {item.institution}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-amber-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-serif font-semibold text-stone-800 mb-6">
                Therapeutic Approach
              </h3>
              <div className="space-y-3">
                {[
                  "Psychodynamic Therapy",
                  "Humanistic Psychology",
                  "Mindfulness-Based Interventions",
                  "Acceptance & Commitment Therapy",
                ].map((approach, index) => (
                  <div key={index} className={`flex items-center space-x-3 transition-all duration-500 transform ${
                    isVisible ? 'translate-x-0 opacity-100' : 'translate-x-5 opacity-0'
                  }`} style={{ transitionDelay: `${0.7 + index * 0.1}s` }}>
                    <Check className="h-4 w-4 text-amber-700 animate-pulse" />
                    <span className="text-stone-700 hover:text-stone-900 transition-colors duration-200">
                      {approach}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;