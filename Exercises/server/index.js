const express = require('express');
const cors = require('cors');
const cars = require('./src/cars');
const createCar = require('./services/createCar');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/cars', async (req, res) => {
    await cars(req, res);
});

app.post('/create', async (req, res) => {
    await createCar(req, res);
})
app.listen(3001);