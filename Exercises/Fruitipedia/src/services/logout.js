export async function logout(token) {
    let user = await fetch('http://localhost:3030/users/logout', {
        headers: {
            'X-Authorization': token
        }
    });

    return user;
}