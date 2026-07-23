import Link from 'next/link';
import styles from './page.module.css';
import { getServerMe } from '@/app/lib/api/serverApi';

const ProfilePage = async () => {
  const user = await getServerMe();
  
  return (
    <div className={styles.profilePage}>
      <section className={styles.profileCard}>
        <h1 className={styles.profileTitle}>Your profile</h1>
        <p className={styles.profileText}>
          Welcome to NoteLab. Keep your notes organized and easy to find.
        </p>
        <h2>Name: {user.userName}</h2>
        <h2>Email: {user.email}</h2>
        <Link href="/profile/edit" className={styles.profileLink}>
          Edit Profile
        </Link>
      </section>
    </div>
  );
};

export default ProfilePage;