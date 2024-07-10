export function getDetails(id) {
    return fetch(`http://localhost:3030/data/games/${id}`)
        .then(res => res.json());
}