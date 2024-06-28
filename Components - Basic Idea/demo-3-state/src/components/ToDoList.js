import React from 'react';
import ToDoListItem from "./ToDoListItem";

function ToDoList() {
    const todoState = React.useState(['Clean', 'Go shopping', 'Learn React', 'Learn React classes']);

    const todos = todoState[0];
    return (
        <>
            <h2>Tasks</h2>

            <ul>
                {todos.map(x => <ToDoListItem>{x}</ToDoListItem>)}
            </ul>
        </>
    );
}


export default ToDoList;