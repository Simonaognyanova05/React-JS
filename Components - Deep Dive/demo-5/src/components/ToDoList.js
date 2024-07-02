import React from 'react';
import uniqid from 'uniqid';
import TodoItem from "./TodoItem";

export default function ToDoList() {
    const [todos, setTodos] = React.useState([
        { id: 1, text: 'Clean your room', isFinish: false },
        { id: 2, text: 'Learn React', isFinish: false },
        { id: 3, text: 'Go to gym', isFinish: false }
    ])

    const addTodo = (e) => {
        let todo = {
            id: uniqid(),
            text: e.target.value,
            isFinish: false
        }

        setTodos(oldTodos => [
            ...oldTodos,
            todo
        ])
    }

    const deleteHandler = (id) => {
        setTodos(oldTodo => oldTodo.filter(x => x.id != id))
    }

    const finishTask = (id) => {
        setTodos(oldTodos => {
            let selectedTodo = oldTodos.find(x => x.id === id);
            let toggledTodo = { ...selectedTodo, isFinish: !selectedTodo.isFinish };
            let restTodo = oldTodos.filter(x => x.id !== id);

            return [...restTodo, toggledTodo];
        })
    }

    return (
        <>
            <input type='text' name='todo' onBlur={addTodo} />
            <ul>
                {todos.map(x =>
                    <TodoItem
                        key={x.id}
                        todo={x}
                        onDelete={deleteHandler}
                        onClick={finishTask}
                    />
                )}
            </ul>
        </>
    );
}