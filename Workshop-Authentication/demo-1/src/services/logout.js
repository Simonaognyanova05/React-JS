export async function login(email, password) {
    let loginData = await fetch('http://localhost:3030/users/logout', {
        method: 'POST',
        headers: {
            'content-type': 'applicaion/json'
        },
        body: JSON.stringify({ email, password })
    });

    let res = await loginData.json();

    if(loginData.ok){
        return res;
    }else{
        throw res.message;
    }
}