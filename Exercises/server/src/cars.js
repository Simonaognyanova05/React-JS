const getCars = require("../services/getCars")

module.exports = async function cars(req, res) {
    try {
        const cars = await getCars();
        res.json(cars)
    } catch (e) {
        throw e;
    }
}