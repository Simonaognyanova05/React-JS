import { useState, useEffect } from 'react';
import { getAllCars } from '../../services/getAllCars';
import CatalogCard from './CatalogCard';

export default function Catalog() {
    let [cars, setCars] = useState([]);

    useEffect(() => {
        getAllCars()
            .then(result => {
                setCars(Object.values(result));
                console.log(result);
            })
    }, [])
    return (
        <>
            <h3 className="heading">Our Cars</h3>
            <section id="dashboard">

                {cars.length > 0
                    ? cars.map(x => (
                        <CatalogCard key={x._id} car={x} />
                    ))
                    : <h3 className="nothing">Nothing to see yet</h3>
                }
            </section>

        </>
    );
}