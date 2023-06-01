const User = require("./userModel");

//Login User
exports.loginUser = async (req, res) => {
    try {

        if (!req.body.email || !req.body.password) {
            return res.status(200).json({ status: false, message: "Invalid Details !" })
        }

        const user = await User.findOne({ email: req.body.email });

        if (!user) {
            return res.status(200).json({ status: false, message: "User does not exist !" })
        }

        user.password === req.body.password ?
            res.status(200).json({ status: true, message: "Login successful", user })
            : res.status(200).json({ status: false, message: "Email and password does not match !" })

    } catch (error) {
        return res.status(500).json({ status: false, message: "Internal Server Error !" })
    }
}

//Create User
exports.createUser = async (req, res) => {
    try {
        if (!req.body.name || !req.body.email || !req.body.password || !req.body.number ) {
            return res.status(200).json({ stauts: false, message: "Invalid Details !" })
        }

        const userExist = await User.findOne({ email: req.body.email });

        if (userExist) {
            return res.status(200).json({ staus: false, message: "User already Exists !" })
        }

        const user = new User();
        user.name = req.body.name;
        user.email = req.body.email;
        user.password = req.body.password;
        user.number = req.body.number;

        await user.save();

        return res.status(200).json({ status: true, message: "User Created Successfully !", user })


    } catch (error) {
        return res.status(500).json({ status: false, message: "Internal Server Error !" })
    }
}