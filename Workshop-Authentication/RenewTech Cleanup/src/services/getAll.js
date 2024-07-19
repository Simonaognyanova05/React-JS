export async function getAll() {
    let games = await fetch('http://localhost:3030/data/solutions?sortBy=_createdOn%20desc');

    let res = await games.json();
    return res;
}