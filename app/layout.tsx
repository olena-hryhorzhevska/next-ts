import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header/Header';
import TanStackPrivider from '@/components/TanStackProvider/TanStackProvider';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'NoteLab',
  description: 'A simple note-taking app built with Next.js 13 and TypeScript.',
};

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal?: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <TanStackPrivider>
          <Header />
          <main>{children} {modal}</main>
          <footer>
            <p>
              Created <time dateTime="2026">2026</time>
            </p>
          </footer>
        </TanStackPrivider>
      </body>
    </html>
  );
}

// {
//   queries: [
//     {
//       queryKey: ['note', '123'],
//       state: {
//         data: { id: '123', title: '...' },
//         status: 'success',
//         fetchStatus: 'idle',
//         dataUpdatedAt: 1710000000000,
//         error: null,
//       },
//     },
//   ];
// }
