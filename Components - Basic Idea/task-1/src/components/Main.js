import React from 'react';
import ListItem from "./items/ListItem";


export default function Main() {
    // basic array
    // let nameState = React.useState(['Simona', 'Nadeto', 'Ivana', 'Dimeto']);

    //advanced array
    let nameState = React.useState([{ name: 'Simona', years: 19 }, { name: 'Nadeto', years: 18 }, { name: 'Ivana', years: 19 }]);

    let [name, setNames] = nameState;
    return (
        <main>
            <ul>
                {name.map(x => <ListItem>{x.name} - {x.years}</ListItem>)}
            </ul>
        </main>
    );
}