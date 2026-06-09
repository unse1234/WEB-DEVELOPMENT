const NoteModel = require("./models/notes.model");
const cors = require("cors");
const express = require("express");
const App = express();
const path = require("path");
App.use(cors());
App.use(express.json());

App.use(express.static("./public"));
// ****fetch all notes****
App.get("/api/notes", async (req, res) => {
  try {
    const notes = await NoteModel.find();
    res.status(200).json(notes);
  } catch (err) {
    res.status(500).json({ error: "Error fetching notes" });
  }
});

// ****create a new note****
App.post("/api/notes", async (req, res) => {
    
  const { title, description } = req.body;
  console.log(title, description);
  try {
    const newNote = await NoteModel.create({ title, description });
    res.status(201).json(newNote);
  } catch (err) {
    res.status(500).json({ error: "Error creating note" });
  }
}); 


// ****delete a note****
App.delete("/api/notes/:id", async (req, res) => {
  try {
    await NoteModel.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Note deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: "Error deleting note" });
  }
});

// *******update a note****

App.patch("/api/notes/:id", async (req, res) => {
  const { description } = req.body;
  try {
    await NoteModel.findByIdAndUpdate(req.params.id, { description });
    res.status(200).json({ message: "Note updated successfully" });
  } catch (err) {
    res.status(500).json({ error: "Error updating note" });
  }
});

App.put("/api/notes/:id", async (req, res) => {
  const { title, description } = req.body;
  try {
    const note = await NoteModel.findById(req.params.id);
    if (!note) {
      return res.status(404).json({ error: "Note not found" });
    }
    // Update the note with the new values
    note.title = title;
    note.description = description;
    await note.save();
    res.status(200).json(note);
  } catch (err) {
    res.status(500).json({ error: "Error updating note" });
  }
});

App.get("*name", (req, res) => {
    res.sendFile(path.join(__dirname,"..","./public/index.html"));
});


module.exports = App;
