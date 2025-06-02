export async function login(email, password) {
    const res = await fetch('http://localhost:2000/user/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
    });

    if (!res.ok) {
        throw new Error('Failed to login');
    }

    return await res.json();
}
