import NoteCard from "./NoteCard";

function NoteList({ notes, onDelete, onEdit }) {
  if (notes.length === 0) {
    return <p className="no-notes">No notes found.</p>;
  }

  return (
    <div className="note-list">
      {notes.map((note) => (
        <NoteCard
          key={note.id}
          note={note}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </div>
  );
}

export default NoteList;