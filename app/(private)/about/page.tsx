// app/about/page.tsx

import styles from "./page.module.css";

export default function AboutPage() {
  return (
    <main className={styles.container}>
      <section className={styles.hero}>
        <h1>About NoteLab</h1>
        <p className={styles.lead}>
          NoteLab is a simple and modern note-taking application built with
          Next.js App Router. It helps you organize ideas, create categories,
          and keep everything in one place.
        </p>
      </section>

      <section className={styles.grid}>
        <article className={styles.card}>
          <h2>✨ Simple</h2>
          <p>
            Create, edit, and organize notes without unnecessary complexity.
          </p>
        </article>

        <article className={styles.card}>
          <h2>📂 Organized</h2>
          <p>Group your notes into categories to keep everything structured.</p>
        </article>

        <article className={styles.card}>
          <h2>⚡ Fast</h2>
          <p>
            Built with Next.js App Router for a smooth and responsive
            experience.
          </p>
        </article>
      </section>
    </main>
  );
}
