"use client";

import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";
import { useAuthStore } from "@/app/lib/store/authStore";

export default function Home() {
  const { isAuthenticated } = useAuthStore();

  return (
    <main className={styles.page}>
      <section className={styles.heroCard}>
        <div className={styles.heroText}>
          <p className={styles.heroTag}>NoteLab</p>
          <h1>Work smarter with your notes.</h1>
          <p>
            Capture ideas, organize your thoughts, and explore your notes in a calm, modern workspace.
          </p>
          <div className={styles.ctas}>
            <Link href="/notes" className={styles.primary}>
              View notes
            </Link>
            {isAuthenticated ? (
              <Link href="/profile" className={styles.secondary}>
                Go to profile
              </Link>
            ) : (
              <Link href="/sign-up" className={styles.secondary}>
                Get started
              </Link>
            )}
          </div>
        </div>
        <div className={styles.heroImages}>
          <Image
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80"
            alt="Notebook with elegant layout"
            width={520}
            height={380}
            className={styles.heroImage}
          />
        </div>
      </section>
    </main>
  );
}
