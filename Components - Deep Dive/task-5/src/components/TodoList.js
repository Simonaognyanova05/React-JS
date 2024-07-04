import React from 'react';
import TodoListItem from "./TodoListItem";

export default function TodoList() {
    let [todos, setTodos] = React.useState([]);

    const URL = 'http://localhost:3030/jsonstore';

    React.useState(() => {
        fetch(`${URL}/todos`)
            .then(res => res.json())
            .then(todos => {
                setTodos(Object.values(todos));
            })
    })
    return (
        <>
            <ul>
                {todos.map(x => <TodoListItem key={x._id} todos={x} />)}

            </ul>
        </>
    );
}