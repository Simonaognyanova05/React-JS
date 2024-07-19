export async function getDetails(id) {
    let details = await fetch(`http://localhost:3030/data/solutions/${id}`);

    let res = await details.json();

    return res;
}