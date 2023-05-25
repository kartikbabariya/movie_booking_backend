const config = require("./config")


module.exports = () => {
    return (req, res, next) => {

        const key = req.headers.key || req.body.key || req.query.key;

        if (key) {
            if (config.SECRET_KEY === key) {
                next()
            } else {
                return res.status(401).json({ status: false, message: "Unauthorized Access !!" })
            }
        }else {
            return res.status(401).json({ status: false, message: "Unauthorized Access !!" })
        }

    }
}