const express = require("express");

const app = express();

app.use(express.json());

const Notes = [];

app.get("/notes", (req, res) => {
  res.send(Notes);
});

app.post("/notes", (req, res) => {
  Notes.push(req.body);
  res.send("Note added successfully");
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
