export async function updateCars(brand, model, year) {
    const car = await fetch('http://localhost:3001/update', {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({ brand, model, year })
    });

    return car;
}