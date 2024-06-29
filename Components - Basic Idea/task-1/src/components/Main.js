import React from 'react';
import ListItem from "./ListItem";


export default function Main() {
    let nameState = React.useState(['Simona', 'Nadeto', 'Ivana', 'Dimeto']);

    let [name, setNames] = nameState;
    return (
        <main>
            <ul>

                {name.map(x => <ListItem>{x}</ListItem>)}
            </ul>
        </main>
    );
}