const mongoose = require("mongoose");

const screenSchema = new mongoose.Schema(
    {
        // type: { type: Number, enum: [0, 1, 2] }, // 0 : platinum , 1 : Gold , 2 : silver
        screenType: { type: Number, enum: [0, 1, 2] }, // Theater Screen
        screenDesign: Array,
        movieId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Movie",
            default: null,
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
);

module.exports = mongoose.model("Screen", screenSchema)