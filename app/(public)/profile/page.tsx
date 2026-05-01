import Link from 'next/link';

const ProfilePage = () => {
  return (
    <div>
      <h1>Profile</h1>
      <p>This is the profile page.</p>
      <Link href='/profile/edit'>Edit Profile</Link>
    </div>
  );
};

export default ProfilePage;


// /docs/setup/install/windows
// app/dosc/[...slug]/page.tsx

// /docs/setup/install
// ['setup', 'install']