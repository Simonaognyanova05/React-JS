import React from 'react';
import ToDoListItem from "./ToDoListItem";

function ToDoList() {
    let todoState = React.useState('Go shopping');

    let [todos, setToDo] = todoState;
    return (
        <>
            <h2>Tasks</h2>

            <ul>
                <ToDoListItem>{todos}</ToDoListItem>
            </ul>

            {/* events */}
            <button onClick={() => console.log(todos)}>Test</button >
        </>
    );
}


export default ToDoList;