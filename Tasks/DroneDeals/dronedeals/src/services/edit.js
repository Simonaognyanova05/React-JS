export async function edit(droneId, model, imageUrl, price, weight, phone, condition, description) {
    await fetch(`http://localhost:2000/data/edit/${droneId}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify({ model, imageUrl, price, weight, phone, condition, description })
    })
}