export async function login(email, password) {
    let user = await fetch('http://localhost:3030/users/login', {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify({ email, password })
    });

    let res = await user.json();

    if (user.ok) {
        return res;
    } else {
        throw res.message;
    }
}