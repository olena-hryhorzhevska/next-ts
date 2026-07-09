import Link from "next/link";
import CategoriesMenu from "../CategoriesMenu/CategoriesMenu";
import { getCategories } from "@/app/lib/api/clientApi";
import AuthNavigation from "../AuthNavigation/AuthNavigation";
import styles from "./Header.module.css";

const Header = async () => {
  const categories = await getCategories();
  return (
    <header className={styles.header}>
      <div className={styles.brandWrapper}>
        <Link href="/" className={styles.brand}>
          NoteLab
        </Link>
        <p className={styles.tagline}>Notes with calm focus</p>
      </div>

      <nav className={styles.navBar}>
        <ul className={styles.navList}>
          <li>
            <CategoriesMenu categories={categories} />
          </li>
          <li>
            <Link href="/profile" className={styles.navLink}>
              Profile
            </Link>
          </li>
          <li>
            <Link href="/about" className={styles.navLink}>
              About
            </Link>
          </li>
          <AuthNavigation />
        </ul>
      </nav>
    </header>
  );
};

export default Header;