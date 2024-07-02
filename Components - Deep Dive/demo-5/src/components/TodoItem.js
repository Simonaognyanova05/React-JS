import './TodoItem.css'

export default function TodoItem(props) {
    return (
        <li onClick={() => props.onClick(props.todo.id)} className={props.todo.isFinish ? 'todoItemFinished' : ''}>
            {props.todo.text}
            
            <button onClick={() => props.onDelete(props.todo.id)}>X</button>
        </li>
    );
}