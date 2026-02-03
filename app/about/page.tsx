'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">About Me</h1>
          <p className="text-xl text-gray-600">
            Product designer focused on creating accessible and meaningful user experiences
          </p>
        </motion.div>

        {/* Profile Image Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <div className="relative aspect-[16/9] bg-gray-100 rounded-3xl overflow-hidden">
            {/* You can add your profile image here */}
            <div className="absolute inset-0 flex items-center justify-center text-gray-400">
              Profile Image
            </div>
          </div>
        </motion.div>

        {/* Bio */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="prose prose-lg max-w-none mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Hi, I'm Wesley 👋</h2>
          
          <p className="text-gray-700 leading-relaxed mb-4">
            I'm a product designer based in Halifax, Nova Scotia, Canada. I specialize in 
            creating accessible, user-centered design solutions that make a real difference 
            in people's lives.
          </p>

          <p className="text-gray-700 leading-relaxed mb-4">
            My approach to design is grounded in empathy and systems thinking. Rather than 
            designing isolated features, I focus on creating cohesive experiences that adapt 
            to users' changing needs.
          </p>

          <p className="text-gray-700 leading-relaxed">
            When I'm not designing, you can find me exploring new technologies, learning 
            about accessibility best practices, and working on side projects that push the 
            boundaries of what's possible.
          </p>
        </motion.div>

        {/* Skills/Expertise */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-8">What I Do</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-3">Product Design</h3>
              <p className="text-gray-600">
                Creating intuitive interfaces and seamless user experiences from concept to launch
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">UX Research</h3>
              <p className="text-gray-600">
                Understanding user needs through interviews, testing, and data analysis
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">Accessibility</h3>
              <p className="text-gray-600">
                Designing inclusive experiences that work for everyone
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">Systems Thinking</h3>
              <p className="text-gray-600">
                Building scalable design systems and cohesive product ecosystems
              </p>
            </div>
          </div>
        </motion.div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold mb-4">Let's Connect</h2>
          <p className="text-gray-600 mb-8">
            I'm always open to discussing new projects and opportunities
          </p>
          <a
            href="mailto:huikang.wesley@gmail.com"
            className="inline-block px-8 py-4 bg-black text-white font-medium rounded-full hover:bg-gray-800 transition-colors"
          >
            Get in Touch
          </a>
        </motion.div>
      </div>
    </div>
  );
}
