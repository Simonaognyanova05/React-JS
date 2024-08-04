export async function getCats() {
    let cats = await fetch('http://localhost:3001/cats');

    let res = await cats.json();
    return res;
}