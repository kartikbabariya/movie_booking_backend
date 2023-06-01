const express = require("express");
const route = express.Router();

const multer = require("multer");

const storage = require("../../utils/multer");
const checkAccessKey = require("../../utils/checkAccessKey");

const bookingController = require("./bookingController");

const upload = multer({
    storage,
});


//Book Movie
route.post("/",  bookingController.bookMovie);

module.exports = route