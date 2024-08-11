export async function login(email, password) {
    let user = await fetch('http://localhost:2005/login', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    });

    return user;
}