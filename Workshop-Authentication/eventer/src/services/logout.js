export async function logout(accessToken){
    let result = await fetch('http://localhost:3030/users/logout', {
        headers: {
            'X-Authorization': accessToken
        }
    });

    return result;
}