import { useEffect, useState } from "react";
import { getCats } from "../services/getCats";

export default function Cats() {
    const [cats, setCats] = useState([]);

    useEffect(() => {
        getCats()
            .then(res => {
                setCats(res);
            })
    }, [])
    return (
        <>
        <h1>Cats page</h1>
        {
            cats.map(x => <h2>{x.name}</h2>)
        }
        </>
    );
}