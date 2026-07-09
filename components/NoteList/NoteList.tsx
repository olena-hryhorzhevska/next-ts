import { Note } from '../../app/lib/api/api';
import NoteItem from '../NoteItem/NoteItem';
import styles from './NoteList.module.css';

type Props = {
  notes: Note[];
}

const NoteList = ({ notes }: Props) => {
  return (
    <ul className={styles.noteList}>
      {notes.map((note) => (
        <NoteItem key={note.id} item={note} />
      ))}
    </ul>
  )
}

export default NoteList;