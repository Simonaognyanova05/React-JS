export async function register(email, password){
    let user = await fetch('http://localhost:3030/users/register', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({email, password})
    })

    let res = await user.json();

    if(user.ok){
        return res;
    }else{
        throw res.message
    }
}