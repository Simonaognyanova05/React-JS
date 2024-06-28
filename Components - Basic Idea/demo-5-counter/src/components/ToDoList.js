import React from 'react';
import ToDoListItem from "./ToDoListItem";

function ToDoList() {
    let countState = React.useState(0);

    let [count, setCount] = countState;
    return (
        <>
            <h2>Counter</h2>

            <ul>
                <ToDoListItem>{count}</ToDoListItem>
            </ul>

            {/* events */}
            <button onClick={() => setCount(count + 1)}>Test</button >
        </>
    );
}


export default ToDoList;