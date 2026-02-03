'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Project } from '@/lib/types';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
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
        const manualOverride = localStorage.getItem('themeManual') === 'true';
        if (!manualOverride) {
          setTheme(e.matches ? 'dark' : 'light');
        }
      };
      mediaQuery.addEventListener('change', handleChange);
      return () => mediaQuery.removeEventListener('change', handleChange);
    }
  }, []);

  // Listen for manual theme changes
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

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link href={`/projects/${project.slug}`} className="group block">
        <motion.div
          whileHover={{ y: -8 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
        >
          {/* Image Container */}
          <div className={`relative aspect-[16/9] rounded-2xl overflow-hidden mb-4 transition-shadow duration-300 ${
            theme === 'light'
              ? 'group-hover:shadow-[0_20px_40px_-12px_rgba(100,116,139,0.25)]'
              : ''
          }`}>
            <Image
              src={project.coverImage}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>

          {/* Content */}
          <div className="space-y-2">
            {/* Title with Year */}
            <h3 className={`text-2xl font-semibold ${
              theme === 'light' ? 'text-gray-900' : 'text-white'
            }`}>
              {project.title}{project.year ? ` | ${project.year}` : ''}
            </h3>

            {/* Description */}
            {project.description && (
              <p className={`text-lg ${
                theme === 'light' ? 'text-[#374151]' : 'text-[#9ca3af]'
              }`}>
                {project.description}
              </p>
            )}
          </div>
        </motion.div>
      </Link>
    </motion.div>
  );
}
