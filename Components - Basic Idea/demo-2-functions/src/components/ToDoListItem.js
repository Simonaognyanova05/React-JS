function ToDoListItem(props) {
    return (
        <li style={{ color: props.color }}>{props.children}</li>

    );
}

export default ToDoListItem;