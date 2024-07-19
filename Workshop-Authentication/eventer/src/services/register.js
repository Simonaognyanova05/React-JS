export async function register(email, password) {
    let result = await fetch('http://localhost:3030/users/register', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    });

    let res = await result.json();

    return res;
}