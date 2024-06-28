function ToDoListItem(props) {
    // if condition

    if (props.children > 0) {
        return <li style={{ color: 'pink' }}>{props.children}</li>
    } else {
        return <li style={{ color: 'blue' }}>{props.children}</li>
    }
}

export default ToDoListItem;