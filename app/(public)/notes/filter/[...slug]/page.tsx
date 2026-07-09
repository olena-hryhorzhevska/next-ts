import { getNotes } from "@/app/lib/api/api";
import NoteList from "@/components/NoteList/NoteList";
import styles from './page.module.css';

type Props = {
  params: Promise<{ slug: string[] }>;
}

const NotesByCategory = async ({ params }: Props) => {
  const { slug } = await params;
  const category = slug[0] === 'all' ? undefined : slug[0];
  const response = await getNotes(category);
  
  return (
    <div className={styles.pageWrapper}>
      <section className={styles.listCard}>
        <h1 className={styles.pageTitle}>Notes List</h1>
        {response?.notes.length > 0 ? (
          <NoteList notes={response.notes} />
        ) : (
          <p className={styles.emptyMessage}>No notes found for this category.</p>
        )}
      </section>
    </div>
  )
}

export default NotesByCategory;






// import { notFound } from 'next/navigation';

// type Props = {
//   params: Promise<{ slug: string[] }>;
// };

// const validCategories = ['all', 'work', 'personal'];

// export default async function FilterPage({ params }: Props) {
//   const { slug } = await params;
//   const category = slug[0];

//   if (!validCategories.includes(category)) {
//     notFound();
//   }

//   return <h1>Category: {category}</h1>;
// }


// settings/edit/user/card/subscription