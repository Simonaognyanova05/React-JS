export async function createSolution(type, imageUrl, description, learnMore, ownerId) {
    let solution = await fetch('http://localhost:2005/create', {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify({ type, imageUrl, description, learnMore, ownerId })
    });

    return solution;
}