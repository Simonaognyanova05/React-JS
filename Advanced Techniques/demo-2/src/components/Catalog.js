import { isAuth } from "../hoc/isAuth";

function Catalog() {
    let dogs = ['Buki', 'Sirius', 'Foucs'];

    return (
        <ul>
            {dogs.map(x => <li>{x}</li>)}
        </ul>
    );
}

export default isAuth(Catalog);