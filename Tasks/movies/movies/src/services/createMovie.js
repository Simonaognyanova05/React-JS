export async function createMovie(title, year, time){
    await fetch('http://localhost:2000/', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({ title, year, time })
    });
}