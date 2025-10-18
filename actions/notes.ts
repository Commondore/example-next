"use server";

import { createNote, deleteAll, deleteById } from "@/lib/repo/note.repository";
import { revalidatePath } from "next/cache";

export interface NoteState {
  title: string;
  content: string;
  error: string | null;
}

export const createNoteAction = async (initialState: NoteState, formData: FormData) => {
  const title = (formData.get("title") as string).trim();
  const content = (formData.get("content") as string).trim();

  if (!title.length || !content.length) {
    return { ...initialState, error: "Заполните все поля" };
  }

  await new Promise((res) => setTimeout(() => res("ok"), 3000));

  await createNote(title, content);

  // при изменение данных они перезапрашиваются автоматически
  revalidatePath("/notes");

  return {
    title,
    content,
    error: null,
  };
};

export const deleteAllNotesAction = async () => {
  await new Promise((res) => setTimeout(() => res("ok"), 3000));

  await deleteAll();

  revalidatePath("/notes");
};

export const deleteNoteByIdAction = async (_: number | null, formData: FormData) => {
  const noteId = Number(formData.get("noteId") as string); // NaN

  await new Promise((res) => setTimeout(() => res("ok"), 3000));

  await deleteById(noteId);

  revalidatePath("/notes");

  return noteId;
};
