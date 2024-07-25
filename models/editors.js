const mongoose = require("mongoose");
const editorsSchema = mongoose.Schema({
  maisonedit: { type: String, required: true, unique: true },
  siteweb: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
});
module.exports = mongoose.model("Editors", editorsSchema);
