import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './global.css';
import { ThemeProvider } from '@/components/theme-provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://uptotech.vercel.app/'),
  title: 'UptoTech - Exploring Tech with Industry Leaders',
  icons: {
    icon: '/favicon.ico',
  },
  description:
    'Compile from various technical blogs into one central hub, saving you time and ensuring you updated with the industry leading companies in the world !',
  applicationName: 'UptoTech',
  referrer: 'origin-when-cross-origin',
  keywords: [
    'UptoTech',
    'Blog Post',
    'Big Tech',
    'Meta',
    'Google',
    'IBM',
    'DropBox',
    'Apple',
  ],
  authors: [{ name: 'Mike Hoang' }],
  creator: 'Mike Hoang',
  openGraph: {
    title: 'UptoTech - Exploring Tech with Industry Leaders',
    description:
      'Compile from various technical blogs into one central hub, saving you time and ensuring you updated with the industry leading companies in the world !',
    url: 'https://uptotech.vercel.app/',
    images: [
      {
        url: 'https://uptotech.vercel.app/favicon.ico',
        width: 128,
        height: 128,
        alt: 'UptoTech',
      },
    ],
  },
  twitter: {
    title: 'UptoTech - Exploring Tech with Industry Leaders',
    description:
      'Compile from various technical blogs into one central hub, saving you time and ensuring you updated with the industry leading companies in the world !',
    images: [
      {
        url: 'https://uptotech.vercel.app/favicon.ico',
        width: 128,
        height: 128,
        alt: 'UptoTech',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
