export async function createProduct(name, imageUrl, category, description, price, token) {
    let product = await fetch('http://localhost:3030/data/products', {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'X-Authorization': token
        },
        body: JSON.stringify({ name, imageUrl, category, description, price })
    });

    let res = await product.json();

    return res;
}