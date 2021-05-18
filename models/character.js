// Import Mongoose
const mongoose = require("mongoose");

// Pull Schema and model from mongoose
const Schema = mongoose.Schema;
const model = mongoose.model;

// Create Place Schema
const characterSchema = new Schema(
  {
    name: String,
    img: String,
    age: 0,
    weapon: String,
    home: String,
    enemy: String
  },
  { timestamps: true }
);

// Create our Model Object
const Character = model("Character", characterSchema);

// Export our Model Object
module.exports = Character;