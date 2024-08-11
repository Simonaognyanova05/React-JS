const express = require('express');
const cors = require('cors');
const { login } = require('./services/login');
const { register } = require('./services/register');

const app = express();
app.use(cors());
app.use(express.json());

app.post('/login', async (req, res) => {
    await login(req, res);
});

app.post('/register', async (req, res) => {
    await register(req, res);
})

app.listen(2005);