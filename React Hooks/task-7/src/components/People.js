import useFetch from "../hook/useFetch";

export default function People() {
    const url = 'http://localhost:3030/jsonstore/people';

    const people = useFetch(url);

    return (
        <>
            <h1>People page</h1>
            <ul>
                {people.map(x => <li key={x._id}>{x.name} - {x.years}</li>)}
            </ul>
        </>
    );
}