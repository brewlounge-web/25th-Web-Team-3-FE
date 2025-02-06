import type { Metadata } from 'next';
import './globals.css';
import { body, bodyInnerWrapper, rootContainer } from './layout.css';
import { DotGothic16 } from 'next/font/google';
import localFont from 'next/font/local';
import './globals.css';
import { rootContainer } from './layout.css';
import Providers from './providers';
import BrewloungeQR from '@/components/layout/BrewloungeQR';

const pretendard = localFont({
  src: '../fonts/PretendardVariable.woff2',
  display: 'swap',
  weight: '45 920',
});

const dotGothic16 = DotGothic16({ weight: '400', subsets: ['latin'], display: 'swap' });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dotGothic16.className}`}>
      <body className={`${pretendard.className} ${body}`}>
        <div className={bodyInnerWrapper}>
          <div id="root" className={`${rootContainer}`}>
            <Providers>{children}</Providers>
            <div id="modal-root"></div>
          </div>
          <aside>
            <BrewloungeQR />
          </aside>
        </div>
      </body>
    </html>
  );
}
