'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import ContactDialog from '@/components/ContactDialog';

export default function Navigation() {
  const pathname = usePathname();
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');
  const [showBackground, setShowBackground] = useState(false);
  const [isManualOverride, setIsManualOverride] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [hoverTimeout, setHoverTimeout] = useState<NodeJS.Timeout | null>(null);

  // Hide navigation on project detail pages
  const isProjectPage = pathname?.startsWith('/projects/');

  useEffect(() => {
    // Check if user has a saved preference
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    const savedManual = localStorage.getItem('themeManual') === 'true';

    if (savedTheme && savedManual) {
      setTheme(savedTheme);
      setIsManualOverride(true);
      document.documentElement.setAttribute('data-theme', savedTheme);
    } else {
      // Check system preference
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      const systemTheme = mediaQuery.matches ? 'dark' : 'light';
      setTheme(systemTheme);
      document.documentElement.setAttribute('data-theme', systemTheme);

      const handleChange = (e: MediaQueryListEvent) => {
        if (!isManualOverride) {
          const newTheme = e.matches ? 'dark' : 'light';
          setTheme(newTheme);
          document.documentElement.setAttribute('data-theme', newTheme);
        }
      };
      mediaQuery.addEventListener('change', handleChange);
      return () => mediaQuery.removeEventListener('change', handleChange);
    }
  }, [isManualOverride]);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    setIsManualOverride(true);
    localStorage.setItem('theme', newTheme);
    localStorage.setItem('themeManual', 'true');
    document.documentElement.setAttribute('data-theme', newTheme);
    // Dispatch custom event for other components
    window.dispatchEvent(new Event('themeChange'));
  };

  const handleMouseEnter = () => {
    const timeout = setTimeout(() => {
      setShowTooltip(true);
    }, 2000);
    setHoverTimeout(timeout);
  };

  const handleMouseLeave = () => {
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
      setHoverTimeout(null);
    }
    setShowTooltip(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      // Show background when scrolled past 50px (when content starts entering nav area)
      setShowBackground(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Don't render on project pages
  if (isProjectPage) {
    return null;
  }


  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        showBackground
          ? theme === 'light'
            ? 'bg-white/80 backdrop-blur-md border-b border-gray-200'
            : 'bg-[#0a0a0f]/80 backdrop-blur-md border-b border-gray-800'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo / Name */}
        <Link
          href="/"
          className={`text-xl font-bold hover:scale-[1.03] active:scale-95 transition-all duration-200 ${
            theme === 'light' ? 'text-gray-900' : 'text-white'
          }`}
        >
          Huikang (Wesley)
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center gap-8">
          <a
            href="#work"
            className={`text-base font-medium hover:scale-[1.03] active:scale-95 transition-all duration-200 ${
              theme === 'light'
                ? 'text-[#111827]'
                : 'text-white'
            }`}
          >
            My Work
          </a>

          {/* Contact Button + Dialog */}
          <div className="relative">
            <button
              onClick={() => setIsContactOpen(true)}
              className={`text-base font-medium hover:scale-[1.03] active:scale-95 transition-all duration-200 ${
                theme === 'light'
                  ? 'text-[#111827]'
                  : 'text-white'
              }`}
            >
              Contact
            </button>
            <ContactDialog isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} theme={theme} />
          </div>

          {/* Theme Toggle - iOS Style Switch */}
          <div className="relative">
            <button
              onClick={toggleTheme}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className="relative cursor-pointer"
              style={{
                width: '101px',
                height: '46px',
                borderRadius: '25px',
                background: theme === 'dark' ? '#252525' : '#EBEBEB',
                boxShadow: theme === 'dark'
                  ? '0 -1px 0 0 rgba(255, 255, 255, 0.08) inset, 0 1px 1px 0 rgba(0, 0, 0, 0.40) inset'
                  : '0 -1px 0 0 rgba(255, 255, 255, 0.08) inset, 0 1px 1px 0 rgba(0, 0, 0, 0.08) inset',
                padding: '3px',
              }}
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            >
            {/* Trapezoid Background - Behind slider */}
            <div className="absolute inset-0 pointer-events-none" style={{ padding: '3px', zIndex: 5 }}>
              {/* Dark mode trapezoid - under moon icon */}
              {theme === 'dark' && (
                <motion.div
                  className="absolute"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    delay: 0.4,
                    duration: 0.15,
                  }}
                  style={{
                    width: '48px',
                    height: '40px',
                    left: '3px',
                    display: 'flex',
                    alignItems: 'flex-end',
                    justifyContent: 'center',
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="12"
                    viewBox="0 0 28 12"
                    fill="none"
                  >
                    <path
                      d="M0 0H28L21.5788 11.0077C21.2204 11.6222 20.5626 12 19.8513 12H8.14874C7.43741 12 6.7796 11.6222 6.42118 11.0077L0 0Z"
                      fill="#FFDE8C"
                    />
                  </svg>
                </motion.div>
              )}

              {/* Light mode trapezoid - under sun icon */}
              {theme === 'light' && (
                <motion.div
                  className="absolute"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    delay: 0.4,
                    duration: 0.15,
                  }}
                  style={{
                    width: '48px',
                    height: '40px',
                    right: '3px',
                    display: 'flex',
                    alignItems: 'flex-end',
                    justifyContent: 'center',
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="12"
                    viewBox="0 0 28 12"
                    fill="none"
                  >
                    <path
                      d="M0 0H28L21.5788 11.0077C21.2204 11.6222 20.5626 12 19.8513 12H8.14874C7.43741 12 6.7796 11.6222 6.42118 11.0077L0 0Z"
                      fill="#FFDE8C"
                    />
                  </svg>
                </motion.div>
              )}
            </div>

            {/* Animated Slider - Behind icons */}
            <motion.div
              className="relative z-10"
              initial={false}
              animate={{
                x: theme === 'dark' ? 0 : 47, // 101px - 48px - 6px (total padding) = 47px
              }}
              transition={{
                type: 'spring',
                stiffness: 500,
                damping: 30,
              }}
              style={{
                width: '48px',
                height: '40px',
                borderRadius: '20px',
                border: '0.5px solid rgba(255, 255, 255, 0.60)',
                background: 'rgba(255, 255, 255, 0.20)',
                backdropFilter: 'blur(5px)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            />

            {/* Icons Container - Above slider */}
            <div className="absolute inset-0 flex items-center pointer-events-none z-20" style={{ padding: '3px' }}>
              {/* Moon Icon - Left Side (centered in left 44px slot) */}
              <div
                className="flex items-center justify-center absolute"
                style={{
                  width: '48px',
                  height: '40px',
                  left: '3px',
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 23 22"
                  fill="none"
                  style={{
                    opacity: theme === 'dark' ? 1 : 0.6,
                    transition: 'opacity 0.3s ease',
                  }}
                >
                  <path
                    d="M0 9.88236C0 5.7421 2.21305 2.12099 5.52002 0.132034C6.20509 -0.279969 7 0.332942 7 1.13236C7.00019 7.41444 12.0929 12.5074 18.375 12.5074C19.1488 12.5074 19.9042 12.429 20.6343 12.2806C21.5226 12.1001 22.3988 12.8287 22.096 13.6831C20.5322 18.0961 16.324 21.2574 11.375 21.2574V18.924C14.5397 18.924 17.3259 17.2958 18.9412 14.8282C18.7534 14.8359 18.5646 14.8407 18.375 14.8407C11.6417 14.8407 6.04665 9.98519 4.88997 3.58532C3.30566 5.21443 2.33333 7.43508 2.33333 9.88236C2.33352 14.8759 6.38163 18.924 11.375 18.924V21.2574C5.09288 21.2574 0.00018866 16.1644 0 9.88236Z"
                    fill={theme === 'dark' ? '#FFFFFF' : '#000000'}
                  />
                </svg>
                {/* Yellow indicator for dark mode - centered at bottom of slider area */}
                {theme === 'dark' && (
                  <div
                    className="absolute"
                    style={{
                      width: '12px',
                      height: '2px',
                      borderRadius: '2px',
                      background: '#FFCA44',
                      bottom: '0px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                    }}
                  />
                )}
              </div>

              {/* Sun Icon - Right Side (centered in right 44px slot) */}
              <div
                className="flex items-center justify-center absolute"
                style={{
                  width: '48px',
                  height: '40px',
                  right: '3px',
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="21"
                  height="21"
                  viewBox="0 0 28 28"
                  fill="none"
                  style={{
                    opacity: theme === 'dark' ? 0.7 : 1,
                    transition: 'opacity 0.3s ease',
                  }}
                >
                  <path
                    d="M14 22.167C14.6442 22.167 15.1668 22.6888 15.167 23.333V26.833C15.167 27.4773 14.6443 28 14 28C13.3557 28 12.833 27.4773 12.833 26.833V23.333C12.8332 22.6888 13.3558 22.167 14 22.167ZM19.6582 19.6582C20.1138 19.2026 20.852 19.2026 21.3076 19.6582L23.958 22.3086C24.4133 22.7642 24.4135 23.5025 23.958 23.958C23.5025 24.4134 22.7642 24.4132 22.3086 23.958L19.6582 21.3076C19.2026 20.852 19.2027 20.1138 19.6582 19.6582ZM6.67188 19.6758C7.12737 19.2206 7.86573 19.2207 8.32129 19.6758C8.7769 20.1314 8.7769 20.8706 8.32129 21.3262L5.69043 23.957C5.23483 24.4125 4.49659 24.4125 4.04102 23.957C3.58545 23.5015 3.58553 22.7632 4.04102 22.3076L6.67188 19.6758ZM14 7.58301C17.5438 7.58301 20.417 10.4562 20.417 14C20.417 17.5438 17.5438 20.417 14 20.417C10.4562 20.417 7.58301 17.5438 7.58301 14C7.58301 10.4562 10.4562 7.58301 14 7.58301ZM14 9.91699C11.7448 9.91699 9.91699 11.7448 9.91699 14C9.91699 16.2552 11.7448 18.083 14 18.083C16.2552 18.083 18.083 16.2552 18.083 14C18.083 11.7448 16.2552 9.91699 14 9.91699ZM4.66699 12.833C5.31117 12.8332 5.83301 13.3558 5.83301 14C5.83301 14.6442 5.31117 15.1668 4.66699 15.167H1.16699C0.52266 15.167 1.93278e-07 14.6443 0 14C0 13.3557 0.52266 12.833 1.16699 12.833H4.66699ZM26.833 12.833C27.4773 12.833 28 13.3557 28 14C28 14.6443 27.4773 15.167 26.833 15.167H23.333C22.6888 15.1668 22.167 14.6442 22.167 14C22.167 13.3558 22.6888 12.8332 23.333 12.833H26.833ZM3.8418 3.8418C4.29741 3.38619 5.03658 3.38619 5.49219 3.8418L7.9668 6.31641C8.42241 6.77202 8.42241 7.51119 7.9668 7.9668C7.51118 8.42232 6.77199 8.42238 6.31641 7.9668L3.8418 5.49121C3.38647 5.03561 3.38636 4.29733 3.8418 3.8418ZM22.5088 3.8418C22.9644 3.38647 23.7027 3.38636 24.1582 3.8418C24.6138 4.29741 24.6138 5.03658 24.1582 5.49219L21.6836 7.9668C21.228 8.42241 20.4888 8.42241 20.0332 7.9668C19.5777 7.51118 19.5776 6.77199 20.0332 6.31641L22.5088 3.8418ZM14 0C14.6443 1.93277e-07 15.167 0.52266 15.167 1.16699V4.66699C15.1668 5.31117 14.6442 5.83301 14 5.83301C13.3558 5.83301 12.8332 5.31117 12.833 4.66699V1.16699C12.833 0.52266 13.3557 0 14 0Z"
                    fill={theme === 'dark' ? '#FFFFFF' : '#000000'}
                  />
                </svg>
                {/* Yellow indicator for light mode - centered at bottom of slider area */}
                {theme === 'light' && (
                  <div
                    className="absolute"
                    style={{
                      width: '12px',
                      height: '2px',
                      borderRadius: '2px',
                      background: '#FFCA44',
                      bottom: '0px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                    }}
                  />
                )}
              </div>
            </div>
          </button>

          {/* Tooltip */}
          {showTooltip && (
            <motion.div
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 pointer-events-none"
              style={{
                fontSize: '12px',
                padding: '4px 8px',
                borderRadius: '6px',
                background: theme === 'dark' ? 'rgba(255, 255, 255, 0.9)' : 'rgba(0, 0, 0, 0.75)',
                color: theme === 'dark' ? '#000' : '#fff',
                whiteSpace: 'nowrap',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
              }}
            >
              Theme
            </motion.div>
          )}
        </div>
      </div>
    </div>
    </nav>
  );
}
