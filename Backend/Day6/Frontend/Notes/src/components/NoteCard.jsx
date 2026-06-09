import React from "react";

const NoteCard = ({ note, onDelete, onEdit }) => {
  return (
    <div className="note">
      <h2>{note.title}</h2>
      <p>{note.description}</p>
      <button className="del-btn" onClick={() => onDelete(note._id)}>
        Delete
      </button>
      <button className="edit-btn" onClick={() => onEdit(note)}>
        Edit
      </button>
    </div>
  );
};

export default NoteCard;