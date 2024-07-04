import React from 'react';
import uniqid from 'uniqid';
import ToDoItem from './ToDoItem';

export default function ToDoList() {
    let [todos, setTodos] = React.useState([
        { id: uniqid(), text: "Go shopping" },
        { id: uniqid(), text: "Walk dog" },
        { id: uniqid(), text: "Learn words" },
    ])
    return (
        <ul>
            {todos.map(x => <ToDoItem key={x.id} todos={x}/>)}
        </ul>
    );
}