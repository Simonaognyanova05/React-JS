export async function getDetails(droneId) {
    let result = await fetch(`http://localhost:2000/data/drones/${droneId}`);

    return await result.json();
}