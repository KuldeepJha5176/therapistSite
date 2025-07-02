import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

const Hero = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.onload = () => setImageLoaded(true);
    img.src =
      "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80";
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

  return (
    <section className="relative h-[100vh] bg-amber-50 flex items-center justify-center overflow-hidden rounded-lg mx-4 md:mx-8 lg:mx-12 my-8">
      {/* Background with fallback color */}
      <div className="absolute inset-0 bg-amber-50 rounded-lg">
        {/* Animated Background Image */}
        <div
          className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 rounded-lg ${
            imageLoaded ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: imageLoaded
              ? `url('https://images.unsplash.com/photo-1500375592092-40eb2168fd21?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80')`
              : "none",
            animation: imageLoaded
              ? "gentle-zoom 20s ease-in-out infinite alternate"
              : "none",
          }}
        />
      </div>

      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/30 rounded-lg" />

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-light mb-6 leading-tight">
          Psychological Care for
        </h1>
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-light mb-8 leading-tight">
          Change, Insight, and Well-Being
        </h2>

        <p className="text-lg md:text-xl lg:text-2xl font-light mb-12 max-w-4xl mx-auto leading-relaxed opacity-90">
          Offering individual psychotherapy for adults via telehealth in
          Michigan and most U.S. states through PSYPACT participation
        </p>

        <Button
          onClick={() => scrollToSection("contact")}
          size="lg"
          className="bg-teal-600/80 hover:bg-teal-700/90 text-white px-8 py-4 text-lg rounded-full backdrop-blur-sm border border-white/20 transition-all duration-300 hover:scale-105"
        >
          SCHEDULE A CONSULTATION
        </Button>
      </div>
    </section>
  );
};

export default Hero;
