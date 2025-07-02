"use client";
import React, { useEffect, useState } from "react";

interface PageTransitionProps {
  children: React.ReactNode;
}

const PageTransition: React.FC<PageTransitionProps> = ({ children }) => {
  const [hasMounted, setHasMounted] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setHasMounted(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
      setFadeIn(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);
  if (!hasMounted) return null;

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-stone-50 flex items-center justify-center z-50">
        <div className="text-center space-y-4">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-amber-700 mx-auto"></div>
          <p className="text-stone-600 font-serif">Dr. Serena Blake</p>
        </div>
      </div>
    );
  }

  return (
    <div 
      className={`transition-opacity duration-1000 ${
        fadeIn ? 'opacity-100' : 'opacity-0'
      }`}
    >
      {children}
    </div>
  );
};

export default PageTransition;