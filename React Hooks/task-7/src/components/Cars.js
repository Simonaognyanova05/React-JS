import useFetch from "../hook/useFetch";

export default function Cars() {
    const url = 'http://localhost:3030/jsonstore/myCars';
    const cars = useFetch(url);

    return (
        <>
            <h1>Cars page</h1>
            <ul>
                {cars.map(x => <li key={x._id}>{x.model} - {x.year}</li>)}
            </ul>
        </>
    );
}