import useFetch from "../hooks/useFetch";

export default function CarsList() {
    const url = 'http://localhost:3030/jsonstore/myCars';
    let cars = useFetch(url);

    return (
        <ul>
            {cars.map(x => <li key={x._id}>{x.model}</li>)}
        </ul>
    );
}