export async function register(email, password) {
    const res = await fetch('http://localhost:2000/user/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
    });

    if (!res.ok) {
        throw new Error('Failed to register');
    }

    return await res.json();
}
