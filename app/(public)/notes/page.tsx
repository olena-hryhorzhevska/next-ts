"use client";

import { useState } from 'react';
import { getNotes, Note } from '../../lib/api';
import NoteList from '@/components/NoteList/NoteList';


const NotesPage = ()=> {
  const [notes, setNotes] = useState<Note[]>([]);
  const handleClick = async () => {
    const response = await getNotes();
    if (response.notes) {
      setNotes(response.notes);
    }
}

  return (
    <section>
      <h1>Notes Page</h1>
      <button onClick={handleClick}>Get my notes</button>
      {notes.length > 0 && <NoteList notes={notes} />}
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
