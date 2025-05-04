const express = require('express');
const { getMovies } = require('./services/getMovies');

const app = express();


app.get('/', getMovies)
app.listen(2000);