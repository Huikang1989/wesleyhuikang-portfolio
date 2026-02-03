'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '@/components/ProjectCard';
import { getAllProjects } from '@/lib/projects';
// import DotGrid from '@/components/DotGrid';
import ColorBends from '@/components/ColorBends';

export default function HomePage() {
  const projects = getAllProjects();
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');
  const [glassOpacity, setGlassOpacity] = useState(0);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Check for user's saved preference first
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    const savedManual = localStorage.getItem('themeManual') === 'true';

    if (savedTheme && savedManual) {
      setTheme(savedTheme);
    } else {
      // Check system preference
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      setTheme(mediaQuery.matches ? 'dark' : 'light');

      // Listen for system changes
      const handleChange = (e: MediaQueryListEvent) => {
        const manualOverride = localStorage.getItem('themeManual') === 'true';
        if (!manualOverride) {
          setTheme(e.matches ? 'dark' : 'light');
        }
      };
      mediaQuery.addEventListener('change', handleChange);
      return () => mediaQuery.removeEventListener('change', handleChange);
    }
  }, []);

  // Listen for manual theme changes from Navigation
  useEffect(() => {
    const handleThemeChange = () => {
      const currentTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
      if (currentTheme) {
        setTheme(currentTheme);
      }
    };
    window.addEventListener('themeChange', handleThemeChange);
    return () => window.removeEventListener('themeChange', handleThemeChange);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;

      const heroHeight = heroRef.current.offsetHeight;
      const viewportHeight = window.innerHeight;
      const scrollY = window.scrollY;

      // Glass transition: 0 when My Work appears in bottom 1/3, 0.8 when My Work fills screen
      // My Work starts at heroHeight from top, which is ~66vh
      // When scrollY = 0, My Work is visible in bottom ~33vh
      // When scrollY = heroHeight - viewportHeight * 0.33, My Work is near top
      // When scrollY = heroHeight, My Work fills screen (hero fully scrolled out)

      const startFade = 0; // Start glass effect immediately on scroll
      const endFade = heroHeight - viewportHeight * 0.33; // When My Work nearly fills screen
      const maxOpacity = 0.8;

      if (scrollY <= startFade) {
        setGlassOpacity(0);
      } else if (scrollY >= endFade) {
        setGlassOpacity(maxOpacity);
      } else {
        // Smooth easing for gradual transition
        const progress = (scrollY - startFade) / (endFade - startFade);
        // Use easeOutQuad for smoother feel
        const easedProgress = progress * (2 - progress);
        setGlassOpacity(easedProgress * maxOpacity);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Fixed Color Bends Background */}
      <div
        className={`fixed inset-0 z-0 transition-colors duration-300 ${
          theme === 'light' ? 'bg-white' : 'bg-[#0a0a0f]'
        }`}
      >
        <ColorBends
          rotation={-57}
          speed={0.2}
          scale={1.2}
          frequency={1}
          warpStrength={1}
          mouseInfluence={1.25}
          parallax={0.5}
          noise={0.13}
          transparent={true}
          autoRotate={0}
          theme={theme}
          saturation={0.5}
          colors={theme === 'light'
            ? ["#FFC8D5", "#FFD2A3", "#FFF0B4", "#CDFFED", "#C1EBFF", "#C2C6FF", "#FFDEF7"]
            : []
          }
        />
      </div>

      {/* Frosted Glass Overlay - fades in on scroll */}
      <div
        className="fixed inset-0 z-10 pointer-events-none transition-opacity duration-150"
        style={{
          opacity: glassOpacity,
          backgroundColor: theme === 'light'
            ? 'rgba(255, 255, 255, 1)'
            : 'rgba(10, 10, 15, 1)',
          backdropFilter: glassOpacity > 0 ? 'blur(20px)' : 'none',
          WebkitBackdropFilter: glassOpacity > 0 ? 'blur(20px)' : 'none',
        }}
      />

      {/* Page Content */}
      <div className="relative z-20">
        {/* Hero Section with Bio */}
        <section
          ref={heroRef}
          className="relative pt-32 pb-8 min-h-[60vh]"
        >
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl"
            >
              {/* Name */}
              <h1 className={`text-6xl md:text-7xl lg:text-8xl font-bold mb-12 ${
                theme === 'light' ? 'text-gray-900' : 'text-white'
              }`}>
                Huikang Li (Wesley)
              </h1>

              {/* Bio */}
              <p className={`text-2xl leading-relaxed max-w-[53rem] ${
                theme === 'light' ? 'text-gray-900' : 'text-white'
              }`}>
                Hi! I'm a product designer with 10+ years of experience creating products that meet real user needs and business goals. I have a strong passion for learning, and in the AI era I explore advanced tools to turn complexity into clear, reliable experiences. I use AI as a practical assistant to work more efficiently, iterate faster, and find better user experiences as technology evolves.
              </p>
            </motion.div>
          </div>
        </section>

        {/* My Work Section */}
        <section className="py-8">
          <div className="max-w-7xl mx-auto px-6">
            <motion.h2
              id="work"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`text-[36px] font-bold mb-12 ${
                theme === 'light' ? 'text-gray-900' : 'text-white'
              }`}
            >
              My Work
            </motion.h2>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12">
              {projects.map((project, index) => (
                <ProjectCard key={project.slug} project={project} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* Work Experience Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`text-[36px] font-bold mb-12 ${
                theme === 'light' ? 'text-gray-900' : 'text-white'
              }`}
            >
              Work Experience
            </motion.h2>

            <div className="space-y-8 max-w-4xl">
              {/* Aira Tech */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className={`border-l-2 pl-6 py-2 ${
                  theme === 'light' ? 'border-gray-200' : 'border-gray-700'
                }`}
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                  <h3 className={`text-xl font-semibold ${
                    theme === 'light' ? 'text-gray-900' : 'text-white'
                  }`}>Lead Designer</h3>
                  <span className={`text-lg ${theme === 'light' ? 'text-[#374151]' : 'text-gray-400'}`}>2024.Dec - Present</span>
                </div>
                <p className={`text-lg font-bold mb-1 ${theme === 'light' ? 'text-[#374151]' : 'text-gray-300'}`}>Aira Tech</p>
                <p className={`text-lg ${theme === 'light' ? 'text-[#374151]' : 'text-gray-400'}`}>Canada, Remote</p>
              </motion.div>

              {/* Tencent */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className={`border-l-2 pl-6 py-2 ${
                  theme === 'light' ? 'border-gray-200' : 'border-gray-700'
                }`}
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                  <h3 className={`text-xl font-semibold ${
                    theme === 'light' ? 'text-gray-900' : 'text-white'
                  }`}>Sr. Product Designer</h3>
                  <span className={`text-lg ${theme === 'light' ? 'text-[#374151]' : 'text-gray-400'}`}>2016.Dec - 2024.May</span>
                </div>
                <p className={`text-lg font-bold mb-1 ${theme === 'light' ? 'text-[#374151]' : 'text-gray-300'}`}>Tencent</p>
                <p className={`text-lg ${theme === 'light' ? 'text-[#374151]' : 'text-gray-400'}`}>Shenzhen, China</p>
              </motion.div>

              {/* Smartisan */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className={`border-l-2 pl-6 py-2 ${
                  theme === 'light' ? 'border-gray-200' : 'border-gray-700'
                }`}
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                  <h3 className={`text-xl font-semibold ${
                    theme === 'light' ? 'text-gray-900' : 'text-white'
                  }`}>GUI Designer</h3>
                  <span className={`text-lg ${theme === 'light' ? 'text-[#374151]' : 'text-gray-400'}`}>2016.May - 2016.Dec</span>
                </div>
                <p className={`text-lg font-bold mb-1 ${theme === 'light' ? 'text-[#374151]' : 'text-gray-300'}`}>Smartisan</p>
                <p className={`text-lg ${theme === 'light' ? 'text-[#374151]' : 'text-gray-400'}`}>Beijing, China</p>
              </motion.div>

              {/* De Dao App */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className={`border-l-2 pl-6 py-2 ${
                  theme === 'light' ? 'border-gray-200' : 'border-gray-700'
                }`}
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                  <h3 className={`text-xl font-semibold ${
                    theme === 'light' ? 'text-gray-900' : 'text-white'
                  }`}>Web/UI Designer</h3>
                  <span className={`text-lg ${theme === 'light' ? 'text-[#374151]' : 'text-gray-400'}`}>2014.May - 2016.May</span>
                </div>
                <p className={`text-lg font-bold mb-1 ${theme === 'light' ? 'text-[#374151]' : 'text-gray-300'}`}>De Dao App</p>
                <p className={`text-lg ${theme === 'light' ? 'text-[#374151]' : 'text-gray-400'}`}>Beijing, China</p>
              </motion.div>

              {/* HiSilicon */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className={`border-l-2 pl-6 py-2 ${
                  theme === 'light' ? 'border-gray-200' : 'border-gray-700'
                }`}
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                  <h3 className={`text-xl font-semibold ${
                    theme === 'light' ? 'text-gray-900' : 'text-white'
                  }`}>Web/UI Designer</h3>
                  <span className={`text-lg ${theme === 'light' ? 'text-[#374151]' : 'text-gray-400'}`}>2013.Jun - 2014.May</span>
                </div>
                <p className={`text-lg font-bold mb-1 ${theme === 'light' ? 'text-[#374151]' : 'text-gray-300'}`}>HiSilicon</p>
                <p className={`text-lg ${theme === 'light' ? 'text-[#374151]' : 'text-gray-400'}`}>Beijing, China</p>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
