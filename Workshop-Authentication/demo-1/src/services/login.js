export function login(email, password) {
    return fetch('http://localhost:3030/users/login', {
        method: 'POST',
        headers: {
            'content-type': 'applicaion/json'
        },
        body: JSON.stringify({ email, password })
    })
        .then(res => res.json())
}