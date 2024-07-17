export async function getAllPets(){
    let pets = await fetch('http://localhost:3030/data/myPets');

    let res = await pets.json();
    return res;
}