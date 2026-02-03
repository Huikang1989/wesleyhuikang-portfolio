'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

interface TextSectionProps {
  title?: string;
  subtitle?: string;
  content: string;
}

export default function TextSection({ title, subtitle, content }: TextSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6 }}
      className="py-16"
    >
      <div className="max-w-4xl mx-auto px-6">
        {title && (
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {title}
          </h2>
        )}
        
        {subtitle && (
          <h3 className="text-xl md:text-2xl text-gray-600 mb-6">
            {subtitle}
          </h3>
        )}
        
        <div className="prose prose-lg max-w-none">
          {content.split('\n\n').map((paragraph, index) => {
            // 检查是否是粗体标题（以 ** 开头和结尾）
            const boldMatch = paragraph.match(/^\*\*(.*?)\*\*/);
            if (boldMatch) {
              return (
                <p key={index} className="text-gray-700 leading-relaxed">
                  <strong className="font-semibold text-black">{boldMatch[1]}</strong>
                  {paragraph.replace(/^\*\*(.*?)\*\*/, '')}
                </p>
              );
            }
            
            // 检查是否是列表项（以 - 开头）
            if (paragraph.startsWith('-')) {
              const items = paragraph.split('\n');
              return (
                <ul key={index} className="space-y-2 my-4">
                  {items.map((item, i) => (
                    <li key={i} className="text-gray-700 leading-relaxed">
                      {item.replace(/^- /, '')}
                    </li>
                  ))}
                </ul>
              );
            }
            
            // 普通段落
            return (
              <p key={index} className="text-gray-700 leading-relaxed mb-4">
                {paragraph}
              </p>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
}
