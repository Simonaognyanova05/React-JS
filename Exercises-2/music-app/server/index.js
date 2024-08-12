const express = require('express');
const cors = require('cors');
const { login } = require('./services/login');
const { register } = require('./services/register');
const { create } = require('./services/create');
const { getAlbums } = require('./services/getAlbums');

const app = express();
app.use(cors());
app.use(express.json());

app.post('/login', async (req, res) => {
    await login(req, res);
});

app.post('/register', async (req, res) => {
    await register(req, res);
});

app.post('/create', async (req, res) => {
    await create(req, res);
});

app.get('/catalog', async (req, res) => {
    let albums = await getAlbums(req, res);
    res.json(albums);
});

app.listen(2005);