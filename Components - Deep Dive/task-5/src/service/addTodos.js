const URL = 'http://localhost:3030/jsonstore';

export function addTodo(todo){
    return fetch(`${URL}/todos`, {
        method: 'POST',
        headers: {
            'content-type': 'application-json'
        },
        body: JSON.stringify(todo)
    })
}