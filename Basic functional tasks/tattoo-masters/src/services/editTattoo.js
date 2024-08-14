export async function editTattoo(type, imageUrl, description, userType, ownerId, tattooId) {
    let editedTattoo = await fetch(`http://localhost:2005/edit/${tattooId}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({ type, imageUrl, description, userType, ownerId })
    });

    return editedTattoo;
}