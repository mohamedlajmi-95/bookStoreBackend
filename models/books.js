const mongoose = require("mongoose");
const Authors = require("./authors.js");
const booksSchema = mongoose.Schema({
  titre: { type: String, required: true, unique: true },
  annedition: { type: Number, required: true },
  prix: { type: Number, required: true },
  qtestock: { type: Number, required: true },
  couverture: { type: String, required: true, unique: true },
  authorsID: { type: mongoose.Schema.Types.ObjectId, ref: Authors },
});

module.exports = mongoose.model("Books", booksSchema);
