export async function createCars(brand, model, year) {
    const car = await fetch('http://localhost:3001/create', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({ brand, model, year })
    });

    let res = await car.json();

    return res;
}