const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        name : String,
        email : String,
        password : String,
        number : String,
    },
    {
        timestamps : true,
        versionKey : false
    }
);

module.exports = mongoose.model("User", userSchema)