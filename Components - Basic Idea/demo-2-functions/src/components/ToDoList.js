import ToDoListItem from "./ToDoListItem";
function ToDoList() {
    return (
        <>
            <h2>Tasks</h2>

            <ul>
                <ToDoListItem>Clean</ToDoListItem>
                <ToDoListItem>Go shopping</ToDoListItem>
                <ToDoListItem>Learn React</ToDoListItem>
                <ToDoListItem>Learn React classes</ToDoListItem>
            </ul>
        </>
    );
}


export default ToDoList;