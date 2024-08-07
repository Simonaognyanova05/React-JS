const { getCars } = require('../services/getCars');

module.exports = async (req, res) => {
    try {
        const cars = await getCars(req, res);        
        return cars;
    } catch (e) {
        throw e;
    }
}