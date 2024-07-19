export async function getAll() {
    let events = await fetch('http://localhost:3030/data/events?sortBy=_createdOn%20desc');

    let res = await events.json();

    return res;
}