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
    <section id="about" className="py-20 bg-stone-100" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div
            className={`space-y-8 transition-all duration-1000 transform ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "-translate-x-10 opacity-0"
            }`}
          >
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-serif text-stone-800">
                About Dr. Serena Blake
              </h2>
              <div
                className="h-1 w-20 bg-amber-700 transition-all duration-1000 transform origin-left scale-x-0"
                style={{
                  transform: isVisible ? "scaleX(1)" : "scaleX(0)",
                  transitionDelay: "0.5s",
                }}
              ></div>
            </div>

            <div className="space-y-6 text-stone-600 leading-relaxed">
              <p
                className={`transition-all duration-700 transform ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-5 opacity-0"
                }`}
                style={{ transitionDelay: "0.3s" }}
              >
                Finding time and opportunities to care for ourselves can be
                incredibly challenging in today's busy and demanding world. I
                believe therapy offers a dedicated space for self-care,
                providing the support and tools needed to improve this essential
                practice. Therapy can help individuals identify and clarify
                their goals, values, and the various elements that contribute to
                their well-being, recognizing that these aspects vary from
                person to person.
              </p>
              <p
                className={`transition-all duration-700 transform ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-5 opacity-0"
                }`}
                style={{ transitionDelay: "0.5s" }}
              >
                I am dedicated to supporting this journey by offering active
                listening, psychological knowledge, empathy, compassion, and
                insights into behavioral patterns and tendencies. I hold a
                master's degree in Clinical Psychology and am committed to
                providing a safe and supportive environment for healing and
                growth.
              </p>
              <p
                className={`transition-all duration-700 transform ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-5 opacity-0"
                }`}
                style={{ transitionDelay: "0.7s" }}
              >
                My approach is primarily psychodynamic and humanistic, enriched
                by influences from positive psychology, acceptance and
                commitment concepts, and mindfulness practices. Whatever brings
                you to therapy—anxiety, depression, relationship stress, trauma,
                grief, or life transitions—you don't have to face it alone.
              </p>
            </div>

            <div
              className={`grid grid-cols-2 gap-6 pt-6 transition-all duration-700 transform ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-5 opacity-0"
              }`}
              style={{ transitionDelay: "0.9s" }}
            >
              <div className="text-center p-4 bg-stone-50 rounded-lg hover:bg-stone-100 transition-colors duration-300 group">
                <div className="text-2xl font-serif font-semibold text-amber-700 group-hover:scale-110 transition-transform duration-300">
                  8+
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

          {/* Doctor Image Section */}
          <div
            className={`relative transition-all duration-1000 transform ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "translate-x-10 opacity-0"
            }`}
            style={{ transitionDelay: "0.2s" }}
          >
            <div className="relative overflow-hidden rounded-2xl shadow-2xl hover:shadow-3xl transition-shadow duration-500">
              {/* Placeholder for doctor's image */}
              <div className="aspect-[3/4] bg-gradient-to-br from-stone-100 to-stone-200 flex items-center justify-center">
                <img
                  src="/doctor.png"
                  alt="Dr. Serena Blake - Clinical Psychologist"
                  className="w-full h-full object-cover object-center"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                    e.currentTarget.nextElementSibling.style.display = "flex";
                  }}
                />
                {/* Fallback content */}
                <div
                  className="absolute inset-0 flex flex-col items-center justify-center text-stone-500 bg-gradient-to-br from-stone-100 to-stone-200"
                  style={{ display: "none" }}
                >
                  <div className="w-24 h-24 bg-stone-300 rounded-full mb-4 flex items-center justify-center">
                    <span className="text-2xl font-serif text-stone-600">
                      JH
                    </span>
                  </div>
                  <p className="text-center text-sm px-4">Dr. Serena Blake</p>
                  <p className="text-center text-xs px-4 mt-1">
                    Clinical Psychologist
                  </p>
                </div>
              </div>

              {/* Overlay with subtle gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none"></div>

              {/* Floating info card */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg transform transition-all duration-500 hover:scale-105">
                <h3 className="font-serif font-semibold text-stone-800 mb-2">
                  Dr. Serena Blake
                </h3>
                <p className="text-sm text-stone-600 mb-3">
                  Master's in Clinical Psychology
                </p>

                <div className="space-y-2">
                  {[
                    "Psychodynamic Therapy",
                    "Humanistic Psychology",
                    "Mindfulness-Based Care",
                  ].map((approach, index) => (
                    <div
                      key={index}
                      className={`flex items-center space-x-2 transition-all duration-500 transform ${
                        isVisible
                          ? "translate-x-0 opacity-100"
                          : "translate-x-3 opacity-0"
                      }`}
                      style={{ transitionDelay: `${0.7 + index * 0.1}s` }}
                    >
                      <Check className="h-3 w-3 text-amber-700" />
                      <span className="text-xs text-stone-700">{approach}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-amber-100 rounded-full opacity-20 blur-xl"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-stone-100 rounded-full opacity-30 blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
