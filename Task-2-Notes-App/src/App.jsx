import { useEffect, useState } from "react";
import NoteForm from "./components/NoteForm";
import NoteList from "./components/NoteList";

function App() {
  const [notes, setNotes] = useState(() => {
    const savedNotes = localStorage.getItem("notes");
    return savedNotes ? JSON.parse(savedNotes) : [];
  });

  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const addNote = (newNote) => {
    setNotes((prevNotes) => [newNote, ...prevNotes]);
  };

  const deleteNote = (id) => {
    setNotes((prevNotes) =>
      prevNotes.filter((note) => note.id !== id)
    );
  };

  const editNote = (note) => {
    const newTitle = prompt("Enter new title:", note.title);
    const newContent = prompt("Enter new content:", note.content);

    if (
      newTitle !== null &&
      newContent !== null &&
      newTitle.trim() &&
      newContent.trim()
    ) {
      setNotes((prevNotes) =>
        prevNotes.map((item) =>
          item.id === note.id
            ? {
                ...item,
                title: newTitle.trim(),
                content: newContent.trim(),
              }
            : item
        )
      );
    }
  };

  const filteredNotes = notes.filter(
    (note) =>
      note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      note.content.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="app">
      <header>
        <h1>Notes App</h1>
        <p>Create, edit, search and manage your notes</p>
      </header>

      <NoteForm onAddNote={addNote} />

      <input
        className="search-bar"
        type="text"
        placeholder="Search notes..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <NoteList
        notes={filteredNotes}
        onDelete={deleteNote}
        onEdit={editNote}
      />
    </div>
  );
}

export default App;