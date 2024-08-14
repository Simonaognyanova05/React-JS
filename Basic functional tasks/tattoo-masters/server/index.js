const express = require('express');
const cors = require('cors');

const { register } = require('./services/register');
const { login } = require('./services/login');
const { create } = require('./services/create');
const { getTattoo } = require('./services/getTattoo');
const { getDetails } = require('./services/getDetails');
const { editTattoo } = require('./services/editTattoo');
const { deleteTattoo } = require('./services/deleteTattoo');

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

app.get('/collection', async(req, res) => {
    let tattoo = await getTattoo(req, res);
    res.json(tattoo);
});

app.get('/details/:tattooId', async(req, res) => {
    let details = await getDetails(req, res);
    res.json(details);
});

app.put('/edit/:tattooId', async(req, res) => {
    await editTattoo(req, res);
});

app.delete('/delete/:tattooId', async(req, res) => {
    await deleteTattoo(req, res);
});

app.listen(2005);