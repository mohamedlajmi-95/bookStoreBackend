const mongoose = require("mongoose");
const Books = require("./books");
const specialtiesSchema = mongoose.Schema({
  nomspecialite: { type: String, required: true, unique: true },
  booksID: { type: mongoose.Schema.Types.ObjectId, ref: Books },
});
module.exports = mongoose.model("Specialties", specialtiesSchema);
