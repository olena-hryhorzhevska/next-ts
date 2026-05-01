'use client';

import { useQuery } from '@tanstack/react-query';
import { getSingleNote } from '@/app/lib/api';
import { useParams } from 'next/navigation';
import { notFound } from 'next/navigation';
import { useRouter } from 'next/navigation';

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

  if (!note) {
    notFound()
  }
  if (isLoading) return <p>Loading...</p>;
  if (error || !note) return <p>Error loading note details.</p>;
  const formattedDate = note.updatedAt ? note.updatedAt : note.createdAt;

  return (
    <div>
      <button onClick={handleGoBack}>Go Back</button>
      <h2>{note.title}</h2>
      <p>{note.content}</p>
      <p>Last updated: {formattedDate}</p>
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