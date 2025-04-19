'use client';

import { ProgressProvider } from '@bprogress/next/app';

export default function ProgressBarProvider({ children }: { children: React.ReactNode }) {
  return (
    <ProgressProvider
      height="4px"
      color="#ffffff33"
      options={{ showSpinner: false }}
      shallowRouting
    >
      {children}
    </ProgressProvider>
  );
}
