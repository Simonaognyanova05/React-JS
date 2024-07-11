export function getAllBooks() {
    return fetch('http://localhost:3030/data/books?sortBy=_createdOn%20desc')
        .then(res => res.json());
}