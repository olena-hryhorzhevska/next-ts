import { getSingleNote } from "@/app/lib/api";

type Props = {
  params: Promise<{id: string}>
}

const NoteDetails = async ({ params }: Props) => {
  const { id } = await params;
  const note = await getSingleNote(id);
  
  return (
    <div>
      <h2>{note.title}</h2>
      <p>{ note.content}</p>
    </div>
  )
}

export default NoteDetails;