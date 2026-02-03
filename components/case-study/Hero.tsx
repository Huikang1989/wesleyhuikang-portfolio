'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

interface HeroProps {
  title: string;
  subtitle?: string;
  image: string;
}

export default function Hero({ title, subtitle, image }: HeroProps) {
  return (
    <section className="pt-32 pb-16">
      <div className="max-w-5xl mx-auto px-6">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            {title}
          </h1>
          {subtitle && (
            <p className="text-xl md:text-2xl text-gray-600">
              {subtitle}
            </p>
          )}
        </motion.div>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative aspect-[16/10] rounded-3xl overflow-hidden bg-gray-100"
        >
          <Image
            src={image}
            alt={title}
            fill
            priority
            className="object-cover"
            sizes="(max-width: 1280px) 100vw, 1280px"
          />
        </motion.div>
      </div>
    </section>
  );
}
