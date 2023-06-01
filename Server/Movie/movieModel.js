const { Types } = require("mongoose");
const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema(
    {
        movieName : String,
        movieImage : String,
        //  screenId: {
        //     type: mongoose.Schema.Types.ObjectId,
        //     ref: "Screen",
        //     default: null,
        // }
    },
    {
        timestamps : true,
        versionKey : false
    }
);

module.exports = mongoose.model("Movie", movieSchema)