export async function login(email, password) {
    let userData = await fetch('http://localhost:3030/users/login', {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify({ email, password })
    });

    let res = await userData.json();

    if (userData.ok) {
        return res;
    } else {
        throw res.message;
    }
}