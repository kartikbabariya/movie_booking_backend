const { Types } = require("mongoose");
const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema(
    {
        movieName : String,
        movieImage : String,
    },
    {
        timestamps : true,
        versionKey : false
    }
);

module.exports = mongoose.model("Movie", movieSchema)