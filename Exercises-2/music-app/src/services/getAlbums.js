export async function getAlbums() {
    let albums = await fetch('http://localhost:2005/catalog');

    let res = await albums.json();
    return res;
}