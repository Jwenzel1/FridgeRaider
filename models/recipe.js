const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
  title: { type: String, required: true },
  spoonacularID: {type: Number, required: true},
  instructions: [{
    number: Number,
    step: String
  }],
  sourceURL: String,
  spoonacularURL: String,
  ingredients: [{
    name: String,
    qty: Number,
    unit: String
  }],
  image: String
});

const recipe = mongoose.model("Recipe", recipeSchema);

module.exports = recipe;
