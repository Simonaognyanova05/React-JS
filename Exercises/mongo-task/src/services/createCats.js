export async function createCats(name, age, breed, img, ownerId) {
    let cat = await fetch('http://localhost:3001/create', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({ name, age, breed, img, ownerId })
    });

    let res = await cat.json();

    return res;
}