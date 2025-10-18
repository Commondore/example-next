import { createNoteAction } from "@/actions/notes";
import { getAllNotes } from "@/lib/repo/note.repository";

import s from "./notes.module.css";
import { CreateFormNote } from "@/components/create-form-note/create-form-note";
import { DeleteAllNotes } from "@/components/delete-all-notes/delete-all-notes";
import Notes from "@/components/notes/notes";

export default async function NotesPage() {
  const noteList = await getAllNotes();

  return (
    <div className="container">
      <h1>Notes Page</h1>

      <CreateFormNote />

      <Notes noteList={noteList} />

      <DeleteAllNotes />
    </div>
  );
}
