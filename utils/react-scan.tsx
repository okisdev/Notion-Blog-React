'use client';

import { scan } from 'react-scan';

import { useEffect } from 'react';

export function ReactScan(): null {
  useEffect(() => {
    scan({
      enabled: true,
    });
  }, []);

  return null;
}
