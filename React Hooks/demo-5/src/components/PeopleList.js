import useFetch from "../hooks/useFetch";

export default function PeopleList() {
    const url = 'https://swapi.dev/api/people';
    let people = useFetch(url);

    return (
        <ul>
            {people.map(x => <li key={x.name}>{x.name}</li>)}
        </ul>
    );
}