"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
// import { useTheme } from "@/contexts/ThemeContext";
import LoginForm from "@/components/LoginForm";

const LoginPage = () => {
  //   const { theme } = useTheme();
  const theme = "dark";
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animation
      gsap.from(heroRef.current, {
        opacity: 0,
        y: 50,
        duration: 1.2,
        ease: "power3.out",
      });

      // Form animation
      gsap.from(formRef.current, {
        opacity: 0,
        y: 30,
        duration: 1,
        delay: 0.3,
        ease: "power3.out",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

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
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-20">
            {/* Left side - Hero Content */}
            <div
              ref={heroRef}
              className="order-2 lg:order-1 text-center lg:text-left"
            >
              <div className="mb-8">
                <span
                  className={`text-sm uppercase tracking-wider ${
                    theme === "dark" ? "text-red-500" : "text-blue-600"
                  } font-semibold`}
                >
                  {"// Authentication"}
                </span>
              </div>

              <h1 className="text-6xl sm:text-7xl lg:text-8xl font-light leading-none mb-8">
                Admin
                <br />
                Access
              </h1>

              <div className="mb-12">
                <p
                  className={`text-xl lg:text-2xl ${
                    theme === "dark" ? "text-gray-300" : "text-gray-600"
                  } mb-2`}
                >
                  {"// Secure Login Portal"}
                </p>
                <p
                  className={`text-xl lg:text-2xl ${
                    theme === "dark" ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  Dashboard Management
                </p>
              </div>

              {/* Description */}
              <div className="max-w-2xl mx-auto lg:mx-0">
                <p
                  className={`${
                    theme === "dark" ? "text-gray-400" : "text-gray-600"
                  } text-lg leading-relaxed mb-8`}
                >
                  Access the admin dashboard to manage content, monitor
                  analytics, and configure system settings. Secure
                  authentication ensures your data remains protected.
                </p>

                {/* Social Links */}
                <div className="flex flex-col space-y-3 items-center lg:items-start">
                  <a
                    href="https://linkedin.com"
                    className={`flex items-center space-x-3 ${
                      theme === "dark"
                        ? "text-gray-400 hover:text-white"
                        : "text-gray-600 hover:text-black"
                    } transition-colors duration-200`}
                  >
                    <div
                      className={`w-5 h-5 ${
                        theme === "dark" ? "bg-gray-600" : "bg-gray-400"
                      } rounded-sm flex items-center justify-center`}
                    >
                      <span className="text-xs font-bold text-white">in</span>
                    </div>
                    <span className="text-sm">LinkedIn</span>
                  </a>
                  <a
                    href="https://github.com"
                    className={`flex items-center space-x-3 ${
                      theme === "dark"
                        ? "text-gray-400 hover:text-white"
                        : "text-gray-600 hover:text-black"
                    } transition-colors duration-200`}
                  >
                    <div
                      className={`w-5 h-5 ${
                        theme === "dark" ? "bg-gray-600" : "bg-gray-400"
                      } rounded-sm flex items-center justify-center`}
                    >
                      <span className="text-xs font-bold text-white">gh</span>
                    </div>
                    <span className="text-sm">GitHub</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Right side - Login Form */}
            <div
              ref={formRef}
              className="order-1 lg:order-2 flex justify-center lg:justify-end"
            >
              <div className="w-full max-w-md">
                <LoginForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LoginPage;
