const express = require('express');
const cors = require('cors');
const { register } = require('./services/register');
const { login } = require('./services/login');
const { logout } = require('./services/logout');
const { createDrone } = require('./services/createDrone');
const { getDrone } = require('./services/getDrone');
const { getDetails } = require('./services/getDetails');
const { updateDrone } = require('./services/updateDrone');
const { deleteDrone } = require('./services/deleteDrone');

const app = express();
app.use(express.json());
app.use(cors());

app.post('/user/register', async (req, res) => {
    await register(req, res); 
});


app.post('/user/login', async (req, res) => {
    await login(req, res);
});

app.get('/users/logout', (req, res) => logout(req, res));

app.post('/data/createDrones', async (req, res) => {
    await createDrone(req, res);
});

app.get('/data/drones', async (req, res) => {
    let result = await getDrone(req, res);
    res.json(result);
});

app.get('/data/drones/:droneId', async (req, res) => {
    let result = await getDetails(req, res);
    res.json(result);
});

app.put('/data/edit/:droneId', async (req, res) => {
    await updateDrone(req, res);
});

app.delete('/data/delete/:droneId', async (req, res) => {
    await deleteDrone(req, res);
});
app.listen(2000);