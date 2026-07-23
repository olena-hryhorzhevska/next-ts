"use client";

import Link from "next/link";
import { useAuthStore } from "@/app/lib/store/authStore";
import { useRouter } from "next/navigation";
import { logout } from "@/app/lib/api/clientApi";
import styles from "./AuthNavigation.module.css";

const AuthNavigation = () => {
  const router = useRouter();

  const { isAuthenticated, user } = useAuthStore();
  const clearIsAuthenticated = useAuthStore(
    (state) => state.clearIsAuthenticated,
  );

  const handleLogout = async () => {
    await logout();
    clearIsAuthenticated();
    router.replace('/sign-in');
    router.refresh();
  };

  return isAuthenticated ? (
    <li className={styles.authItem}>
      <span className={styles.userEmail}>{user?.email}</span>
      <button className={styles.logoutBtn} onClick={handleLogout}>
        Logout
      </button>
    </li>
  ) : (
    <>
      <li>
        <Link href="/sign-in" className={styles.authLink}>
          Login
        </Link>
      </li>
      <li>
        <Link href="/sign-up" className={styles.signUpLink}>
          Sign Up
        </Link>
      </li>
    </>
  );
};

export default AuthNavigation;