export async function register(email, password) {
    let user = await fetch('http://localhost:2005/register', {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify({ email, password })
    });

    return user;
}