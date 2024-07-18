export async function logout() {
    let request = await fetch('http://localhost:3030/users/logout');

    let res = await request.json();

    return res;
} 