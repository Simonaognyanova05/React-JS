const express = require('express');
const cors = require('cors');

const cars = require('./src/cars');
const { createCar } = require('./services/createCars');
const { updateCars } = require('./services/updateCars');
const { deleteCars } = require('./services/deleteCars');


const app = express();

app.use(cors());
app.use(express.json());

app.get('/cars', async (req, res) => {
    await cars(req, res);
});

app.post('/create', async (req, res) => {
    await createCar(req, res);
});

app.put('/update', async (req, res) => {
    await updateCars(req, res);
});

app.delete('/delete', async (req, res) => {
    await deleteCars(req, res);
});

app.listen(3001);