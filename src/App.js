import "./App.css";
import AddNote from "./AddNote";
import { useObserver } from "mobx-react";
import { useNotesStore } from "./NotesContext";

function App() {
  const notesStore = useNotesStore();

  return useObserver(() => (
    <div className="App">
      <ul>
        {notesStore.notes.map((note) => (
          <li onClick={() => notesStore.removeNote(note.id)} key={note.id}>
            {note.text}
          </li>
        ))}
      </ul>
      <AddNote />
    </div>
  ));
}

export default App;
