import React from 'react';
import uniqid from 'uniqid';
import TodoItem from './TodoItem';

export default function ToDoList() {
    const [todos, setTodos] = React.useState([
        { id: uniqid(), text: 'Create react app', isFinish: false },
        { id: uniqid(), text: 'Clean room', isFinish: false },
        { id: uniqid(), text: 'Study for test', isFinish: false }
    ]);

    const finishTask = (id) => {
        setTodos(oldTodos =>
            oldTodos.map(todo =>
                todo.id === id ? { ...todo, isFinish: !todo.isFinish } : todo
            )
        );
    }

    return (
        <>
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
