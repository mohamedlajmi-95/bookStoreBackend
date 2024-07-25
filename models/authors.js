const mongoose = require("mongoose");
const authorsSchema = mongoose.Schema({
  nomauteur: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  numtel: { type: Number, required: true, unique: true },
});

module.exports = mongoose.model("Authors", authorsSchema);
