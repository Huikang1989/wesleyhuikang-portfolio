// 项目数据类型定义

export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  coverImage: string;
  category: string;
  year: string;
  role: string;
  team?: string[];
  tags: string[];
  featured?: boolean;
}

export interface CaseStudySection {
  type: 'hero' | 'text' | 'text-image' | 'image-gallery' | 'video' | 'two-column' | 'insights-grid' | 'quote';
  title?: string;
  subtitle?: string;
  content?: string;
  image?: string;
  images?: string[];
  video?: string;
  layout?: 'image-left' | 'image-right' | 'full-width';
  caption?: string;
  items?: Array<{
    title: string;
    description: string;
    icon?: string;
    image?: string;
  }>;
  left?: {
    title?: string;
    content?: string;
    image?: string;
  };
  right?: {
    title?: string;
    content?: string;
    image?: string;
  };
}

export interface CaseStudy extends Project {
  sections: CaseStudySection[];
  framerUrl?: string; // Optional Framer URL for iframe embedding
}
