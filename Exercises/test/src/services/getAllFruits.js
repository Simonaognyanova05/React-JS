export async function getAllFruits() {
    let fruits = await fetch('http://localhost:3030/data/fruits?sortBy=_createdOn%20desc');

    let res = await fruits.json();

    return res;
}