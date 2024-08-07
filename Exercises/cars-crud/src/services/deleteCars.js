export async function deleteCars(brand, model) {
    let car = await fetch('http://localhost:3001/delete', {
        method: 'DELETE',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({ brand, model })
    });

    return car;
}