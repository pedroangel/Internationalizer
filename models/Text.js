const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const textSchema = new mongoose.Schema({
  key: { type: String, required: true, unique: true },
  page: { type: String, required: true },
  translations: { type: Schema.Types.Mixed },
});

const Text = mongoose.model("Text", textSchema);

module.exports = Text;
