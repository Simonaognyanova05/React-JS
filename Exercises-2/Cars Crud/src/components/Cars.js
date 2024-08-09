import { getCars } from "../services/getCars";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Cars() {
    const navigate = useNavigate();

    const [cars, setCars] = useState([]);

    useEffect(() => {
        getCars()
            .then(res => {
                setCars(res);
            })
    }, [])

    return (
        <>
            <h1>Cars</h1>

            {
                cars.map(x => <p>{x.brand} - {x.model} - {x.year}</p>)
            }

        </>
    );
}