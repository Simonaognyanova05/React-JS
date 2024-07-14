export function createCar(model, imageUrl, price, weight, speed, about) {
    return fetch('http://localhost:3030/jsonstore/myCars', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ model, imageUrl, price, weight, speed, about })
    })
        .then(res => res.json())
}