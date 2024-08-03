export async function editProduct(name, imageUrl, category, description, price, productId, token) {
    let product = await fetch(`http://localhost:3030/data/products/${productId}`, {
        method: 'PUT',
        headers: {
            'X-Authorization': token,
            'content-type': 'application/json'
        },
        body: JSON.stringify({ name, imageUrl, category, description, price })
    });

    let res = await product.json();

    return res;
}