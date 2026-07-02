import styles from './layout.module.css';

type Props = {
  children: React.ReactNode;
  sidebar: React.ReactNode;
}

const NotesLayout = ({ children, sidebar }: Props) => {
  return (
    <section className={styles.layout}>
      <aside className={styles.sidebar}>{sidebar}</aside>
      <main className={styles.content}>{children}</main>
    </section>
  )
}

export default NotesLayout;