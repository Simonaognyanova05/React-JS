const express = require('express');
const cors = require('cors');
const { login } = require('./services/login');
const { register } = require('./services/register');
const { create } = require('./services/create');
const { getAlbums } = require('./services/getAlbums');
const { getDetails } = require('./services/getDetails');
const { updateAlbum } = require('./services/updateAlbum');
const { deleteAlbum } = require('./services/deleteAlbum');

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

app.put('/edit/:albumId', async (req, res) => {
    await updateAlbum(req, res);
});

app.delete('/delete/:albumId', async (req, res) => {
    await deleteAlbum(req, res);
});

app.get('/catalog', async (req, res) => {
    let albums = await getAlbums(req, res);
    res.json(albums);
});

app.get('/details/:albumId', async (req, res) => {
    let details = await getDetails(req, res);
    res.json(details);
});

app.listen(2005);