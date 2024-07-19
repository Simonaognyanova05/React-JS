export async function createSolution(type, imageUrl, description, learnMore, accessToken) {
    let solution = await fetch('http://localhost:3030/data/solutions', {
        method: 'POST',
        headers: {
            'x-Authorization': accessToken,
            'content-type': 'application/json'
        },
        body: JSON.stringify({ type, imageUrl, description, learnMore })
    })

    let res = await solution.json();

    return res;
}