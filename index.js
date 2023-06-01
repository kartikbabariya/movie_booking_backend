const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const cors = require("cors");
const config = require("./utils/config");
const { port } = require("./utils/config")

const app = express();

app.use(cors());
app.use(express.json());

//User Route
const userRoute = require("./Server/User/userRoute");
app.use("/user", userRoute)

//Movie Route
const movieRoute = require("./Server/Movie/movieRoute");
app.use("/movie", movieRoute)

//Screen Route
const screenRoute = require("./Server/Screen/screenRoute");
app.use("/screen", screenRoute)

//Booking Route
const bookingRoute = require("./Server/Booking/bookingRoute");
app.use("/booking", bookingRoute)

mongoose.connect(
    `mongodb+srv://${config.MONGODB_USERNAME}:${config.MONGODB_PASSWORD}@cluster0.1vrkl.mongodb.net/${config.MONGODB_DB_NAME}`,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        // useFindAndModify: false,
        // useCreateIndex: true,
    }
);

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("MONGO: successfully connected to db");
});

app.listen(port, () => {
    console.log(`Now listening on port ${port}`);
});