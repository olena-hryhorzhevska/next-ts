import Link from 'next/link';
import styles from './page.module.css';

const ProfilePage = () => {
  return (
    <div className={styles.profilePage}>
      <section className={styles.profileCard}>
        <h1 className={styles.profileTitle}>Your profile</h1>
        <p className={styles.profileText}>
          Welcome to NoteLab. Keep your notes organized and easy to find.
        </p>
        <Link href='/profile/edit' className={styles.profileLink}>
          Edit Profile
        </Link>
      </section>
    </div>
  );
};

export default ProfilePage;