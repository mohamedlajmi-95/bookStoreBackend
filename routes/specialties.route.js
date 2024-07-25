const express = require("express");
const router = express.Router();

//Create instance of specialties
const Specialties = require("../models/specialties");
//Show list of Specialty
router.get("/", async (req, res) => {
  try {
    const specialties = await Specialties.find({}, null, {
      sort: { _id: -1 },
    }).populate("booksID");
    res.status(200).json(specialties);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

//Create a new Specialty
router.post("/", async (req, res) => {
  const newSpecialties = new Specialties(req.body);
  try {
    await newSpecialties.save();
    res.status(200).json(newSpecialties);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

//Search Specialty
router.get("/:id", async (req, res) => {
  try {
    const specialties = await Specialties.findById(req.params.id);
    res.status(200).json(specialties);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

//Delete a Specialty
router.delete("/:id", async (req, res) => {
  try {
    await Specialties.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "the Specialty Deleted Successfuly" });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

//Edit a Specialty
router.put("/:id", async (req, res) => {
  try {
    const specialties = await Specialties.findByIdUndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(specialties);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

module.exports = router;
