"use client";

import { deleteNoteByIdAction } from "@/actions/notes";
import { Note } from "@/app/generated/prisma";
import { useActionState } from "react";

interface NotesProps {
  noteList: Note[];
}

export default function Notes({ noteList }: NotesProps) {
  const [, action, pending] = useActionState(deleteNoteByIdAction, null);

  if (pending) return <h1>Идет процесс удаления какого пункта...</h1>;

  return (
    <ul>
      {noteList.map((note) => {
        return (
          <li key={note.id}>
            <h3>{note.title}</h3>
            <p>{note.content}</p>
            <form action={action}>
              <input type="hidden" name="noteId" value={note.id} />
              <button>Удалить</button>
            </form>
          </li>
        );
      })}
    </ul>
  );
}
