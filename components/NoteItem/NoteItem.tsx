import { Note } from '../../app/lib/api/api';
import Link from 'next/link';
import styles from './NoteItem.module.css';

type Props = {
  item: Note;
}

const NoteItem = ({ item }: Props) => {
  return (
    <li className={styles.noteItem}>
      <Link href={`/notes/${item.id}`} className={styles.noteLink}>
        {item.title}
      </Link>
    </li>
  )
}

export default NoteItem;

