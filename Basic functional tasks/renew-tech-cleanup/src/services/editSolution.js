export async function editSolution(type, imageUrl, description, learnMore, ownerId, solutionId) {
    let solution = await fetch(`http://localhost:2005/edit/${solutionId}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify({ type, imageUrl, description, learnMore, ownerId })
    });

    return solution;
}