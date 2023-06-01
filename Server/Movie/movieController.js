const { deleteFile } = require("../../utils/deleteFile");
const Movie = require("./movieModel");
const Screen = require("../Screen/screenModel")
const fs = require("fs");
const { baseURL } = require("../../utils/config");

//Get Movie List
exports.index = async (req, res) => {
    try {
        const movie = await Movie.find();
        if (!movie)
            return res.status(200).json({ status: false, message: "No data found!" });

        return res.status(200).json({
            status: true,
            message: "Success!!",
            movie,
        });
    } catch (error) {
        console.log(error);
        return res
            .status(500)
            .json({ status: false, error: error.message || "Server Error" });
    }
};


//Add movie
exports.addMovie = async (req, res) => {
    try {

        if (!req.file || !req.body.movieName) {
            return res.status(200).json({ status: false, message: "Invalid Details !" })
        }

        // const screen = await Screen.findById(req.body.screenId)


        const movie = new Movie();


        movie.movieImage = baseURL + req.file.path;
        // movie.screenId = screen._id;
        movie.movieName = req.body.movieName;

        await movie.save();

        return res.status(200).json({ status: true, message: "Success", movie });

    } catch (error) {
        return res.status(500).json({ status: false, message: "Internal Server Error !" })
    }
}

// update Movie
exports.movieUpdate = async (req, res) => {
    console.log(req.params.movieId);
    try {
        const movie = await Movie.findById(req.params.movieId);

        if (!movie) {
            deleteFile(req.file);
            return res
                .status(200)
                .json({ status: false, message: "Banner does not Exist!" });
        }

        if (req.file) {
            if (fs.existsSync(banner.image)) {
                fs.unlinkSync(banner.image);
            }

            movie.movieImage = req.file.path;
        }

        movie.movieName = req.body.movieName;

        await movie.save();

        return res.status(200).json({
            status: true,
            message: "Success!",
            movie,
        });
    } catch (error) {
        console.log(error);
        deleteFile(req.file);
        return res
            .status(500)
            .json({ status: false, error: error.message || "Server Error" });
    }
};


// delete Movie
exports.destroy = async (req, res) => {
    try {
        const movie = await Movie.findById(req.params.movieId);

        if (!movie)
            return res
                .status(200)
                .json({ status: false, message: "Movie does not Exist!" });

        if (fs.existsSync(movie.movieImage)) {
            fs.unlinkSync(movie.movieImage);
        }

        await movie.deleteOne();

        return res.status(200).json({ status: true, message: "Success!" });
    } catch (error) {
        console.log(error);
        return res
            .status(500)
            .json({ status: false, error: error.message || "Server Error" });
    }
};

//Get all the screen whre this movie is running
exports.movieWiseScreen = async (req, res) => {
    try {

        console.log("req.body.movieId",req.params)

        const movie = await Movie.findById(req.params.movieId);

        console.log("movie",movie)

        if (!movie) {
            return res.status(200).json({ status: false, message: "Movie does not exists !" })
        }


        const screen = await Screen.aggregate(
            [
                {
                    $match: {
                        movieId: movie._id
                    }
                },
                // {
                //     $lookup : {
                //         from : "movies",
                //         localField:"movieId",
                //         foreignField  : "_id",
                //         as : "movie"
                //     }
                // },
                // {
                //     $unwind : {
                //         path: "$movie",
                //         preserveNullAndEmptyArrays: false,
                //     }
                // }
                {
                    $project : {
                        screenType : 1
                    }
                }
            ]   
        )

        return res.status(200).json({status : true , message : "Success" , screen})

    } catch (error) {
        return res.status(500).json({ status: false, message: "Internal Server Error !" })
    }
}