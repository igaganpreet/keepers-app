import React from "react";
import Notes from "../notes";
import CreateNote from "./CreateNote";

function Note() {
  return (
    <div>
       {Notes.map(createNote)}
    </div>
  );
}
function createNote(note) {
  return (
    <CreateNote key={note.key} title={note.title} content={note.content} />
  );
}

export default Note;
