import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { Suspense } from "react";
import "./globals.css";
import styles from "./layout.module.css";
import Header from "@/components/Header/Header";
import TanStackPrivider from "@/components/TanStackProvider/TanStackProvider";
import AuthProvider from "@/components/AuthProvider/AuthProvider";

export const metadata: Metadata = {
  title: "NoteLab",
  description: "A simple note-taking app built with Next.js 13 and TypeScript.",
};

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-roboto",
  display: "swap",
});

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal?: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} ${styles.body}`}>
        <TanStackPrivider>
          <AuthProvider>
            <Header />
            <main className={styles.main}>
              {children}
              {modal && <Suspense fallback={null}>{modal}</Suspense>}
            </main>
            <footer className={styles.footer}>
              <p>
                Created <time dateTime="2026">2026</time>
              </p>
            </footer>
          </AuthProvider>
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
