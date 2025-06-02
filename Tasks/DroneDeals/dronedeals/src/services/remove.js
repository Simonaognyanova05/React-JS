export async function remove(droneId){
    await fetch(`http://localhost:2000/data/delete/${droneId}`, {
        method: 'DELETE',
        headers: {
            'content-type': 'application/json'
        }
    })
}