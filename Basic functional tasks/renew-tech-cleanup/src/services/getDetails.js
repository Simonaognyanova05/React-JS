export async function getDetails(solutionId) {
    let details = await fetch(`http://localhost:2005/details/${solutionId}`);

    return details;
}