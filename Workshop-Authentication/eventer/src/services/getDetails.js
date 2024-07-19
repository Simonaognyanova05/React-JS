export async function getDetails(eventId) {
    let details = await fetch(`http://localhost:3030/data/events/${eventId}`);

    let res = await details.json();

    return res;
}