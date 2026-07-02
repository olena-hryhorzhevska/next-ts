'use client';

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import styles from './not-found.module.css';

export default function NotFound() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => router.push('/'), 4000);
    return () => clearTimeout(timer);
  }, [router]);
  
  return (
    <div className={styles.notFoundPage}>
      <section className={styles.errorCard}>
        <h1 className={styles.heading}>404 - Page Not Found</h1>
        <p className={styles.description}>The page you are looking for does not exist. Redirecting to the homepage...</p>
      </section>
    </div>
  )
}