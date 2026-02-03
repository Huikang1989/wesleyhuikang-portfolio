import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getProjectBySlug, getAllProjects } from '@/lib/projects';
import CaseStudyRenderer from '@/components/case-study/CaseStudyRenderer';
import AiraASLPage from '@/components/case-study/AiraASLPage';
import QQDesignSystemPage from '@/components/case-study/QQDesignSystemPage';
import QQ9Page from '@/components/case-study/QQ9Page';
import FramerEmbed from '@/components/FramerEmbed';

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

// 生成静态参数
export async function generateStaticParams() {
  const projects = getAllProjects();
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

// 生成元数据
export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: 'Project Not Found',
    };
  }

  return {
    title: `${project.title} - Wesley Li`,
    description: project.description,
    openGraph: {
      title: `${project.title} - Wesley Li`,
      description: project.description,
      images: [project.coverImage],
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  // If project has a Framer URL, embed it via iframe
  if (project.framerUrl) {
    return (
      <>
        {/* Back Button */}
        <div className="fixed top-6 left-6 z-50">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-1 bg-white/70 backdrop-blur-md border border-white rounded-full font-medium text-black hover:bg-white/80 hover:scale-[1.03] active:scale-95 transition-all duration-200"
            style={{
              width: '108px',
              height: '50px',
              fontSize: '18px',
              paddingRight: '8px',
              boxShadow: '0 8px 24px 0px rgb(0 0 0 / 0.08)',
            }}
          >
            <svg
              className="text-black"
              width="20"
              height="20"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back
          </Link>
        </div>
        <FramerEmbed url={project.framerUrl} title={project.title} />
      </>
    );
  }

  // Use custom page for Aira ASL
  if (slug === 'aira-asl') {
    return (
      <>
        {/* Back Button */}
        <div className="fixed top-6 left-6 z-40">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-1 bg-white/70 backdrop-blur-md border border-white rounded-full font-medium text-black hover:bg-white/80 hover:scale-[1.03] active:scale-95 transition-all duration-200"
            style={{
              width: '108px',
              height: '50px',
              fontSize: '18px',
              paddingRight: '8px',
              boxShadow: '0 8px 24px 0px rgb(0 0 0 / 0.08)',
            }}
          >
            <svg
              className="text-black"
              width="20"
              height="20"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back
          </Link>
        </div>
        <AiraASLPage />
      </>
    );
  }

  // Use custom page for QQ Design System
  if (slug === 'qq-design-system') {
    return (
      <>
        {/* Back Button */}
        <div className="fixed top-6 left-6 z-40">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-1 bg-white/70 backdrop-blur-md border border-white rounded-full font-medium text-black hover:bg-white/80 hover:scale-[1.03] active:scale-95 transition-all duration-200"
            style={{
              width: '108px',
              height: '50px',
              fontSize: '18px',
              paddingRight: '8px',
              boxShadow: '0 8px 24px 0px rgb(0 0 0 / 0.08)',
            }}
          >
            <svg
              className="text-black"
              width="20"
              height="20"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back
          </Link>
        </div>
        <QQDesignSystemPage />
      </>
    );
  }

  // Use custom page for QQ9
  if (slug === 'qq9') {
    return (
      <>
        {/* Back Button */}
        <div className="fixed top-6 left-6 z-40">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-1 bg-white/70 backdrop-blur-md border border-white rounded-full font-medium text-black hover:bg-white/80 hover:scale-[1.03] active:scale-95 transition-all duration-200"
            style={{
              width: '108px',
              height: '50px',
              fontSize: '18px',
              paddingRight: '8px',
              boxShadow: '0 8px 24px 0px rgb(0 0 0 / 0.08)',
            }}
          >
            <svg
              className="text-black"
              width="20"
              height="20"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back
          </Link>
        </div>
        <QQ9Page />
      </>
    );
  }

  return (
    <>
      {/* Back Button */}
      <div className="fixed top-6 left-6 z-40">
        <Link
          href="/"
          className="inline-flex items-center justify-center gap-1 bg-white/70 backdrop-blur-md border border-white rounded-full font-medium text-black hover:bg-white/80 hover:scale-[1.03] active:scale-95 transition-all duration-200"
          style={{
            width: '108px',
            height: '50px',
            fontSize: '18px',
            paddingRight: '8px',
            boxShadow: '0 8px 24px 0px rgb(0 0 0 / 0.08)',
          }}
        >
          <svg
            className="text-black"
            width="20"
            height="20"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back
        </Link>
      </div>

      {/* Case Study Content */}
      <CaseStudyRenderer sections={project.sections} />
    </>
  );
}
