const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema(
    {
        movieId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Movie",
            default: null,
        },
        screenId :  {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Screen",
            default: null,
        },
        userId :  {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            default: null,
        },
        userName : {type : String},
        bookedSeat : {type : Array},
        totalSeat : {type : Number},
        movieName : {type : String}
    },
    {
        timestamps: true,
        versionKey: false
    }
);

module.exports = mongoose.model("Booking", bookingSchema)