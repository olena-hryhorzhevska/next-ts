import Link from "next/link";
import { getCategories } from "@/app/lib/api/api";
import styles from '../default.module.css';

const NotesSidebar = async () => {
  const categories = await getCategories();

  return (
    <nav className={styles.sidebarNav}>
      <h2 className={styles.sidebarTitle}>Categories</h2>
      <ul className={styles.sidebarList}>
        <li>
          <Link href={`/notes/filter/all`} className={styles.sidebarLink}>
            All notes
          </Link>
        </li>
        {categories.map(category => (
          <li key={category.id}>
            <Link href={`/notes/filter/${category.id}`} className={styles.sidebarLink}>
              {category.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default NotesSidebar;