"use client";

import { deleteAllNotesAction } from "@/actions/notes";
import { useActionState } from "react";

export function DeleteAllNotes() {
  const [, action, pending] = useActionState(deleteAllNotesAction, null);
  return (
    <div>
      <hr />
      <form action={action}>
        <button>{pending ? "Удаление..." : "Удалить все заметки"}</button>
      </form>
      <br />
    </div>
  );
}
