import React from 'react';
import uniqid from 'uniqid';
import TodoListItem from "./TodoListItem";
import { addTodo } from '../service/addTodos'

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

    const createTodo = (e) => {
        let newTodo = {
            id: uniqid(),
            text: e.target.value,
            isDone: false
        }

        addTodo(newTodo)
            .then(res => {
                setTodos(oldTodos => [
                    ...oldTodos,
                    res
                ])
            })

    }

    return (
        <>
            <input type='text' onBlur={createTodo} />
            <ul>
                {todos.map(x => <TodoListItem key={x._id} todos={x} />)}

            </ul>
        </>
    );
}