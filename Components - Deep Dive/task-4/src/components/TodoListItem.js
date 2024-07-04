import './TodoListItem.css'

export default function TodoListItem(props) {
    return (
        <li onClick={() => props.onFinish(props.todos.id)} className={props.todos.isDone ? 'doneTodo' : ''}>
            {props.todos.text}
            <button onClick={() => props.onDelete(props.todos.id)}>X</button>
        </li>
    );
}