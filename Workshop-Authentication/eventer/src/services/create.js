export async function create(name, imageUrl, category, description, date, accessToken) {
    let event = await fetch('http://localhost:3030/data/events', {
        method: 'POST',
        headers: {
            'X-Authorization': accessToken,
            'content-type': 'application/json'
        },
        body: JSON.stringify({ name, imageUrl, category, description, date })
    })

    let res = await event.json();
    return res;
}