const Screen = require("./screenModel");
const Movie = require("../Movie/movieModel")

//Add movie
exports.addScreen = async (req, res) => {
    try {

        const movie = await Movie.findById(req.body.movieId);

        if (!movie) {
            return res.status(200).json({ status: false, message: "Movie does nor exist !" })
        }

        const screen = new Screen();

        screen.movieId = movie._id;
        // screen.type = req.body.type;
        screen.screenType = req.body.screenType;

        //Screen design change thase type pramane
        screen.screenDesign = (req.body.screenType === 0 && [
            [{ seat: 'A1', status: 0 }, { seat: 'A2', status: 0 }, { seat: 'A3', status: 0 }, { seat: 'A4', status: 0 }, { seat: '', status: 1 }, { seat: 'A5', status: 0 }, { seat: 'A6', status: 0 }, { seat: 'A7', status: 0 }, { seat: 'A8', status: 0 }, { seat: 'A9', status: 0 }],
            [{ seat: 'B1', status: 0 }, { seat: 'B2', status: 0 }, { seat: 'B3', status: 0 }, { seat: 'B4', status: 0 }, { seat: 'B5', status: 0 }, { seat: 'B6', status: 0 }, { seat: 'B7', status: 0 }, { seat: 'B8', status: 0 }, { seat: 'B9', status: 0 }, { seat: 'B10', status: 0 }],
            [{ seat: 'C1', status: 0 }, { seat: 'C2', status: 0 }, { seat: 'C3', status: 0 }, { seat: 'C4', status: 0 }, { seat: 'C5', status: 0 }, { seat: 'C6', status: 0 }, { seat: 'C7', status: 0 }, { seat: 'C8', status: 0 }, { seat: 'C9', status: 0 }, { seat: 'C10', status: 0 }],
            [{ seat: 'D1', status: 0 }, { seat: 'D2', status: 0 }, { seat: 'D3', status: 0 }, { seat: 'D4', status: 0 }, { seat: 'D5', status: 0 }, { seat: 'D6', status: 0 }, { seat: 'D7', status: 0 }, { seat: 'D8', status: 0 }, { seat: 'D9', status: 0 }, { seat: 'D10', status: 0 }],
            [{ seat: 'E1', status: 0 }, { seat: 'E2', status: 0 }, { seat: 'E3', status: 0 }, { seat: 'E4', status: 0 }, { seat: 'E5', status: 0 }, { seat: 'E6', status: 0 }, { seat: 'E7', status: 0 }, { seat: 'E8', status: 0 }, { seat: 'E9', status: 0 }, { seat: 'E10', status: 0 }],
            [{ seat: 'F1', status: 0 }, { seat: 'F2', status: 0 }, { seat: 'F3', status: 0 }, { seat: 'F4', status: 0 }, { seat: 'F5', status: 0 }, { seat: 'F6', status: 0 }, { seat: 'F7', status: 0 }, { seat: 'F8', status: 0 }, { seat: 'F9', status: 0 }, { seat: 'F10', status: 0 }],
            [{ seat: 'G1', status: 0 }, { seat: 'G2', status: 0 }, { seat: 'G3', status: 0 }, { seat: 'G4', status: 0 }, { seat: 'G5', status: 0 }, { seat: 'G6', status: 0 }, { seat: 'G7', status: 0 }, { seat: 'G8', status: 0 }, { seat: 'G9', status: 0 }, { seat: 'G10', status: 0 }],
            [{ seat: 'H1', status: 0 }, { seat: 'H2', status: 0 }, { seat: 'H3', status: 0 }, { seat: 'H4', status: 0 }, { seat: 'H5', status: 0 }, { seat: 'H6', status: 0 }, { seat: 'H7', status: 0 }, { seat: 'H8', status: 0 }, { seat: 'H9', status: 0 }, { seat: 'H10', status: 0 }],
            [{ seat: 'I1', status: 0 }, { seat: 'I2', status: 0 }, { seat: 'I3', status: 0 }, { seat: 'I4', status: 0 }, { seat: '----', status: 1 }, { seat: '----', status: 1 }, { seat: '----', status: 1 }, { seat: '----', status: 1 }, { seat: 'I9', status: 0 }, { seat: 'I10', status: 0 }],
            [{ seat: 'J1', status: 0 }, { seat: 'J2', status: 0 }, { seat: 'J3', status: 0 }, { seat: 'J4', status: 0 }, { seat: '----', status: 1 }, { seat: '----', status: 1 }, { seat: '----', status: 1 }, { seat: '----', status: 1 }, { seat: 'J9', status: 0 }, { seat: 'J10', status: 0 }]

        ]) || (req.body.screenType === 1 && [
            [{ seat: 'A1', status: 0 }, { seat: 'A2', status: 0 }, { seat: 'A3', status: 0 }, { seat: 'A4', status: 0 },  { seat: 'A5', status: 0 }, { seat: 'A6', status: 0 }, { seat: 'A7', status: 0 },  { seat: 'A8', status: 0 }, { seat: 'A9', status: 0 }, { seat: 'A10', status: 0 }],
            [{ seat: 'B1', status: 0 }, { seat: 'B2', status: 0 }, { seat: 'B3', status: 0 }, { seat: 'B4', status: 0 }, { seat: 'B5', status: 0 },  { seat: 'B6', status: 0 }, { seat: 'B7', status: 0 }, { seat: 'B8', status: 0 },  { seat: 'B9', status: 0 }, { seat: 'B10', status: 0 }, { seat: 'B11', status: 0 }],
            [{ seat: 'C1', status: 0 }, { seat: 'C2', status: 0 }, { seat: 'C3', status: 0 }, { seat: 'C4', status: 0 }, { seat: 'C5', status: 0 }, { seat: 'C6', status: 0 },  { seat: 'C7', status: 0 }, { seat: 'C8', status: 0 }, { seat: 'C9', status: 0 }, { seat: 'C10', status: 0 },  { seat: 'C11', status: 0 }, { seat: 'C12', status: 0 }],
            [{ seat: 'D1', status: 0 }, { seat: 'D2', status: 0 }, { seat: 'D3', status: 0 }, { seat: 'D4', status: 0 }, { seat: 'D5', status: 0 }, { seat: 'D6', status: 0 }, { seat: 'D7', status: 0 },  { seat: 'D8', status: 0 }, { seat: 'D9', status: 0 }, { seat: 'D10', status: 0 }, { seat: 'D11', status: 0 },  { seat: 'D12', status: 0 }, { seat: 'D13', status: 0 }],
            [{ seat: 'E1', status: 0 }, { seat: 'E2', status: 0 }, { seat: 'E3', status: 0 }, { seat: 'E4', status: 0 }, { seat: 'E5', status: 0 }, { seat: 'E6', status: 0 }, { seat: 'E7', status: 0 }, { seat: 'E8', status: 0 }, { seat: 'E9', status: 0 }, { seat: 'E10', status: 0 }, { seat: 'E11', status: 0 }, { seat: 'E12', status: 0 },  { seat: 'E13', status: 0 }, { seat: 'E14', status: 0 }],
            [{ seat: 'F1', status: 0 }, { seat: 'F2', status: 0 }, { seat: 'F3', status: 0 }, { seat: 'F4', status: 0 }, { seat: 'F5', status: 0 }, { seat: 'F6', status: 0 }, { seat: 'F7', status: 0 }, { seat: 'F8', status: 0 }, { seat: 'F9', status: 0 },  { seat: 'F10', status: 0 }, { seat: 'F11', status: 0 }, { seat: 'F12', status: 0 }, { seat: 'F13', status: 0 },  { seat: 'F14', status: 0 }, { seat: 'F15', status: 0 }]
          
        ]) || (req.body.screenType === 2 && [
            [{ seat: 'A1', status: 0 }, { seat: 'A2', status: 0 }, { seat: 'A3', status: 0 }, { seat: 'A4', status: 0 },  { seat: 'A5', status: 0 }, { seat: 'A6', status: 0 }, { seat: 'A7', status: 0 },  { seat: 'A8', status: 0 }, { seat: 'A9', status: 0 }, { seat: 'A10', status: 0 }],
            [{ seat: 'B1', status: 0 }, { seat: 'B2', status: 0 }, { seat: 'B3', status: 0 }, { seat: 'B4', status: 0 }, { seat: 'B5', status: 0 },  { seat: 'B6', status: 0 }, { seat: 'B7', status: 0 }, { seat: 'B8', status: 0 },  { seat: 'B9', status: 0 }, { seat: 'B10', status: 0 }, { seat: 'B11', status: 0 }],
            [{ seat: 'C1', status: 0 }, { seat: 'C2', status: 0 }, { seat: 'C3', status: 0 }, { seat: 'C4', status: 0 }, { seat: 'C5', status: 0 }, { seat: 'C6', status: 0 },  { seat: 'C7', status: 0 }, { seat: 'C8', status: 0 }, { seat: 'C9', status: 0 }, { seat: 'C10', status: 0 },  { seat: 'C11', status: 0 }],
            [{ seat: 'D1', status: 0 }, { seat: 'D2', status: 0 }, { seat: 'D3', status: 0 }, { seat: 'D4', status: 0 }, { seat: 'D5', status: 0 }, { seat: 'D6', status: 0 }, { seat: 'D7', status: 0 },  { seat: 'D8', status: 0 }, { seat: 'D9', status: 0 }, { seat: 'D10', status: 0 }, { seat: 'D11', status: 0 }],
            [{ seat: 'E1', status: 0 }, { seat: 'E2', status: 0 }, { seat: 'E3', status: 0 }, { seat: 'E4', status: 0 }, { seat: 'E5', status: 0 }, { seat: 'E6', status: 0 }, { seat: 'E7', status: 0 }, { seat: 'E8', status: 0 }, { seat: 'E9', status: 0 }, { seat: 'E10', status: 0 }, { seat: 'E11', status: 0 }],
            [{ seat: 'F1', status: 0 }, { seat: 'F2', status: 0 }, { seat: 'F3', status: 0 }, { seat: 'F4', status: 0 }, { seat: 'F5', status: 0 }, { seat: 'F6', status: 0 }, { seat: 'F7', status: 0 }, { seat: 'F8', status: 0 }, { seat: 'F9', status: 0 },  { seat: 'F10', status: 0 }, { seat: 'F11', status: 0 }]
        ])

        await screen.save();

        return res.status(200).json({ status: true, message: "Success", screen });

    } catch (error) {
        return res.status(500).json({ status: false, message: "Internal Server Error !" })
    }
}

//Get Screen Wise Seat Arrangement
exports.getMovieScreen = async (req, res) => {
    try {

        if (!req.params.screenId) {
            return res.status(200).json({ status: false, message: "Invalid Details !" })
        }

        console.log("screen", req.params.screenId)

        const screen = await Screen.findById(req.params.screenId);

        console.log("screen", screen)

        if (!screen) {
            return res.status(200).json({ status: false, message: "Screen does not found !" })
        }

        return res.status(200).json({ status: true, message: "Success !", screen })

    } catch (error) {
        return res.status(500).json({ status: false, message: "Internal Server Error !" })
    }
}

//Update Screen
exports.updateScreen = async (req, res) => {
    try {

        const screen = await Screen.findById(req.params.screenId);

        const screenNew = await screen.screenDesign[screen.type];


        for (let i = 0; i < req.body.column.length; i++) {
            let index = req.body.column[i];
            screenNew[req.body.row][index] = 0;
        }

        return res.status(200).json({ status: true, message: "Success !", screenNew })

    } catch (error) {
        return res.status(500).json({ status: false, message: "Intrenal Server Error !" })
    }
}