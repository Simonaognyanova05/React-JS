export async function editSolution(type, imageUrl, description, learnMore, accessToken, solutionId) {
    let editInfo = await fetch(`http://localhost:3030/data/solutions/${solutionId}`, {
        method: 'PUT',
        headers: {
            'X-Authorization': accessToken,
            'content-type': 'application/json'
        },
        body: JSON.stringify({ type, imageUrl, description, learnMore })
    })

    let res = await editInfo.json();

    return res;
}