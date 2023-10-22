import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './global.css';
import { ThemeProvider } from '@/components/theme-provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'UptoTech - Exploring Tech with Industry Leaders',
  description:
    'Compile from various technical blogs into one central hub, saving you time and ensuring you updated with the industry leading companies in the world !',
  
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
