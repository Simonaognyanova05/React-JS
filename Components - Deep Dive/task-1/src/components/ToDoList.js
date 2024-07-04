import React from 'react';
import ToDoItem from './ToDoItem';
import { arrayData } from '../data/data';

export default function ToDoList() {
    let [todos, setTodos] = React.useState(arrayData)
    return (
        <ul>
            {todos.map(x => <ToDoItem key={x.id} todos={x} />)}
        </ul>
    );
}