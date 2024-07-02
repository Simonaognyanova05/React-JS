export default function TodoItem(props){
    return (
        <li>{props.todo.text} <button onClick={() => props.onDelete(props.id)}>X</button></li>
    );
}