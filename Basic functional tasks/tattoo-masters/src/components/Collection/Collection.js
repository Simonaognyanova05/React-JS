import { useState, useEffect } from "react";
import TattooCard from "./TattooCard";
import { getTattoo } from '../../services/getTattoo';

export default function Collection() {
    const [tattoo, setTattoo] = useState([]);

    useEffect(() => {
        getTattoo()
            .then(res => {
                return res.json();
            })
            .then(result => {
                setTattoo(result);
            });
    }, [tattoo])
    return (
        <>
            <h2>Collection</h2>
            <section id="tattoos">
                {
                    tattoo.length > 0
                        ? tattoo.map(x => <TattooCard tatto={x} />)
                        : <h2 id="no-tattoo">Collection is empty, be the first to contribute</h2>
                }

            </section>
        </>
    );
}