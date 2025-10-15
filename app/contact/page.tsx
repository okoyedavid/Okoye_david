"use client";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone, Clock } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const ContactPage = () => {
  const theme = "dark";
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const contactInfoRef = useRef<HTMLDivElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animation
      gsap.from(heroRef.current, {
        opacity: 0,
        y: 50,
        duration: 1.2,
        ease: "power3.out",
      });

      // Form and contact info animation
      gsap.from([formRef.current, contactInfoRef.current], {
        opacity: 0,
        y: 40,
        duration: 1,
        delay: 0.3,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".contact-content",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });

      // Contact info items animation
      gsap.from(".contact-info-item", {
        opacity: 0,
        x: -30,
        duration: 0.8,
        delay: 0.6,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: contactInfoRef.current,
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // toast({
    //   title: "Message sent successfully!",
    //   description:
    //     "Thank you for reaching out. I'll get back to you within 24 hours.",
    // });

    setFormData({ name: "", email: "", subject: "", message: "" });
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "okoyedav7@gmail.com",
      link: "mailto:okoyedav7@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+234 (916) 380-8118",
      link: "tel:+234808118",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Nigeria Abuja",
      link: null,
    },
    {
      icon: Clock,
      label: "Response Time",
      value: "Within 24 hours",
      link: null,
    },
  ];

  return (
    <div
      ref={containerRef}
      className={`min-h-screen ${
        theme === "dark" ? "bg-black text-white" : "bg-white text-black"
      } transition-colors duration-300`}
    >
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div ref={heroRef} className="text-center lg:text-left">
            {/* Header */}
            <div className="mb-8">
              <span
                className={`text-sm uppercase tracking-wider ${
                  theme === "dark" ? "text-red-500" : "text-blue-600"
                } font-semibold`}
              >
                {" // Contact"}
              </span>
            </div>

            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-light leading-none mb-8">
              Let&apos;s Work
              <br />
              <span className="font-normal">Together</span>
            </h1>

            <div className="mb-12">
              <p
                className={`text-xl lg:text-2xl ${
                  theme === "dark" ? "text-gray-300" : "text-gray-600"
                } mb-2`}
              >
                {"  // Collaboration & Communication"}
              </p>
              <p
                className={`text-xl lg:text-2xl ${
                  theme === "dark" ? "text-gray-300" : "text-gray-600"
                }`}
              >
                Project Discussion
              </p>
            </div>

            {/* Description */}
            <div className="max-w-4xl mx-auto lg:mx-0">
              <p
                className={`${
                  theme === "dark" ? "text-gray-400" : "text-gray-600"
                } text-lg leading-relaxed mb-8`}
              >
                Ready to transform your ideas into exceptional digital
                experiences? I&apos;d love to hear about your project and
                explore how we can bring your vision to life through modern web
                technologies.
              </p>
              <a
                href="#contact-form"
                className={`inline-flex items-center ${
                  theme === "dark"
                    ? "text-white hover:text-red-400"
                    : "text-black hover:text-blue-600"
                } transition-colors duration-200`}
              >
                <span
                  className={`border-b ${
                    theme === "dark"
                      ? "border-gray-500 hover:border-red-400"
                      : "border-gray-400 hover:border-blue-600"
                  } transition-colors duration-200`}
                >
                  Get In Touch
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form and Info Section */}
      <section id="contact-form" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto contact-content">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
            {/* Contact Form */}
            <div>
              <div className="mb-8">
                <span
                  className={`text-sm uppercase tracking-wider ${
                    theme === "dark" ? "text-red-500" : "text-blue-600"
                  } font-semibold`}
                >
                  {"// Message"}
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light mt-4 mb-6">
                  Send me a message
                </h2>
                <div
                  className={`w-12 h-px ${
                    theme === "dark" ? "bg-red-500" : "bg-blue-600"
                  }`}
                ></div>
              </div>

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <Input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className={`h-12 ${
                        theme === "dark"
                          ? "bg-gray-900/50 border-gray-700 text-white placeholder-gray-500 focus:border-red-500 focus:ring-red-500"
                          : "bg-gray-50 border-gray-300 text-black placeholder-gray-500 focus:border-blue-500 focus:ring-blue-500"
                      }`}
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className={`h-12 ${
                        theme === "dark"
                          ? "bg-gray-900/50 border-gray-700 text-white placeholder-gray-500 focus:border-red-500 focus:ring-red-500"
                          : "bg-gray-50 border-gray-300 text-black placeholder-gray-500 focus:border-blue-500 focus:ring-blue-500"
                      }`}
                    />
                  </div>
                </div>

                <div>
                  <Input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className={`h-12 ${
                      theme === "dark"
                        ? "bg-gray-900/50 border-gray-700 text-white placeholder-gray-500 focus:border-red-500 focus:ring-red-500"
                        : "bg-gray-50 border-gray-300 text-black placeholder-gray-500 focus:border-blue-500 focus:ring-blue-500"
                    }`}
                  />
                </div>

                <div>
                  <Textarea
                    name="message"
                    placeholder="Tell me about your project..."
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className={`resize-none ${
                      theme === "dark"
                        ? "bg-gray-900/50 border-gray-700 text-white placeholder-gray-500 focus:border-red-500 focus:ring-red-500"
                        : "bg-gray-50 border-gray-300 text-black placeholder-gray-500 focus:border-blue-500 focus:ring-blue-500"
                    }`}
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full h-12 font-medium transition-all duration-200 disabled:opacity-50 ${
                    theme === "dark"
                      ? "bg-red-600 hover:bg-red-700 text-white"
                      : "bg-blue-600 hover:bg-blue-700 text-white"
                  }`}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div ref={contactInfoRef}>
              <div className="mb-8">
                <span
                  className={`text-sm uppercase tracking-wider ${
                    theme === "dark" ? "text-red-500" : "text-blue-600"
                  } font-semibold`}
                >
                  {" // Information"}
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light mt-4 mb-6">
                  Get in touch
                </h2>
                <div
                  className={`w-12 h-px ${
                    theme === "dark" ? "bg-red-500" : "bg-blue-600"
                  }`}
                ></div>
              </div>

              <div className="space-y-8">
                {contactInfo.map((item, index) => (
                  <div
                    key={index}
                    className="contact-info-item flex items-start space-x-4"
                  >
                    <div
                      className={`flex-shrink-0 w-12 h-12 ${
                        theme === "dark" ? "bg-red-600/10" : "bg-blue-600/10"
                      } rounded-lg flex items-center justify-center`}
                    >
                      <item.icon
                        className={`w-5 h-5 ${
                          theme === "dark" ? "text-red-500" : "text-blue-600"
                        }`}
                      />
                    </div>
                    <div className="flex-1">
                      <h3
                        className={`text-sm uppercase tracking-wider ${
                          theme === "dark" ? "text-gray-400" : "text-gray-500"
                        } mb-1`}
                      >
                        {item.label}
                      </h3>
                      {item.link ? (
                        <a
                          href={item.link}
                          className={`${
                            theme === "dark"
                              ? "text-white hover:text-red-400"
                              : "text-black hover:text-blue-600"
                          } transition-colors duration-200`}
                        >
                          {item.value}
                        </a>
                      ) : (
                        <span
                          className={
                            theme === "dark" ? "text-white" : "text-black"
                          }
                        >
                          {item.value}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div className="mt-12">
                <h3
                  className={`text-sm uppercase tracking-wider ${
                    theme === "dark" ? "text-gray-400" : "text-gray-500"
                  } mb-4`}
                >
                  Follow me
                </h3>
                <div className="flex space-x-6">
                  <a
                    href="https://www.linkedin.com/in/okoyedavid7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-10 h-10 ${
                      theme === "dark"
                        ? "bg-gray-800 hover:bg-red-600"
                        : "bg-gray-200 hover:bg-blue-600"
                    } rounded-lg flex items-center justify-center ${
                      theme === "dark" ? "hover:text-white" : "hover:text-white"
                    } transition-all duration-200`}
                  >
                    <span className="text-xs font-semibold">in</span>
                  </a>
                  <a
                    href="https://twitter.com/icarus7_"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-10 h-10 ${
                      theme === "dark"
                        ? "bg-gray-800 hover:bg-red-600"
                        : "bg-gray-200 hover:bg-blue-600"
                    } rounded-lg flex items-center justify-center ${
                      theme === "dark" ? "hover:text-white" : "hover:text-white"
                    } transition-all duration-200`}
                  >
                    <span className="text-xs font-semibold">tw</span>
                  </a>
                  <a
                    href="https://github.com/okoyedavid"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-10 h-10 ${
                      theme === "dark"
                        ? "bg-gray-800 hover:bg-red-600"
                        : "bg-gray-200 hover:bg-blue-600"
                    } rounded-lg flex items-center justify-center ${
                      theme === "dark" ? "hover:text-white" : "hover:text-white"
                    } transition-all duration-200`}
                  >
                    <span className="text-xs font-semibold">gh</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
