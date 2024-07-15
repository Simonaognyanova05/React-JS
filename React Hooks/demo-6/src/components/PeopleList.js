import { useState } from 'react';
import useFetch from "../hooks/useFetch";

export default function PeopleList() {
    let [url, setUrl] = useState('https://swapi.dev/api/people')
    let people = useFetch(url);

    const changeUrl = (e) => {
        e.preventDefault();

        setUrl('https://swapi.dev/api/planets');
    }

    return (
        <>
            <ul>
                {people.map(x => <li key={x.name}>{x.name}</li>)}
            </ul>

            <button onClick={changeUrl}>Load planets</button>
        </>
    );
}