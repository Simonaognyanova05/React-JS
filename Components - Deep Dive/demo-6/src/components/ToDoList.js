import React from 'react';
import uniqid from 'uniqid';
import TodoItem from './TodoItem';
import { createTodo } from '../services/todoServices'

const API_URL = 'http://localhost:3030/jsonstore';

export default function ToDoList() {
    const [todos, setTodos] = React.useState([]);

    React.useEffect(() => {
        fetch(`${API_URL}/todos`)
            .then(res => res.json())
            .then(result => {
                setTodos(Object.values(result));
            })
    }, [])

    const finishTask = (id) => {
        setTodos(oldTodos =>
            oldTodos.map(todo =>
                todo.id === id ? { ...todo, isFinish: !todo.isFinish } : todo
            )
        );
    }

    const addTodo = (e) => {
        let todo = {
            id: uniqid(),
            text: e.target.value,
            isDone: false,
        }

        createTodo(todo)
            .then(res => {
                setTodos(oldTodos => [
                    ...oldTodos,
                    res
                ])
            })
    }

    return (
        <>
            <input type='text' name='todo' onBlur={addTodo} />

            <ul>
                {todos.map(todo =>
                    <TodoItem
                        key={todo.id}
                        todo={todo}
                        onClick={finishTask}
                    />
                )}
            </ul>
        </>
    );
}
