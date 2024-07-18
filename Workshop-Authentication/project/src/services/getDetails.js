export async function getDetails(solutionId) {
    let details = await fetch(`http://localhost:3030/data/solutions/${solutionId}`);

    let res = await details.json();

    return res;
}