"use client";
import React, { useEffect, useRef, useState } from "react";
import { Send, Phone, Mail, MapPin, Clock } from "lucide-react";

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
    preferredTime: "",
    agreeToContact: false,
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

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

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const validatePhone = (phone) => {
    const re = /^[\+]?[\d\s\-\(\)]{10,}$/;
    return re.test(phone.replace(/\s/g, ""));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!validatePhone(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Please tell us what brings you here";
    }

    if (!formData.preferredTime.trim()) {
      newErrors.preferredTime = "Preferred contact time is required";
    }

    if (!formData.agreeToContact) {
      newErrors.agreeToContact = "You must agree to be contacted";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setSubmitSuccess(true);
      setFormData({
        name: "",
        phone: "",
        email: "",
        message: "",
        preferredTime: "",
        agreeToContact: false,
      });
    } catch (error) {
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitSuccess) {
    return (
      <section id="contact" className="py-20 bg-white" ref={sectionRef}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Send className="w-12 h-12 text-green-600" />
            </div>
            <h2 className="text-3xl font-serif text-stone-800 mb-4">
              Thank You!
            </h2>
            <p className="text-stone-600 mb-8">
              Your message has been received. I'll get back to you within 24
              hours.
            </p>
            <button
              onClick={() => setSubmitSuccess(false)}
              className="inline-flex items-center px-6 py-3 bg-amber-700 text-white font-medium rounded-full hover:bg-amber-800 transition-all duration-300"
            >
              Send Another Message
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-20 bg-white" ref={sectionRef}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2
            className={`text-4xl md:text-5xl font-serif text-stone-700 mb-4 transition-all duration-1000 transform ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            Get In Touch
          </h2>
          <div
            className={`h-1 w-24 bg-amber-700 mx-auto mb-6 transition-all duration-1000 transform origin-center ${
              isVisible ? "scale-x-100" : "scale-x-0"
            }`}
            style={{ transitionDelay: "0.3s" }}
          ></div>
          <p
            className={`text-stone-600 max-w-2xl mx-auto transition-all duration-1000 transform ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
            style={{ transitionDelay: "0.5s" }}
          >
            Ready to take the first step? I'd love to hear from you. Fill out
            the form below and I'll get back to you within 24 hours to discuss
            how we can work together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Contact Info */}
          <div
            className={`space-y-8 transition-all duration-1000 transform ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "-translate-x-10 opacity-0"
            }`}
            style={{ transitionDelay: "0.2s" }}
          >
            <div className="bg-stone-50 rounded-2xl p-8">
              <h3 className="text-2xl font-serif text-stone-800 mb-6">
                Let's Connect
              </h3>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-amber-700" />
                  </div>
                  <div>
                    <h4 className="font-medium text-stone-800">Phone</h4>
                    <p className="text-stone-600"> (323) 555-0192</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-amber-700" />
                  </div>
                  <div>
                    <h4 className="font-medium text-stone-800">Email</h4>
                    <p className="text-stone-600">serena@blakepsychology.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-amber-700" />
                  </div>
                  <div>
                    <h4 className="font-medium text-stone-800">Location</h4>
                    <p className="text-stone-600">
                      1287 Maplewood Drive
                      <br />
                      Los Angeles
                      <br />
                      CA 90026
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-amber-700" />
                  </div>
                  <div>
                    <h4 className="font-medium text-stone-800">Hours</h4>
                    <p className="text-stone-600">
                      Tue & Thu: 10AM - 6PM(In-person)
                      <br />
                      Mon, Wed & Fri: 1PM - 5PM(virtual via Zoom)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-amber-50 rounded-2xl p-8">
              <h3 className="text-xl font-serif text-stone-800 mb-4">
                What to Expect
              </h3>
              <ul className="space-y-3 text-stone-600">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-amber-700 rounded-full mt-2 flex-shrink-0"></div>
                  <span>I'll respond within 24 hours</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-amber-700 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Initial consultation is complimentary</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-amber-700 rounded-full mt-2 flex-shrink-0"></div>
                  <span>All conversations are confidential</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div
            className={`transition-all duration-1000 transform ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "translate-x-10 opacity-0"
            }`}
            style={{ transitionDelay: "0.4s" }}
          >
            <div className="space-y-6">
              {/* Name Field */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-stone-700 mb-2"
                >
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all duration-300 ${
                    errors.name
                      ? "border-red-500 bg-red-50"
                      : "border-stone-300 hover:border-stone-400"
                  }`}
                  placeholder="Enter your full name"
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-600 flex items-center">
                    <span className="w-4 h-4 mr-1">⚠</span>
                    {errors.name}
                  </p>
                )}
              </div>

              {/* Phone Field */}
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-stone-700 mb-2"
                >
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all duration-300 ${
                    errors.phone
                      ? "border-red-500 bg-red-50"
                      : "border-stone-300 hover:border-stone-400"
                  }`}
                  placeholder="(555) 123-4567"
                />
                {errors.phone && (
                  <p className="mt-1 text-sm text-red-600 flex items-center">
                    <span className="w-4 h-4 mr-1">⚠</span>
                    {errors.phone}
                  </p>
                )}
              </div>

              {/* Email Field */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-stone-700 mb-2"
                >
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all duration-300 ${
                    errors.email
                      ? "border-red-500 bg-red-50"
                      : "border-stone-300 hover:border-stone-400"
                  }`}
                  placeholder="your.email@example.com"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600 flex items-center">
                    <span className="w-4 h-4 mr-1">⚠</span>
                    {errors.email}
                  </p>
                )}
              </div>

              {/* Message Field */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-stone-700 mb-2"
                >
                  What brings you here? *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all duration-300 resize-none ${
                    errors.message
                      ? "border-red-500 bg-red-50"
                      : "border-stone-300 hover:border-stone-400"
                  }`}
                  placeholder="Please share what you'd like to work on or any questions you have..."
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-600 flex items-center">
                    <span className="w-4 h-4 mr-1">⚠</span>
                    {errors.message}
                  </p>
                )}
              </div>

              {/* Preferred Time Field */}
              <div>
                <label
                  htmlFor="preferredTime"
                  className="block text-sm font-medium text-stone-700 mb-2"
                >
                  Preferred time to reach you *
                </label>
                <input
                  type="text"
                  id="preferredTime"
                  name="preferredTime"
                  value={formData.preferredTime}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all duration-300 ${
                    errors.preferredTime
                      ? "border-red-500 bg-red-50"
                      : "border-stone-300 hover:border-stone-400"
                  }`}
                  placeholder="e.g., Weekday mornings, Evenings after 6pm, etc."
                />
                {errors.preferredTime && (
                  <p className="mt-1 text-sm text-red-600 flex items-center">
                    <span className="w-4 h-4 mr-1">⚠</span>
                    {errors.preferredTime}
                  </p>
                )}
              </div>

              {/* Consent Checkbox */}
              <div>
                <div className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    id="agreeToContact"
                    name="agreeToContact"
                    checked={formData.agreeToContact}
                    onChange={handleInputChange}
                    className={`mt-1 w-4 h-4 text-amber-600 border-2 rounded focus:ring-amber-500 focus:ring-2 ${
                      errors.agreeToContact
                        ? "border-red-500"
                        : "border-stone-300"
                    }`}
                  />
                  <label
                    htmlFor="agreeToContact"
                    className="text-sm text-stone-600 leading-relaxed"
                  >
                    I agree to be contacted by Dr. Jennifer Hahm regarding my
                    inquiry. I understand that all communication will be kept
                    confidential and I can withdraw consent at any time. *
                  </label>
                </div>
                {errors.agreeToContact && (
                  <p className="mt-2 text-sm text-red-600 flex items-center">
                    <span className="w-4 h-4 mr-1">⚠</span>
                    {errors.agreeToContact}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className={`w-full flex items-center justify-center px-8 py-4 bg-amber-700 text-white font-medium rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-xl ${
                    isSubmitting
                      ? "opacity-75 cursor-not-allowed"
                      : "hover:bg-amber-800"
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                      Sending Message...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 w-5 h-5" />
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
