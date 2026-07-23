"use client";

import { useState } from 'react';
import { getNotes, Note } from '../../lib/api/clientApi';
import NoteList from '@/components/NoteList/NoteList';
import styles from './page.module.css';

const NotesPage = ()=> {
  const [notes, setNotes] = useState<Note[]>([]);
  const handleClick = async () => {
    const response = await getNotes();
    if (response.notes) {
      setNotes(response.notes);
    }
  }

  return (
    <section className={styles.notesPage}>
      <div className={styles.heroCard}>
        <div>
          <h1 className={styles.pageTitle}>Notes</h1>
          <p className={styles.subtitle}>
            Fetch your notes, browse your list, and keep your ideas neatly organized.
          </p>
        </div>
        <button className={styles.primaryButton} onClick={handleClick}>
          Load notes
        </button>
      </div>
      {notes.length > 0 ? (
        <NoteList notes={notes} />
      ) : (
        <div className={styles.emptyState}>
          <p>No notes loaded yet. Use the button above to refresh your list.</p>
        </div>
      )}
    </section>
  )
}

export default NotesPage;




// import { getNotes } from '../lib/api';
// import NoteList from '@/components/NoteList/NoteList';

// const NotesPage = async () => {
//   const response = await getNotes();

//   return (
//     <div>
//       <h1>Notes</h1>
//       {response.notes.length > 0 && <NoteList notes={response.notes} />}
//     </div>
//   );
// };

// export default NotesPage;
