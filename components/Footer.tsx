'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Footer() {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');

  useEffect(() => {
    // Check for user's saved preference first
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    const savedManual = localStorage.getItem('themeManual') === 'true';

    if (savedTheme && savedManual) {
      setTheme(savedTheme);
    } else {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      setTheme(mediaQuery.matches ? 'dark' : 'light');

      const handleChange = (e: MediaQueryListEvent) => {
        setTheme(e.matches ? 'dark' : 'light');
      };
      mediaQuery.addEventListener('change', handleChange);
      return () => mediaQuery.removeEventListener('change', handleChange);
    }

    // Listen for theme changes from Navigation
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === 'theme' && e.newValue) {
        setTheme(e.newValue as 'light' | 'dark');
      }
    };
    window.addEventListener('storage', handleStorageChange);

    // Also listen for custom theme change event
    const handleThemeChange = () => {
      const currentTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
      if (currentTheme) {
        setTheme(currentTheme);
      }
    };
    window.addEventListener('themeChange', handleThemeChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('themeChange', handleThemeChange);
    };
  }, []);

  return (
    <footer className={`relative z-20 py-16 border-t ${theme === 'light' ? 'bg-white border-gray-200' : 'bg-[#0a0a0f] border-gray-800'}`}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
          {/* Profile Info */}
          <div className="flex items-center gap-4 mb-6 md:mb-0">
            <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
              <Image
                src="/images/avatar.png"
                alt="Huikang Li"
                width={64}
                height={64}
                className="object-cover w-full h-full"
              />
            </div>
            <div>
              <h3 className={`text-2xl font-bold ${
                theme === 'light' ? 'text-gray-900' : 'text-white'
              }`}>
                Huikang Li (Wesley)
              </h3>
              <p className={theme === 'light' ? 'text-gray-500' : 'text-gray-500'}>
                Halifax, NS, Canada
              </p>
            </div>
          </div>

          {/* Download CV Button */}
          <a
            href="https://drive.google.com/file/d/1J6678_tfvojYurQkmY1gmmUop0uWU7t-/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-2 px-6 py-3 rounded-full border hover:scale-[1.03] active:scale-95 transition-all duration-200 ${
              theme === 'light'
                ? 'border-gray-300 text-gray-900 hover:bg-gray-100'
                : 'border-gray-600 text-white hover:bg-gray-800'
            }`}
            style={{
              boxShadow: '0 8px 24px 0px rgb(0 0 0 / 0.08)',
            }}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Download CV
          </a>
        </div>

        {/* Contact & Social Links */}
        <div className={`flex flex-col md:flex-row md:items-center md:justify-between gap-6 py-8 border-t ${
          theme === 'light' ? 'border-gray-200' : 'border-gray-800'
        }`}>
          {/* Contact Info */}
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-10">
            <a
              href="mailto:huikang.wesley@gmail.com"
              className={`flex items-center gap-2 transition-colors ${
                theme === 'light' ? 'text-gray-600 hover:text-gray-900' : 'text-gray-400 hover:text-white'
              }`}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              huikang.wesley@gmail.com
            </a>
            <a
              href="tel:+17827754746"
              className={`flex items-center gap-2 transition-colors ${
                theme === 'light' ? 'text-gray-600 hover:text-gray-900' : 'text-gray-400 hover:text-white'
              }`}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              +1 (782) 775-4746
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-7">
            <a
              href="https://www.linkedin.com/in/wesley-li-096693a7/"
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-2 transition-colors ${
                theme === 'light' ? 'text-gray-600 hover:text-gray-900' : 'text-gray-400 hover:text-white'
              }`}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              Linkedin
            </a>
            <a
              href="https://www.instagram.com/huikang_wesley/"
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-2 transition-colors ${
                theme === 'light' ? 'text-gray-600 hover:text-gray-900' : 'text-gray-400 hover:text-white'
              }`}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
              </svg>
              Instagram
            </a>
            <a
              href="https://dribbble.com/lihuikang"
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-2 transition-colors ${
                theme === 'light' ? 'text-gray-600 hover:text-gray-900' : 'text-gray-400 hover:text-white'
              }`}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 24C5.385 24 0 18.615 0 12S5.385 0 12 0s12 5.385 12 12-5.385 12-12 12zm10.12-10.358c-.35-.11-3.17-.953-6.384-.438 1.34 3.684 1.887 6.684 1.992 7.308 2.3-1.555 3.936-4.02 4.395-6.87zm-6.115 7.808c-.153-.9-.75-4.032-2.19-7.77l-.066.02c-5.79 2.015-7.86 6.025-8.04 6.4 1.73 1.358 3.92 2.166 6.29 2.166 1.42 0 2.77-.29 4-.816zm-11.62-2.58c.232-.4 3.045-5.055 8.332-6.765.135-.045.27-.084.405-.12-.26-.585-.54-1.167-.832-1.74C7.17 11.775 2.206 11.71 1.756 11.7l-.004.312c0 2.633.998 5.037 2.634 6.855zm-2.42-8.955c.46.008 4.683.026 9.477-1.248-1.698-3.018-3.53-5.558-3.8-5.928-2.868 1.35-5.01 3.99-5.676 7.17zM9.6 2.052c.282.38 2.145 2.914 3.822 6 3.645-1.365 5.19-3.44 5.373-3.702-1.81-1.61-4.19-2.586-6.795-2.586-.825 0-1.63.1-2.4.285zm10.335 3.483c-.218.29-1.935 2.493-5.724 4.04.24.49.47.985.68 1.486.08.18.15.36.22.53 3.41-.43 6.8.26 7.14.33-.02-2.42-.88-4.64-2.31-6.38z"/>
              </svg>
              Dribbble
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className={`pt-8 border-t text-center ${
          theme === 'light' ? 'border-gray-200 text-gray-500' : 'border-gray-800 text-gray-500'
        }`}>
          <p>&copy; 2026 Huikang.Wesley All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
