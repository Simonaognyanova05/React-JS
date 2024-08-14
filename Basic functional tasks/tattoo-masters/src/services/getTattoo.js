export async function getTattoo() {
    let tattoo = await fetch('http://localhost:2005/collection');

    return tattoo;
}