export async function getDrones() {
    let result = await fetch('http://localhost:2000/data/drones');

    return await result.json();
}