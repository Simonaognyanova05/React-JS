export async function remove(eventId, accessToken){
    let result = await fetch(`http://localhost:3030/data/events/${eventId}`, {
        method: 'DELETE',
        headers: {
            'X-Authorization': accessToken,
            'content-type': 'application/json'
        }
    });

    let res = await result.json();

    return res;
}