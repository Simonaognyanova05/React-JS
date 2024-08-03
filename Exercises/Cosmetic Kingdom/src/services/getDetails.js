export async function getDetails(productId) {
    let product = await fetch(`http://localhost:3030/data/products/${productId}`);

    let res = await product.json();

    return res;
}