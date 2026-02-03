# Wesley Li - Portfolio Website

A modern, performant portfolio website built with Next.js 15, TypeScript, and Tailwind CSS.

## 🚀 Features

- ⚡ **Lightning Fast** - Built with Next.js 15 App Router for optimal performance
- 🎨 **Beautiful Animations** - Smooth transitions using Framer Motion
- 📱 **Fully Responsive** - Works perfectly on all devices
- 🔍 **SEO Optimized** - Metadata and OpenGraph support
- ♿ **Accessible** - WCAG compliant design
- 🖼️ **Image Optimization** - Automatic WebP/AVIF conversion
- 📝 **Easy Content Management** - Simple data-driven approach

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Deployment**: Vercel (recommended)

## 📦 Project Structure

```
wesleyhuikang-portfolio/
├── app/                      # Next.js app directory
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Home page
│   ├── about/               # About page
│   └── projects/[slug]/     # Dynamic project pages
├── components/              # React components
│   ├── Navigation.tsx       # Header navigation
│   ├── Footer.tsx          # Footer
│   ├── ProjectCard.tsx     # Project card
│   └── case-study/         # Case study components
│       ├── Hero.tsx
│       ├── TextSection.tsx
│       └── CaseStudyRenderer.tsx
├── lib/                    # Utility functions and data
│   ├── types.ts           # TypeScript types
│   └── projects/          # Project data
│       ├── index.ts       # Project utilities
│       └── aira-asl.ts    # Project data files
└── public/                # Static assets
    ├── images/            # Images
    └── videos/            # Videos
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd wesleyhuikang-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📝 Adding New Projects

### Method 1: Using the Template System (Fastest)

1. Create a new project data file in `lib/projects/`:

```typescript
// lib/projects/my-new-project.ts
import { CaseStudy } from '../types';

export const myNewProject: CaseStudy = {
  slug: 'my-new-project',
  title: 'My New Project',
  subtitle: 'A brief description',
  description: 'Full description for SEO',
  coverImage: '/images/my-new-project/cover.jpg',
  category: 'Product Design',
  year: '2024',
  role: 'Product Designer',
  tags: ['UX', 'UI', 'Mobile'],
  featured: true,
  
  sections: [
    {
      type: 'hero',
      title: 'Project Title',
      subtitle: 'Project Subtitle',
      image: '/images/my-new-project/hero.jpg',
    },
    {
      type: 'text',
      title: 'The Challenge',
      content: 'Your content here...',
    },
    // Add more sections...
  ],
};
```

2. Add your project images to `public/images/my-new-project/`

3. Import and add to the projects list in `lib/projects/index.ts`:

```typescript
import { myNewProject } from './my-new-project';

export const allProjects: CaseStudy[] = [
  airaASL,
  myNewProject, // Add your new project here
];
```

4. Done! Your project is now live at `/projects/my-new-project`

### Available Section Types

- `hero` - Large hero section with title and image
- `text` - Text content with optional title and subtitle
- `text-image` - Text with accompanying image (left or right)
- `image-gallery` - Multiple images in a grid
- `video` - Video player with optional caption
- `two-column` - Side-by-side comparison
- `insights-grid` - Grid of key insights/findings

## 🎨 Customization

### Colors

Edit `tailwind.config.ts` to change the color scheme:

```typescript
theme: {
  extend: {
    colors: {
      primary: '#your-color',
      // Add more colors
    },
  },
}
```

### Fonts

Update fonts in `app/layout.tsx`:

```typescript
import { YourFont } from "next/font/google";

const yourFont = YourFont({ subsets: ["latin"] });
```

## 📸 Adding Images

1. Place images in `public/images/[project-slug]/`
2. Use Next.js Image component for automatic optimization:

```typescript
<Image
  src="/images/project/image.jpg"
  alt="Description"
  width={1200}
  height={800}
  quality={90}
/>
```

## 🚢 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Import your repository
4. Vercel will automatically detect Next.js and deploy

### Environment Variables

No environment variables needed for the basic setup!

## 📈 Performance

This portfolio is optimized for performance:

- ✅ Lighthouse Score: 90+
- ✅ First Contentful Paint: < 1.5s
- ✅ Time to Interactive: < 3s
- ✅ Automatic image optimization
- ✅ Code splitting and lazy loading

## 🔧 Development

### Build for production:
```bash
npm run build
```

### Start production server:
```bash
npm start
```

### Lint code:
```bash
npm run lint
```

## 📄 License

All rights reserved © 2026 Huikang Wesley Li

## 🤝 Contact

- Email: huikang.wesley@gmail.com
- LinkedIn: [linkedin.com/in/huikang-li-096693a7](https://www.linkedin.com/in/huikang-li-096693a7/)
- Instagram: [@huikang_wesley](https://www.instagram.com/huikang_wesley/)

---

Built with ❤️ using Next.js, TypeScript, and Tailwind CSS
