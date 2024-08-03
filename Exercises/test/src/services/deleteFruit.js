export async function deleteFruit(fruitId, token) {
    let fruit = await fetch(`http://localhost:3030/data/fruits/${fruitId}`, {
        method: 'DELETE',
        headers: {
            'X-Authorization': token,
        }
    })

    let res = await fruit.json();
    return res;
}