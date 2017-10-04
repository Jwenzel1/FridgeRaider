const unirest = require("unirest");
const key = "K42zVU0lUrmshTfDzUCl8bcrngrop1o8UWzjsnktewrpLF8fUH"; //needs to be changed to a production key before deployment
const db = require("../models");
const numRecipes = "12";

function makeRecipe(response){ //Does not check to see if recipe already exists
  let ingredients = [];
  let instructions = [];
  for(ingredient of response.recipes[0].extendedIngredients){
    ingredients.push({
      name: ingredient.name,
      qty: ingredient.amount,
      unit: ingredient.unitShort
    });
  }
  for(step of response.recipes[0].analyzedInstructions[0].steps){
    instructions.push({
      number: step.number,
      step: step.step
    });
  }

  db.Recipe.create({
    title: response.recipes[0].title,
    spoonacularID: response.recipes[0].id,
    instructions: instructions,
    sourceURL: response.recipes[0].sourceURL,
    spoonacularURL: response.recipes[0].spoonacularSourceUrl,
    ingredients: ingredients,
    image: response.recipes[0].image
  }, function(err, recipe){
    if(err){
      console.log("HOLY MOLY AN ERROR!!!");
      return err;
    }
    else{
      return recipe;
    }
  });
}

module.exports = {
  //Hits /api/search/
  randomRecipes: function(req, res){
    makeRecipe(savedRecipe);
    // db.Recipe.find({}).then(recipe => res.json(recipe));
    // unirest.get(`https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/random?limitLicense=false&number=${numRecipes}`)
    // .header("X-Mashape-Key", MightBeAKey)
    // .header("Accept", "application/json")
    // .end(function (result) {
    //   res.json(result.body);
    // });
    },
    getRecipesByIngredients: function(req,res){
      let list = encodeURIComponent(req.body.ingredients.toString());
      unirest.get(`https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/findByIngredients?fillIngredients=false&ingredients=${list}&limitLicense=false&number=${numRecipes}&ranking=1`)
      .header("X-Mashape-Key", key)
      .header("Accept", "application/json")
      .end(function (result) {
        // console.log(result.status, result.headers, result.body);
        res.json(result.body)
      });
    },

    getRecipeById: function(req,res){
      console.log(req.params.id);
      let id = req.params.id + "";
      unirest.get(`https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/${id}/information?includeNutrition=true`)
      .header("X-Mashape-Key", key)
      .header("Accept", "application/json")
      .end(function (result) {
        // console.log(result.status, result.headers, result.body);
        res.json(result.body)
      });
    }
  }

  // findAll: function(req, res) {
  //   db.Book
  //     .find(req.query)
  //     .sort({ date: -1 })
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // },
  // findById: function(req, res) {
  //   db.Book
  //     .findById(req.params.id)
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // },
  // create: function(req, res) {
  //   db.Book
  //     .create(req.body)
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // },
  // update: function(req, res) {
  //   db.Book
  //     .findOneAndUpdate({ _id: req.params.id }, req.body)
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // },
  // remove: function(req, res) {
  //   db.Book
  //     .findById({ _id: req.params.id })
  //     .then(dbModel => dbModel.remove())
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // }
