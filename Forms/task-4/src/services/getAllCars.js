export function getAllCars() {
    return fetch('http://localhost:3030/jsonstore/myCars')
        .then(res => res.json());
}