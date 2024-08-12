export async function deleteAlbum(albumId) {
    let result = await fetch(`http://localhost:2005/delete/${albumId}`, {
        method: 'DELETE',
        headers: {
            'content-type': 'application/json'
        }
    });

    return result;
}