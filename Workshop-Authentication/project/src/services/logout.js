export async function logout(token) {
    let result = await fetch(`http://localhost:3030/users/logout`, {
        headers: {
            'X-Authorization': token,
            'Content-Type': 'application/json',
        }
    });

    return result;
};