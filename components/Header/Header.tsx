import Link from "next/link";
import { getCategories } from "@/app/lib/api/clientApi";
import AuthNavigation from "../AuthNavigation/AuthNavigation";
import styles from "./Header.module.css";
import AuthenticatedNotesMenu from "./AuthenticatedNotesMenu";
import NavigationLinks from "./NavigationLinks";

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
          <AuthenticatedNotesMenu categories={categories} />
          <NavigationLinks />
          <AuthNavigation />
        </ul>
      </nav>
    </header>
  );
};

export default Header;