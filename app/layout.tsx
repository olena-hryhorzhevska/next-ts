import type { Metadata } from 'next';
import {Roboto} from 'next/font/google';
import './globals.css';
import Header from '@/components/Header/Header';
import TanStackPrivider from '@/components/TanStackProvider/TanStackProvider';


export const metadata: Metadata = {
  title: 'NoteLab',
  description: 'A simple note-taking app built with Next.js 13 and TypeScript.',
};

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-roboto',
  display: "swap",
})

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal?: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={ roboto.variable}>
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



// Основные матрики продуктивности сайта
// FCP - First Contentful Paint
// LCP - Largest Contentful Paint
// TTI - Time to Interactive
// TBT - Total Blocking Time
// CLS - Cumulative Layout Shift