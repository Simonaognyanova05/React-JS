const getCars = require('../services/getCars');

module.exports = async (req, res) => {
    try {
        const cars = await getCars();
        res.json(cars);
    } catch (error) {
        console.error('An error occurred while fetching cars:', error);
        res.status(500).json({ message: 'An error occurred while fetching cars' });
    }
}