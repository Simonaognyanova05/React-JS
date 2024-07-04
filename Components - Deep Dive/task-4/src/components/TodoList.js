import React from 'react';
import uniqid from 'uniqid';
import TodoListItem from "./TodoListItem";
import { arrayData } from '../data/data';

export default function TodoList() {
    let [todos, setTodos] = React.useState(arrayData);

    const addTodo = (e) => {
        let newTodo = {
            id: uniqid(),
            text: e.target.value,
            isDone: false
        };

        setTodos(oldTodos => [
            ...oldTodos,
            newTodo
        ])
    };

    const deleteTodo = (id) => {
        setTodos(oldTodos => oldTodos.filter(x => x.id !== id));
    };

    const finishTask = (id) => {
        setTodos(oldTodos =>
            oldTodos.map(todo =>
                todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
            )
        );
    }

    return (

        <>
            <input type="text" onBlur={addTodo} />
            <ul>
                {todos.map(x => <TodoListItem key={x.id} todos={x} onDelete={deleteTodo} onFinish={finishTask}/>)}
            </ul>
        </>
    );
}