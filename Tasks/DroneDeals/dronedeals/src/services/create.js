export async function create(model, imageUrl, price, weight, phone, condition, description, ownerId){
    await fetch('http://localhost:2000/data/createDrones', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({model, imageUrl, price, weight, phone, condition, description, ownerId})
    });
}