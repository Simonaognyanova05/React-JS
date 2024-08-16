const express = require('express');
const cors = require('cors');

const { register } = require('./services/register');
const { login } = require('./services/login');
const { createSolution } = require('./services/createSolution');
const { getSolutions } = require('./services/getSolutions');
const { getDetails } = require('./services/getDetails');
const { editSolution } = require('./services/editSolution');
const { deleteSolution } = require('./services/deleteSolution');


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
    await createSolution(req, res);
});

app.get('/solutions', async (req, res) => {
    let solutions = await getSolutions(req, res);
    res.json(solutions);
});

app.get('/details/:solutionId', async (req, res) => {
    let solutions = await getDetails(req, res);
    res.json(solutions);
});

app.put('/edit/:solutionId', async (req, res) => {
    await editSolution(req, res);
});

app.delete('/delete/:solutionId', async (req, res) => {
    await deleteSolution(req, res);
});

app.listen(2005);