import React, { useEffect, useState } from "react";
import axiosInstance from "./api/axiosInstance";
import NoteCard from "./components/NoteCard";

const EMPTY_NOTE = { title: "", description: "", _id: "" };

const App = () => {
  const [notes, setNotes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const [showEditArea, setShowEditArea] = useState(false);
  const [currentNote, setCurrentNote] = useState(EMPTY_NOTE);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // ─── Fetch all notes ───────────────────────────────────────────────────────
  const fetchNotes = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await axiosInstance.get("/notes");
      setNotes(response.data);
    } catch (err) {
      console.error("Error fetching notes:", err);
      setError("Failed to load notes. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  // ─── Add note ──────────────────────────────────────────────────────────────
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { title, description } = e.target.elements;

    const trimmedTitle = title.value.trim();
    const trimmedDescription = description.value.trim();

    if (!trimmedTitle || !trimmedDescription) {
      setError("Title and description cannot be empty.");
      return;
    }

    setIsSubmitting(true);
    setError(null);
    try {
      const response = await axiosInstance.post("/notes", {
        title: trimmedTitle,
        description: trimmedDescription,
      });
      setNotes((prev) => [...prev, response.data]);
      e.target.reset();
    } catch (err) {
      console.error("Error adding note:", err);
      setError("Failed to add note. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // ─── Delete note ───────────────────────────────────────────────────────────
  const handleDelete = async (id) => {
    try {
      await axiosInstance.delete(`/notes/${id}`);
      setNotes((prev) => prev.filter((note) => note._id !== id));
    } catch (err) {
      console.error("Error deleting note:", err);
      setError("Failed to delete note. Please try again.");
    }
  };

  // ─── Open edit area ────────────────────────────────────────────────────────
  const handleEditOpen = (note) => {
    setCurrentNote({ title: note.title, description: note.description, _id: note._id });
    setShowEditArea(true);
    setError(null);
  };

  const handleEditClose = () => {
    setShowEditArea(false);
    setCurrentNote(EMPTY_NOTE);
  };

  // ─── Submit edit ───────────────────────────────────────────────────────────
  const handleEditSubmit = async (e) => {
    e.preventDefault();

    const trimmedTitle = currentNote.title.trim();
    const trimmedDescription = currentNote.description.trim();

    if (!trimmedTitle || !trimmedDescription) {
      setError("Title and description cannot be empty.");
      return;
    }

    setIsSubmitting(true);
    setError(null);
    try {
      await axiosInstance.put(`/notes/${currentNote._id}`, {
        title: trimmedTitle,
        description: trimmedDescription,
      });
      await fetchNotes();
      handleEditClose();
    } catch (err) {
      console.error("Error updating note:", err);
      setError("Failed to update note. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // ─── Render ────────────────────────────────────────────────────────────────
  return (
    <>
      {/* Edit Modal */}
      {showEditArea && (
        <div className="edit-area display-edit-area">
          <form className="edit-form" onSubmit={handleEditSubmit}>
            <input
              type="text"
              placeholder="Title"
              value={currentNote.title}
              onChange={(e) =>
                setCurrentNote((prev) => ({ ...prev, title: e.target.value }))
              }
            />
            <textarea
              placeholder="Description"
              value={currentNote.description}
              onChange={(e) =>
                setCurrentNote((prev) => ({ ...prev, description: e.target.value }))
              }
            />
            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Updating..." : "Update Note"}
            </button>
            <button type="button" onClick={handleEditClose}>
              Cancel
            </button>
          </form>
        </div>
      )}

      {/* Add Note Form */}
      <form className="note-form" onSubmit={handleSubmit}>
        <input type="text" placeholder="Title" name="title" />
        <textarea placeholder="Description" name="description" />
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Adding..." : "Add Note"}
        </button>
      </form>

      {/* Error Message */}
      {error && <p className="error-message">{error}</p>}

      {/* Notes List */}
      {isLoading ? (
        <p className="loading-message">Loading notes...</p>
      ) : (
        <div className="notes">
          {notes.length === 0 ? (
            <p className="empty-message">No notes yet. Add one above!</p>
          ) : (
            notes.map((note) => (
              <NoteCard
                key={note._id}
                note={note}
                onDelete={handleDelete}
                onEdit={handleEditOpen}
              />
            ))
          )}
        </div>
      )}
    </>
  );
};

export default App;