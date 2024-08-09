export async function getCars() {
    let cars = await fetch('http://localhost:3001/cars');
    let res = await cars.json();
    return res;
}