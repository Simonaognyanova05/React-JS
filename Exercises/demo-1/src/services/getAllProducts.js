export async function getAllProducts(){
    let products = await fetch('http://localhost:3030/data/products?sortBy=_createdOn%20desc');

    let res = await products.json();

    return res;
}