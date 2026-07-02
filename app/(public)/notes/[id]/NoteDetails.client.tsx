'use client';

import { useQuery } from '@tanstack/react-query';
import { getSingleNote } from '@/app/lib/api';
import { useParams } from 'next/navigation';
import { notFound } from 'next/navigation';
import { useRouter } from 'next/navigation';
import styles from './NoteDetails.module.css';

export default function NoteDetailsClient() {
  const { id } = useParams<{ id: string }>();
  const router = useRouter();

  const {
    data: note,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['note', id],
    queryFn: () => getSingleNote(id),
    refetchOnMount: false,
  });

  const handleGoBack = () => {
    const isSure = confirm('Are you sure?')
    if (isSure) {
      router.back();
    }
  }

  if (isLoading)
    return (
      <div className={styles.statusCard}>
        <p>Loading your note...</p>
      </div>
    );

  if (error || !note)
    return (
      <div className={styles.statusCard}>
        <p>Error loading note details.</p>
      </div>
    );

  const formattedDate = note.updatedAt ? note.updatedAt : note.createdAt;

  return (
    <div className={styles.noteDetails}>
      <button className={styles.backButton} onClick={handleGoBack}>
        Go back
      </button>
      <article className={styles.card}>
        <h2 className={styles.title}>{note.title}</h2>
        <p className={styles.content}>{note.content}</p>
        <p className={styles.meta}>Last updated: {formattedDate}</p>
      </article>
    </div>
  );
}





// useRouter() – хук для доступа к объекту маршрутизатора, который позволяет 
// управлять навигацией и получать информацию о текущем маршруте.

// router.push('/url') – переход на новую страницу (история сохраняется).
// router.replace('/url') – переход на новую страницу без сохранения в истории (замена текущей страницы).
// router.back() – переход назад по истории.
// router.forward() – переход вперед по истории.


// (private)/about/page.tsx
// (public)/profile/page.tsx