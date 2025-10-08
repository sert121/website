import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ViewTransitions } from 'next-view-transitions';
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://sert121.github.io'),
  alternates: {
    canonical: '/',
  },
  title: {
    default: 'Yash More',
    template: '%s | Yash More',
  },
  description: 'Researcher, developer, artist.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html lang="en" className={`${inter.className}`}>
        <body className="antialiased tracking-tight">
          <div className="min-h-screen flex flex-col justify-between pt-0 md:pt-8 p-8 bg-white text-gray-900">
            <main className="max-w-[60ch] mx-auto w-full space-y-6">
              {children}
            </main>
            <Footer />
            <Analytics />
          </div>
        </body>
      </html>
    </ViewTransitions>
  );
}

function Footer() {
  const links = [
    {name:'whereabouts', url: '/whereabouts'},
    { name: 'google scholar', url: 'https://scholar.google.com/citations?user=nm8G-yoAAAAJ&hl=en'},
    {name: 'work', url: '/work'},
    {name: 'chat', url: '/chat'},
    {name:'pubs', url: '/publications'},
    // {name:'fragments', url: '/fragments'},
    {name:'twitter', url: 'https://x.com/yash_347'},

  ];

  return (
<footer className="mt-12 text-center">
  <div className="flex justify-center space-x-4 tracking-tight">
    {links.map((link) => (
      <a
        key={link.name}
        href={link.url}
        target={link.name === 'work' || link.name === 'chat' || link.name === 'whereabouts' || link.name === 'publications' || link.name === 'contact' ? '_self' : '_blank'}
        rel={link.name === 'work' || link.name === 'publications' || link.name === 'contact' ? undefined : 'noopener noreferrer'}
        className="text-gray-400 hover:text-blue-500 transition-colors duration-200"
      >
        {link.name}
      </a>
    ))}
  </div>
</footer>
  );
}
