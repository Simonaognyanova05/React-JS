import React from 'react';
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
            id: todos.length + 1,
            text: e.target.value
        }

        setTodos(state => [
            ...state,
            todo
        ])
    }

    const deleteHandler = (id) => {
        console.log('delete ', id);
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