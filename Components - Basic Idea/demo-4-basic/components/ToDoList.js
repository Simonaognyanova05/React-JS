import React from 'react';
import ToDoListItem from "./ToDoListItem";

function ToDoList() {
    let todoState = React.useState(['Clean', 'Go shopping', 'Learn React', 'Learn React classes']);

    let [todos, setToDo] = todoState;
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