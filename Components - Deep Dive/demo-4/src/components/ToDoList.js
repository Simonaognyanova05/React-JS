import React from 'react';
import uniqid from 'uniqid';
import TodoItem from "./TodoItem";

export default function ToDoList() {
    const [todos, setTodos] = React.useState([
        { id: 1, text: 'Clean your room' },
        { id: 2, text: 'Learn React' },
        { id: 3, text: 'Go to gym' }
    ])

    React.useEffect(() => {
        console.log('Mounted');
    }, []);

    const addTodo = (e) => {
        let todo = {
            id: uniqid(),
            text: e.target.value
        }

        setTodos(state => [
            ...state,
            todo
        ])
    }

    const deleteHandler = (id) => {
        setTodos(oldTodo => oldTodo.filter(x => x.id != id))
    }

    return (
        <>
        <input type='text' name='todo' onBlur={addTodo}/>
            <ul>
                {todos.map(x => <TodoItem key={x.id} id={x.id} todo={x} onDelete={deleteHandler}/>)}
            </ul>
        </>
    );
}