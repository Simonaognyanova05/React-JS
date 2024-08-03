import { useState, useEffect } from 'react';
import { getAllFruits } from '../services/getAllFruits';

const fruitCard = (fruit) => {
    return (<section id="dashboard">
        <div className="fruit">
            <img src={fruit.imageUrl} alt="example1" />
            <h3 className="title">{fruit.name}</h3>
            <p>{fruit.description}</p>
            <a className="details-btn" href="">More Info</a>
        </div>

    </section>)
}
export default function Dashboard() {

    let [fruits, setFruits] = useState([]);

    useEffect(() => {
        getAllFruits()
            .then(res => {
                setFruits(res);
            })
    }, []);



    return (
        <>
            <h2>Fruits</h2>

            {
                fruits.length > 0
                    ? fruits.map(x => fruitCard(x))
                    : <h2>No fruit info yet.</h2>
            }

        </>
    );
}