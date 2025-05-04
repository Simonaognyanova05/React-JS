const express = require('express');
const { getMovies } = require('./services/getMovies');
const { createMovie } = require('./services/createMovie');
const { updateMovie } = require('./services/updateMovie');
const { deleteMovie } = require('./services/deleteMovie');

const app = express();
app.use(express.json());

app.get('/', getMovies);

app.post('/', async (req, res) => { await createMovie(req, res)} );
app.put('/:movieId', async (req, res) => {
    await updateMovie(req, res);
});

app.delete('/:movieId', async(req, res) => {
    await deleteMovie(req, res);
})
app.listen(2000);