const express = require("express");
const router = express.Router();

//Create instance of books
const Book = require("../models/books");
//Show list of Books
router.get("/", async (req, res) => {
  try {
    const book = await Book.find();
    res.status(200).json(book);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

//Create a new book
router.post("/", async (req, res) => {
  const newBook = new Book(req.body);
  try {
    await newBook.save();
    res.status(200).json(newBook);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

//Search book
router.get("/:id", async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    res.status(200).json(book);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

//Delete a book
router.delete("/:id", async (req, res) => {
  try {
    await Book.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "the book Deleted Successfuly" });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

//Edit a book
router.put("/:id", async (req, res) => {
  try {
    const book = await Book.findByIdUndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(book);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

module.exports = router;
