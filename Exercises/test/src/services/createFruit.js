export async function createFruit(name, imageUrl, description, nutrition, accessToken) {
    let fruit = await fetch('http://localhost:3030/data/fruits', {
        method: 'POST',
        headers: {
            'X-Authorization': accessToken,
            'content-type': 'application/json'
        },
        body: JSON.stringify({ name, imageUrl, description, nutrition })
    });

    let res = await fruit.json();

    return res;
}