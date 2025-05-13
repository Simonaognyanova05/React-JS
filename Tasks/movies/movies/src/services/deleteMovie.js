export async function deleteMovie(movieId) {
    await fetch(`http://localhost:2000/${movieId}`, {
        method: 'DELETE',
        headers: {
            'content-type': 'application/json'
        },
    })
}