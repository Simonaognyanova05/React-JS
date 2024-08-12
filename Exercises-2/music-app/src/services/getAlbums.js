export async function getAlbums() {
    let albums = await fetch('http://localhost:2005/catalog');

    return albums;
}