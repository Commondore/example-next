"use client";
import { useActionState } from "react";
import s from "./create-form-note.module.css";
import { createNoteAction, NoteState } from "@/actions/notes";

const initialState: NoteState = {
  title: "",
  content: "",
  error: null,
};

export const CreateFormNote = () => {
  const [state, action, pending] = useActionState(createNoteAction, initialState);

  return (
    <div>
      {state.error && <p className={s.error}>{state.error}</p>}
      <form action={action}>
        <div className={s.group}>
          <input className={s.input} type="text" name="title" placeholder="Enter title" />
        </div>
        <div className={s.group}>
          <textarea className={s.input} name="content" placeholder="Enter content"></textarea>
        </div>
        <button className={s.button} disabled={pending}>
          {pending ? "Добавление записи..." : "Добавить запись"}
        </button>
      </form>
    </div>
  );
};
