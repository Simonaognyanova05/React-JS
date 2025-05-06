export async function getMovies() {
    let movies = await fetch('http://localhost:2000/');

    let res = await movies.json();
    return res;
}