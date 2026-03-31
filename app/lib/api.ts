import axios from 'axios';

export type Note = {
  id: string;
  title: string;
  content: string;
  categoryId: string;
  userId: string;
  createdAt: string;
  updatedAt: string;
}

export type NoteListResponse = {
  notes: Note[];
  total: number;
}

axios.defaults.baseURL = 'https://next-v1-notes-api.goit.study';

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const getSingleNote = async (id: string) => {
  const response = await axios.get<Note>(`/notes/${id}`);
  return response.data;
}

export const getNotes = async () => {
  await delay(2000);
  const res = await axios.get<NoteListResponse>('/notes');
  return res.data;
}