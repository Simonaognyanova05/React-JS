import { isAuth } from "../hoc/isAuth";

function Catalog({
    user
}) {
    let dogs = ['Buki', 'Sirius', 'Foucs'];

    return (
        <>
        <h1>{user.email}</h1>
        <ul>
            {dogs.map(x => <li>{x}</li>)}
        </ul>
        </>
    );
}

export default isAuth(Catalog);