const express = require('express');
const cors = require('cors');
const { login } = require('./services/login');

const app = express();
app.use(cors());
app.use(express.json());

app.post('/login', async (req, res) => {
    await login(req, res);
})

app.listen(2005);