const Booking = require("./bookingModel");
const Movie = require("../Movie/movieModel")
const Screen = require("../Screen/screenModel")
const User = require("../User/userModel")

//Add movie
exports.bookMovie = async (req, res) => {
    try {

        console.log("req.body", req.body)

        if (!req.body.column && !req.body.row && !req.body.movieId && !req.body.userId) {
            return res.status(200).json({ status: false, message: "Invalid Details !" })
        }

        const screen = await Screen.findById(req.body.screenId);
        
        if (!screen) {
            return res.status(404).json({ status: false, message: "Screen not found!" });
        }
        
        const movie = await Movie.findById(req.body.movieId);
        if (!movie) {
            return res.status(404).json({ status: false, message: "Movie not found!" });
        }
        
        const user = await User.findById(req.body.userId);
        if (!user) {
            return res.status(404).json({ status: false, message: "User not found!" });
        }

        const screenId = req.body.screenId;
        const row = req.body.row;
        const column = req.body.column;
        const columnSeats = column.map((seat) => seat.substring(1))

        const update = {
            $set: {}
        };


        columnSeats.forEach((column) => {
            update.$set[`screenDesign.${row}.${parseInt(column - 1)}.status`] = 1;
        });

        const options = {
            new: true // Return the updated document
        };

        const updatedScreen = await Screen.findOneAndUpdate({ _id: screenId }, update, options);

        if (!updatedScreen) {
            return res.status(404).json({ status: false, message: "Screen not found!" });
        }

        const book = new Booking();


         book.screenId = screen._id;
         book.movieId = movie._id;
         book.movieName = movie.movieName;
         book.userId = user._id;
         book.userName = user.name;
         book.totalSeat = column.length;
         book.bookedSeat = column;


         await book.save()

        return res.status(200).json({ status: true, message: "Ticket Booked !", screen: updatedScreen });

        // return res.status(200).json({ status: true, message: "Success", screen });

    } catch (error) {
        return res.status(500).json({ status: false, message: "Internal Server Error !" })
    }
}

