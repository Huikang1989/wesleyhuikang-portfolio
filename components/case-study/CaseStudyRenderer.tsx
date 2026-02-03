'use client';

import { CaseStudySection } from '@/lib/types';
import Hero from './Hero';
import TextSection from './TextSection';

interface CaseStudyRendererProps {
  sections: CaseStudySection[];
}

export default function CaseStudyRenderer({ sections }: CaseStudyRendererProps) {
  return (
    <div className="min-h-screen">
      {sections.map((section, index) => {
        switch (section.type) {
          case 'hero':
            return (
              <Hero
                key={index}
                title={section.title || ''}
                subtitle={section.subtitle}
                image={section.image || ''}
              />
            );

          case 'text':
            return (
              <TextSection
                key={index}
                title={section.title}
                subtitle={section.subtitle}
                content={section.content || ''}
              />
            );

          // 可以继续添加更多 section 类型
          // case 'image-gallery':
          // case 'video':
          // case 'two-column':
          // 等等

          default:
            return null;
        }
      })}
    </div>
  );
}
