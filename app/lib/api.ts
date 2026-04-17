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
  await delay(2000);
  const response = await axios.get<Note>(`/notes/${id}`);
  return response.data;
}

export const getNotes = async () => {
  const res = await axios.get<NoteListResponse>('/notes');
  return res.data;
}

export type Category = {
  id: string;
  name: string;
  description: string;
  createdAt: string;
  updatedAt: string;
}

export const getCategories = async () => {
  const res = await axios.get<Category[]>('/categories');
  return res.data;
}