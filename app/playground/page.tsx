'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function PlaygroundPage() {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    setTheme(mediaQuery.matches ? 'dark' : 'light');
    const handleChange = (e: MediaQueryListEvent) => {
      setTheme(e.matches ? 'dark' : 'light');
    };
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const demoProject = {
    title: 'QQ Design System',
    year: '2023',
    description: 'How to quickly build a Design Component Library and enable open, efficient co-creation?',
    coverImage: '/images/qq-design-system/cover.png',
  };

  return (
    <div className={`min-h-screen pt-24 pb-20 px-6 ${theme === 'light' ? 'bg-white' : 'bg-[#0a0a0f]'}`}>
      <div className="max-w-7xl mx-auto">
        <h1 className={`text-4xl font-bold mb-4 ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>
          Project Card Hover Effects Playground
        </h1>
        <p className={`text-lg mb-12 ${theme === 'light' ? 'text-gray-600' : 'text-gray-400'}`}>
          Hover over each card to see different effects. Choose your favorite!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* Effect 1: Scale + Shadow Lift */}
          <div className="space-y-4">
            <h3 className={`text-xl font-semibold ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>
              1. Scale + Shadow Lift
            </h3>
            <motion.div
              className="group cursor-pointer"
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
            >
              <div className="relative aspect-[16/9] rounded-2xl overflow-hidden mb-4 transition-shadow duration-300 group-hover:shadow-2xl group-hover:shadow-purple-500/20">
                <Image
                  src={demoProject.coverImage}
                  alt={demoProject.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className={`text-2xl font-semibold transition-opacity group-hover:opacity-70 ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>
                {demoProject.title} | {demoProject.year}
              </h3>
              <p className={`text-lg ${theme === 'light' ? 'text-[#374151]' : 'text-[#9ca3af]'}`}>
                {demoProject.description}
              </p>
            </motion.div>
          </div>

          {/* Effect 2: Border Glow */}
          <div className="space-y-4">
            <h3 className={`text-xl font-semibold ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>
              2. Border Glow
            </h3>
            <div className="group cursor-pointer">
              <div className="relative aspect-[16/9] rounded-2xl overflow-hidden mb-4 transition-all duration-300 ring-0 group-hover:ring-2 group-hover:ring-purple-500 group-hover:ring-offset-4 group-hover:ring-offset-transparent">
                <Image
                  src={demoProject.coverImage}
                  alt={demoProject.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-102"
                />
              </div>
              <h3 className={`text-2xl font-semibold transition-colors duration-300 ${theme === 'light' ? 'text-gray-900 group-hover:text-purple-600' : 'text-white group-hover:text-purple-400'}`}>
                {demoProject.title} | {demoProject.year}
              </h3>
              <p className={`text-lg ${theme === 'light' ? 'text-[#374151]' : 'text-[#9ca3af]'}`}>
                {demoProject.description}
              </p>
            </div>
          </div>

          {/* Effect 3: Overlay Reveal */}
          <div className="space-y-4">
            <h3 className={`text-xl font-semibold ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>
              3. Overlay Reveal
            </h3>
            <div className="group cursor-pointer">
              <div className="relative aspect-[16/9] rounded-2xl overflow-hidden mb-4">
                <Image
                  src={demoProject.coverImage}
                  alt={demoProject.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 right-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <span className="text-white text-sm font-medium px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full">
                    View Project →
                  </span>
                </div>
              </div>
              <h3 className={`text-2xl font-semibold transition-opacity group-hover:opacity-70 ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>
                {demoProject.title} | {demoProject.year}
              </h3>
              <p className={`text-lg ${theme === 'light' ? 'text-[#374151]' : 'text-[#9ca3af]'}`}>
                {demoProject.description}
              </p>
            </div>
          </div>

          {/* Effect 4: Tilt 3D */}
          <div className="space-y-4">
            <h3 className={`text-xl font-semibold ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>
              4. Subtle Tilt 3D
            </h3>
            <motion.div
              className="group cursor-pointer"
              whileHover={{ rotateX: -5, rotateY: 5 }}
              transition={{ duration: 0.3 }}
              style={{ perspective: 1000 }}
            >
              <div className="relative aspect-[16/9] rounded-2xl overflow-hidden mb-4 transition-shadow duration-300 group-hover:shadow-xl">
                <Image
                  src={demoProject.coverImage}
                  alt={demoProject.title}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className={`text-2xl font-semibold transition-opacity group-hover:opacity-70 ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>
                {demoProject.title} | {demoProject.year}
              </h3>
              <p className={`text-lg ${theme === 'light' ? 'text-[#374151]' : 'text-[#9ca3af]'}`}>
                {demoProject.description}
              </p>
            </motion.div>
          </div>

          {/* Effect 5: Brightness + Blur Background */}
          <div className="space-y-4">
            <h3 className={`text-xl font-semibold ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>
              5. Brightness Enhance
            </h3>
            <div className="group cursor-pointer">
              <div className="relative aspect-[16/9] rounded-2xl overflow-hidden mb-4">
                <Image
                  src={demoProject.coverImage}
                  alt={demoProject.title}
                  fill
                  className="object-cover transition-all duration-500 group-hover:scale-105 group-hover:brightness-110"
                />
              </div>
              <h3 className={`text-2xl font-semibold transition-all duration-300 ${theme === 'light' ? 'text-gray-900 group-hover:text-gray-700' : 'text-white group-hover:text-gray-200'}`}>
                {demoProject.title} | {demoProject.year}
              </h3>
              <p className={`text-lg transition-opacity duration-300 group-hover:opacity-80 ${theme === 'light' ? 'text-[#374151]' : 'text-[#9ca3af]'}`}>
                {demoProject.description}
              </p>
            </div>
          </div>

          {/* Effect 6: Card Expand */}
          <div className="space-y-4">
            <h3 className={`text-xl font-semibold ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>
              6. Smooth Expand
            </h3>
            <motion.div
              className="group cursor-pointer"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
            >
              <div className={`relative aspect-[16/9] rounded-2xl overflow-hidden mb-4 transition-all duration-300 ${
                theme === 'light'
                  ? 'group-hover:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)]'
                  : 'group-hover:shadow-[0_20px_50px_-12px_rgba(255,255,255,0.1)]'
              }`}>
                <Image
                  src={demoProject.coverImage}
                  alt={demoProject.title}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className={`text-2xl font-semibold transition-opacity group-hover:opacity-70 ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>
                {demoProject.title} | {demoProject.year}
              </h3>
              <p className={`text-lg ${theme === 'light' ? 'text-[#374151]' : 'text-[#9ca3af]'}`}>
                {demoProject.description}
              </p>
            </motion.div>
          </div>

          {/* Effect 7: Gradient Border */}
          <div className="space-y-4">
            <h3 className={`text-xl font-semibold ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>
              7. Gradient Border
            </h3>
            <div className="group cursor-pointer">
              <div className="relative aspect-[16/9] rounded-2xl overflow-hidden mb-4 p-[2px] bg-transparent group-hover:bg-gradient-to-r group-hover:from-purple-500 group-hover:via-pink-500 group-hover:to-orange-500 transition-all duration-300">
                <div className="relative w-full h-full rounded-[14px] overflow-hidden">
                  <Image
                    src={demoProject.coverImage}
                    alt={demoProject.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>
              <h3 className={`text-2xl font-semibold transition-opacity group-hover:opacity-70 ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>
                {demoProject.title} | {demoProject.year}
              </h3>
              <p className={`text-lg ${theme === 'light' ? 'text-[#374151]' : 'text-[#9ca3af]'}`}>
                {demoProject.description}
              </p>
            </div>
          </div>

          {/* Effect 8: Slide Arrow */}
          <div className="space-y-4">
            <h3 className={`text-xl font-semibold ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>
              8. Arrow Slide
            </h3>
            <div className="group cursor-pointer">
              <div className="relative aspect-[16/9] rounded-2xl overflow-hidden mb-4">
                <Image
                  src={demoProject.coverImage}
                  alt={demoProject.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex items-center gap-2">
                <h3 className={`text-2xl font-semibold transition-opacity group-hover:opacity-70 ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>
                  {demoProject.title} | {demoProject.year}
                </h3>
                <span className={`opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>
                  →
                </span>
              </div>
              <p className={`text-lg ${theme === 'light' ? 'text-[#374151]' : 'text-[#9ca3af]'}`}>
                {demoProject.description}
              </p>
            </div>
          </div>

          {/* Effect 9: Minimal Underline */}
          <div className="space-y-4">
            <h3 className={`text-xl font-semibold ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>
              9. Minimal Underline
            </h3>
            <div className="group cursor-pointer">
              <div className="relative aspect-[16/9] rounded-2xl overflow-hidden mb-4">
                <Image
                  src={demoProject.coverImage}
                  alt={demoProject.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="relative inline-block">
                <h3 className={`text-2xl font-semibold ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>
                  {demoProject.title} | {demoProject.year}
                </h3>
                <span className={`absolute bottom-0 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300 ${theme === 'light' ? 'bg-gray-900' : 'bg-white'}`} />
              </div>
              <p className={`text-lg mt-2 ${theme === 'light' ? 'text-[#374151]' : 'text-[#9ca3af]'}`}>
                {demoProject.description}
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
