export async function createPet(petInfo, token) {
    let response = await fetch('http://localhost:3030/data/myPets', {
        method: 'POST',
        headers: {
            'X-Authorization': token,
            'content-type': 'application/json'
        },
        body: JSON.stringify(petInfo)
    });

    let res = await response.json();

    return res;
}