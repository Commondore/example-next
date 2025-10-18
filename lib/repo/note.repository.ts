import { Note } from "@/app/generated/prisma";
import prisma from "../prisma";

export async function getAllNotes(): Promise<Note[]> {
  return prisma.note.findMany();
}

export async function createNote(title: string, content: string) {
  return prisma.note.create({ data: { title, content } });
}

export async function deleteAll() {
  return prisma.note.deleteMany();
}

export async function deleteById(noteId: number) {
  return prisma.note.delete({
    where: {
      id: noteId,
    },
  });
}
