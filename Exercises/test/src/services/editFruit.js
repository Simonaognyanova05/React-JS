export async function editFruit(name, imageUrl, description, nutrition, fruitId, accessToken) {
    let fruit = await fetch(`http://localhost:3030/data/fruits/${fruitId}`, {
        method: 'PUT',
        headers: {
            'X-Authorization': accessToken,
            'content-type': 'application/json'
        },
        body: JSON.stringify({ name, imageUrl, description, nutrition })
    });

    let res = await fruit.json();

    return res;
}