const express = require("express");
const route = express.Router();


const checkAccessKey = require("../../utils/checkAccessKey");

const userController = require("./userController");


//Login User
route.post("/login",  userController.loginUser)

//Create User
route.post("/",  userController.createUser);

module.exports = route