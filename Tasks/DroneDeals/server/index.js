const express = require('express');
const cors = require('cors');
const { register } = require('./services/register');
const { login } = require('./services/login');
const { logout } = require('./services/logout');
const { createDrone } = require('./services/createDrone');

const app = express();
app.use(express.json());
app.use(cors());

app.post('/user/register', async(req, res) => {
    await register(req, res);
});

app.post('/user/login', async(req, res) => {
    await login(req, res);
});

app.get('/users/logout', (req, res) => logout(req, res));

app.post('/data/drones', async(req, res) => {
    await createDrone(req, res);
})

app.listen(2000);