export async function getDetails(tattooId) {
    let details = await fetch(`http://localhost:2005/details/${tattooId}`);

    return details;
}