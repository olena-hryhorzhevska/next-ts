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

// axios.defaults.baseURL = 'http://localhost:3000/api';

const nextServer = axios.create({
  baseURL: "http://localhost:3000/api",
  withCredentials: true,
})

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const getSingleNote = async (id: string) => {
  await delay(2000);
  const response = await nextServer.get<Note>(`/notes/${id}`);
  return response.data;
}

export const getNotes = async (categoryId?: string) => {
  const res = await nextServer.get<NoteListResponse>('/notes', {
    params: { categoryId },
  });
  return res.data;
};

export type Category = {
  id: string;
  name: string;
  description: string;
  createdAt: string;
  updatedAt: string;
}

export const getCategories = async () => {
  const res = await nextServer.get<Category[]>('/categories');
  return res.data;
}