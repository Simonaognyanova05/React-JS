export async function edit(name, imageUrl, category, description, date, eventId, accessToken) {
    let event = await fetch(`http://localhost:3030/data/events/${eventId}`, {
        method: 'PUT',
        headers: {
            'X-Authorization': accessToken,
            'content-type': 'application/json'
        },
        body: JSON.stringify({ name, imageUrl, category, description, date })
    });

    let res = await event.json();

    return res;
}