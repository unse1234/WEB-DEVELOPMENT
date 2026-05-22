const express = require("express");
const noteModel = require("./models/notes.model");
const app = express();

app.use(express.json());

app.get("/notes", (req, res) => {
     
});

app.post("/notes", async (req, res) => {
  
  const { title, description } = req.body;
  const newNote =  await noteModel.create({ title, description });

  res.status(201).json({
    message: "Note created successfully",
  });



});

app.delete("/notes/:id", (req, res) => {
  Notes[req.params.id] = null;
  res.send("Note deleted successfully");
});
app.patch("/notes/:id", (req, res) => {
  Notes[req.params.id].description = req.body.description;
  res.send("Note updated successfully");
});
module.exports = app;
