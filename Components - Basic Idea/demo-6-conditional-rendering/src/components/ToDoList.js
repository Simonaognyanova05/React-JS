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
            <h2>Counter - {name}</h2>

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