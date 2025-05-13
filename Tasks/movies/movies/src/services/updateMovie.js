export async function updateMovie(title, year, time, movieId) {
    await fetch(`http://localhost:2000/${movieId}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({title, year, time})
    })
}