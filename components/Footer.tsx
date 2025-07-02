import React from "react";

export default function FooterComponent() {
  return (
    <footer className="bg-stone-100 py-16 px-8">
      <div className="max-w-4xl mx-auto text-center">
        {/* Main Header */}
        <h1 className="text-3xl md:text-4xl font-light text-stone-700 mb-8">
             Serena Blake, PsyD, Clinical Psychologist
        </h1>

        {/* Email */}
        <div className="mb-6">
          <a
            href="mailto: serena@blakepsychology.com"
            className="text-stone-600 underline hover:text-stone-800 transition-colors text-lg"
          >
             serena@blakepsychology.com
          </a>
        </div>

        {/* Phone and Fax */}
        <div className="mb-8 text-stone-600 text-lg">
          <span>Phone: </span>
          <a
            href="tel:(323) 555-0192"
            className="underline hover:text-stone-800 transition-colors"
          >
            (248) 939-8150
          </a>
          <span className="mx-4">Fax: (248) 939-8190</span>
        </div>

        {/* Address */}
        <div className="mb-12 text-stone-600 text-lg">
        1287 Maplewood Drive, Los Angeles, CA 90026
        </div>

        {/* Navigation Links */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-6 text-stone-600">
            <a
              href="#"
              className="underline hover:text-stone-800 transition-colors"
            >
              Home
            </a>
            <a
              href="#"
              className="underline hover:text-stone-800 transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="underline hover:text-stone-800 transition-colors"
            >
              Good Faith Estimate
            </a>
          </div>
        </div>

        {/* Client Portal */}
        <div className="mb-12">
          <a
            href="#"
            className="text-stone-600 underline hover:text-stone-800 transition-colors text-lg"
          >
            Client Portal
          </a>
        </div>

        {/* Copyright */}
        <div className="text-stone-500 text-base">
          © 2025  Serena Blake PsyD.Clinical Psychologist, PLLC. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
}
