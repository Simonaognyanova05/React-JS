export async function deleteSolution(solutionId) {
    let result = await fetch(`http://localhost:2005/delete/${solutionId}`, {
        method: 'DELETE',
        headers: {
            'content-type': 'application/json'
        }
    });

    return result;
}