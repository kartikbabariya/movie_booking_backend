const express = require("express");
const route = express.Router();

const multer = require("multer");

const storage = require("../../utils/multer");
const checkAccessKey = require("../../utils/checkAccessKey");

const movieController = require("./movieController");

const upload = multer({
    storage,
});

//Get Movie
route.get("/",  movieController.index);

//Create Movie
route.post("/", 
// checkAccessKey(), 
upload.single("movieImage"), movieController.addMovie);

//update movie
route.patch("/:movieId", 
// checkAccessKey(), 
upload.single("movieImage"), movieController.movieUpdate);

//update movie
route.delete("/:movieId", 
movieController.destroy);


module.exports = route