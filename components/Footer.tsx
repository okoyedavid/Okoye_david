"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative mt-20 border-t border-white/10 dark:border-white/20 bg-white/10 dark:bg-black/20 backdrop-blur-xl">
      <div className="max-w-6xl mx-auto px-6 py-12 grid gap-8 text-left md:grid-cols-3">
        {/* Brand Section */}
        <div className="col-span-2 md:col-auto">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            Okoye David
          </h1>
          <span className="text-gray-600 dark:text-gray-400 text-sm">
            Full-Stack Developer
          </span>
        </div>

        {/* Links Section */}
        <ul className="flex col-span-2 flex-col md:flex-row justify-start items-start md:items-center gap-4 text-gray-700 dark:text-gray-300 text-sm font-medium">
          <li>
            <Link
              href="/projects"
              className="hover:text-blue-500 dark:hover:text-red-400 transition-colors duration-300"
            >
              Projects
            </Link>
          </li>
          <li>
            <a
              href="#work"
              className="hover:text-blue-500 dark:hover:text-red-400 transition-colors duration-300"
            >
              Work
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="hover:text-blue-500 dark:hover:text-red-400 transition-colors duration-300"
            >
              Contact
            </a>
          </li>
        </ul>

        {/* Social Icons */}
        <div className="flex items-center gap-5">
          <a
            href="https://www.github.com/okoyedavid"
            target="_blank"
            className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-red-400 transition-all duration-300 transform hover:scale-110"
          >
            <i className="uil uil-github text-xl"></i>
          </a>

          <a
            href="https://www.linkedin.com/in/okoyedavid7"
            target="_blank"
            className="text-gray-700 dark:text-gray-300 hover:text-pink-500 dark:hover:text-red-400 transition-all duration-300 transform hover:scale-110"
          >
            <i className="uil uil-linkedln text-xl"></i>
          </a>

          <a
            href="https://twitter.com/icarus7_"
            target="_blank"
            className="text-gray-700 dark:text-gray-300 hover:text-blue-400 dark:hover:text-red-400 transition-all duration-300 transform hover:scale-110"
          >
            <i className="uil uil-twitter text-xl"></i>
          </a>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="border-t border-white/10 dark:border-white/20 py-4 text-center">
        <p className="text-sm text-gray-600 dark:text-gray-400">
          &#169; All rights reserved.
        </p>
      </div>
    </footer>
  );
}
