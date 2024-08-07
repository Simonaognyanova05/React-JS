const { getCars } = require('../services/getCars');

module.exports = async (req, res) => {
    try {
        const cars = await getCars(req, res);        
        res.json(cars);
    } catch (e) {
        throw e;
    }
}