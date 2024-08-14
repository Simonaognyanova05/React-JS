export async function createTattoo(type,
    imageUrl,
    description,
    userType,
    ownerId) {
    let tattoo = await fetch('http://localhost:2005/create', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({
            type,
            imageUrl,
            description,
            userType,
            ownerId
        })
    });

    return tattoo;
}