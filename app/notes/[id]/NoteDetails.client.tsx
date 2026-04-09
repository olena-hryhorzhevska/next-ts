'use client';

import { useQuery } from '@tanstack/react-query';
import { getSingleNote } from '@/app/lib/api';
import { useParams } from 'next/navigation';

export default function NoteDetailsClient() {
  const { id } = useParams<{ id: string }>();

  const {
    data: note,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['note', id],
    queryFn: () => getSingleNote(id),
    refetchOnMount: false,
  });
  if (isLoading) return <p>Loading...</p>;
  if (error || !note) return <p>Error loading note details.</p>;
  const formattedDate = note.updatedAt ? note.updatedAt : note.createdAt;

  return (
    <div>
      <h2>{note.title}</h2>
      <p>{note.content}</p>
      <p>Last updated: {formattedDate}</p>
    </div>
  );
}
