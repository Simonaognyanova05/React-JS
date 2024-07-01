import uniqueid from 'uniqid';

export default function ToDoList(){
    const items = [
        {id: 1, text: 'Clean your room'},
        {id: 2, text: 'Learn React'},
        {id: 3, text: 'Go to gym'}
    ];
    return (

        <ul>
            {items.map(x => <li key={x.id}>{x.text}</li>)}
        </ul>
    );
}