export async function deleteProduct(productId, token) {
    let deleted = await fetch(`http://localhost:3030/data/products/${productId}`, {
        method: 'DELETE',
        headers: {
            'X-Authorization': token,
            'content-type': 'application/json'
        }
    })

    let res = await deleted.json();

    return res;
}