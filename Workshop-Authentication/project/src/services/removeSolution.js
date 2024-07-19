export async function removeSolution(solutionId, token) {
    let result = await fetch(`http://localhost:3030/data/solutions/${solutionId}`, {
        method: 'DELETE',
        headers: {
            'X-Authorization': token,
            'content-type': 'application/json',
        },
    });

    let res = await result.json();
    return res;
}