const express = require('express');
const cors = require('cors');
const cats = require('./src/cats');

const app = express();
app.use(cors());

app.get('/cats', async (req, res) => {
    await cats(req, res);
});

app.listen(3001, () => {
    console.log('Server is running on http://localhost:3001');
});
