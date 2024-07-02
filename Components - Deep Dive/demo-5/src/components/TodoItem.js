import React from 'react';
import './TodoItem.css';

export default function TodoItem(props) {
    return (
        <li onClick={() => props.onClick(props.todo.id)} className={props.todo.isFinish ? 'test' : ''}>
            {props.todo.text}
        </li>
    );
}
