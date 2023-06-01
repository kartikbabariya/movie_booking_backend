const express = require("express");
const route = express.Router();


const checkAccessKey = require("../../utils/checkAccessKey");

const screenController = require("./screenController");

//Create Screen
route.post("/", screenController.addScreen);

//Get Screen 
route.post("/:screenId", screenController.getMovieScreen);

//Create User
route.patch("/:screenId",  screenController.updateScreen);

module.exports = route