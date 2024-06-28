import React from 'react';
import ToDoListItem from "./ToDoListItem";

function ToDoList() {
    let countState = React.useState(0);
    let nameState = React.useState('');

    let [count, setCount] = countState;
    let [name, setName] = nameState;

    const changeName = (e) => {
        setName(e.target.value);
    }
    return (
        <>
            {/* && and || */}
            {name && <h2>Counter - {name}</h2>}
            {name || <h2>No name</h2>}

            {/* trnary operatior */}
            {name == 'Pesho'
                ? <h3>He is the best!</h3>
                : <h3>Nah!</h3>
            }

            <ul>
                <ToDoListItem>{count}</ToDoListItem>
            </ul>
            {/* dynamic input */}
            <input type='text' onChange={changeName} />
            {/* events */}
            <button onClick={() => setCount(count + 1)}>Test</button >
        </>
    );
}


export default ToDoList;