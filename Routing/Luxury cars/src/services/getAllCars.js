export function getAllCars() {
    return fetch('http://localhost:3030/data/cars?sortBy=_createdOn%20desc')
        .then(res => res.json());
}