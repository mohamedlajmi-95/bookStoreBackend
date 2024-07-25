const express = require("express");
const router = express.Router();

//Create instance of authors
const Author = require("../models/authors");
//Show list of authors
router.get("/", async (req, res) => {
  try {
    const author = await Author.find();
    res.status(200).json(author);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

//Create a new author
router.post("/", async (req, res) => {
  const newAuthor = new Author(req.body);
  try {
    await newAuthor.save();
    res.status(200).json(newAuthor);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

//Search author
router.get("/:id", async (req, res) => {
  try {
    const author = await Author.findById(req.params.id);
    res.status(200).json(author);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

//Delete a author
router.delete("/:id", async (req, res) => {
  try {
    await Author.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "the author Deleted Successfuly" });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

//Edit a book
router.put("/:id", async (req, res) => {
  try {
    const author = await Author.findByIdUndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(author);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

module.exports = router;
