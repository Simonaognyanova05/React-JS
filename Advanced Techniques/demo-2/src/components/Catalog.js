export default function Catalog(){
    let dogs = ['Buki', 'Sirius', 'Foucs'];

    return (
        <ul>
            {dogs.map(x => <li>{x}</li>)}
        </ul>
    );
}