export default function TodoListItem(props){
    return (
        <li>{props.todos.text} <button onClick={() => props.onDelete(props.todos.id)}>X</button></li>
    );
}