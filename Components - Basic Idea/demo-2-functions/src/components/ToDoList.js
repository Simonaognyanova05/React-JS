import ToDoListItem from "./ToDoListItem";
function ToDoList() {
    return (
        <>
            <h2>Tasks</h2>

            <ul>
                <ToDoListItem text="Clean"/>
                <li>Go shopping</li>
                <li>Learn React</li>
                <li>Learn React classes</li>
            </ul>
        </>
    );
}


export default ToDoList;