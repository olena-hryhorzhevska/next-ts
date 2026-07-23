'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Header.module.css";
export default function NavigationLinks() {
  const pathname = usePathname();
  const isProfileActive = pathname.startsWith("/profile");
  const isAboutActive = pathname === "/about";

  return (
    <>
      <li>
        <Link
          href="/profile"
          className={`${styles.navLink} ${
            isProfileActive ? styles.activeNavLink : ""
          }`}
        >
          Profile
        </Link>
      </li>
      <li>
        <Link
          href="/about"
          className={`${styles.navLink} ${isAboutActive ? styles.activeNavLink : ""}`}
        >
          About
        </Link>
      </li>
    </>
  );
}
