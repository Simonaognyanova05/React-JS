export async function create(name, imgUrl, price, releaseDate, artist, genre, description) {
    let album = await fetch('http://localhost:2005/create', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({ name, imgUrl, price, releaseDate, artist, genre, description })
    });

    return album;
}