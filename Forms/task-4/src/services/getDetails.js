export function getDetails(carId) {
    return fetch(`http://localhost:3030/data/cars/${carId}`)
        .then(res => res.json());
}