var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var GenreSchema = new Schema({
  name: { type: String, required: true, maxlength: 100, minlength: 3 },
  author: { type: Schema.Types.ObjectId, ref: "Author", required: true },
  summary: { type: String, required: true },
  isbn: { type: String, required: true },
  genre: [{ type: Schema.Types.ObjectId, ref: "Genre" }],
});

// Virtual for book's URL
GenreSchema.virtual("url").get(function () {
  return "/catalog/genre/" + this._id;
});

//Export model
module.exports = mongoose.model("Genre", GenreSchema);
