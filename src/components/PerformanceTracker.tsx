'use client';

import { useEffect } from 'react';
import { trackPerformance } from '@/lib/performance';

export default function PerformanceTracker() {
  useEffect(() => {
    trackPerformance();
  }, []);

  return null;
}