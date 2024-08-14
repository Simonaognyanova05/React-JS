export async function deleteTattoo(tattooId) {
    let result = await fetch(`http://localhost:2005/delete/${tattooId}`, {
        method: 'DELETE',
        headers: {
            'content-type': 'application/json'
        }
    });

    return result;
}