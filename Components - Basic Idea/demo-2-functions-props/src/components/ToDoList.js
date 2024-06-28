import ToDoListItem from "./ToDoListItem";
function ToDoList() {
    return (
        <>
            <h2>Tasks</h2>

            <ul>
                <ToDoListItem color="pink">Clean</ToDoListItem>
                <ToDoListItem color="red">Go shopping</ToDoListItem>
                <ToDoListItem color="green">Learn React</ToDoListItem>
                <ToDoListItem color="blue">Learn React classes</ToDoListItem>
            </ul>
        </>
    );
}


export default ToDoList;