'use client';

import { Agentation } from 'agentation';

export default function DevTools() {
  // Only show in development
  if (process.env.NODE_ENV !== 'development') {
    return null;
  }

  return <Agentation />;
}
