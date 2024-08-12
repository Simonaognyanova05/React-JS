export async function getDetails(albumId) {
    let details = await fetch(`http://localhost:2005/details/${albumId}`);

    let res = await details.json();
    return res;
}