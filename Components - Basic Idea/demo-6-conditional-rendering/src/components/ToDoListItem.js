function ToDoListItem(props) {
    // if condition

    let color = 'black';
    if (props.children > 0) {
        color = 'red'
    }
    return <li style={{ color }}>{props.children}</li>
}

export default ToDoListItem;