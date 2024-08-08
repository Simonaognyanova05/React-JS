const express = require('express');
const cors = require('cors');

const { register } = require('./services/register');
const { login } = require('./services/login');
const { create } = require('./services/create');
const { getMotors } = require('./services/getMotors');

const app = express();
app.use(cors());
app.use(express.json());

app.post('/register', async (req, res) => {
    await register(req, res);
});

app.post('/login', async (req, res) => {
    await login(req, res);
});

app.post('/create', async (req, res) => {
    await create(req, res);
});

app.get('/dashboard', async (req, res) => {
    const motors = await getMotors();
    res.json(motors);
})

app.listen(3001);