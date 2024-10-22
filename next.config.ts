import type { NextConfig } from 'next';
import createMDX from '@next/mdx';

const nextConfig: NextConfig = {
  pageExtensions: ['mdx', 'ts', 'tsx'],
  async redirects() {
    // Return static redirects (if any) for the static export
    return [
      {
        source: '/old-page',
        destination: '/new-page',
        permanent: true,
      },
    ];
  },
  output: 'export',  // Enables static export in Next.js
  experimental: {
    mdxRs: true,  // Keep MDX support
  },
};

const withMDX = createMDX({});

export default withMDX(nextConfig);
