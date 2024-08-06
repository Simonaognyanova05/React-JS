import { getCars } from "../services/getCars";
import { useState, useEffect } from "react";

export default function Cars() {

    const [cars, setCars] = useState([]);

    useEffect(() => {
        getCars()
            .then(res => {
                setCars(res);
            })
    }, []);
    
    return (
        <>
            <h1>Cars</h1>
            {
                cars.map(x => <p>{x.brand} - {x.model} - {x.year}</p>)
            }
        </>
    );
}