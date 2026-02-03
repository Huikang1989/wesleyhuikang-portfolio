'use client';

import { useEffect, useState } from 'react';

interface FramerEmbedProps {
  url: string;
  title: string;
}

export default function FramerEmbed({ url, title }: FramerEmbedProps) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Set a timeout to hide loading state
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full h-screen bg-white">
      {/* Loading indicator */}
      {loading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
          <div className="text-center">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 mb-4"></div>
            <p className="text-gray-600">Loading case study...</p>
          </div>
        </div>
      )}

      {/* Iframe embed */}
      <iframe
        src={url}
        title={title}
        className="w-full h-full border-0"
        style={{
          width: '100%',
          height: '100vh',
          border: 'none',
        }}
        allowFullScreen
        loading="eager"
        onLoad={() => setLoading(false)}
      />
    </div>
  );
}
