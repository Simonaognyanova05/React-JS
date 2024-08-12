export async function updateAlbum(name, imgUrl, price, releaseDate, artist, genre, description, ownerId, albumId) {
    let album = await fetch(`http://localhost:2005/edit/${albumId}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify({ name, imgUrl, price, releaseDate, artist, genre, description, ownerId })
    });

    return album;
}