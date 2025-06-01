export async function register(email, password) {
    let user = await fetch('http://localhost:2000/user/register', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    });

    if (user.ok) {
        return user;
    } else {
        throw user.message;
    }
}