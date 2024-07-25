const express = require("express");
const router = express.Router();

//Create instance of editor
const Editor = require("../models/editors");
//Show list of editors
router.get("/", async (req, res) => {
  try {
    const editor = await Editor.find();
    res.status(200).json(editor);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

//Create a new editor
router.post("/", async (req, res) => {
  const newEditor = new Editor(req.body);
  try {
    await newEditor.save();
    res.status(200).json(newEditor);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

//Search editor
router.get("/:id", async (req, res) => {
  try {
    const editor = await Editor.findById(req.params.id);
    res.status(200).json(editor);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

//Delete a author
router.delete("/:id", async (req, res) => {
  try {
    await Editor.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "the editor Deleted Successfuly" });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

//Edit a editor
router.put("/:id", async (req, res) => {
  try {
    const editor = await Editor.findByIdUndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(editor);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

module.exports = router;
