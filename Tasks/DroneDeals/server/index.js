const express = require('express');
const cors = require('cors');
const { register } = require('./services/register');
const { login } = require('./services/login');

const app = express();
app.use(express.json());
app.use(cors());

app.post('/user/register', async(req, res) => {
    await register(req, res);
});

app.post('/user/login', async(req, res) => {
    await login(req, res);
});

app.listen(2000);