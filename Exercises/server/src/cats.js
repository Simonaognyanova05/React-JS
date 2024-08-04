const getCats = require('../services/getCats');


module.exports = async function cats(req, res) {
    try {
        const cats = await getCats();
        res.json(cats);
    } catch (e) {
        res.status(500).json({ message: 'An error occurred while fetching cats' });
    }
}