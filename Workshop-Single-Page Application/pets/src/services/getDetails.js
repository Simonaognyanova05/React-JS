export function getDetails(bookId) {
    return fetch(`http://localhost:3030/data/books/${bookId}`)
        .then(res => res.json());
}