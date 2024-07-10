import { useEffect, useState } from "react";
import { getDetails } from '../services/getDetails';

export default function Details({
    match
}) {
    let [details, setDetails] = useState([]);

    useEffect(() => {
        getDetails(match.params.carId)
            .then(result => {
                setDetails(result);
                console.log(result);
            })
    }, []);


    return (
        <section id="details">
            <div id="details-wrapper">
                <img id="details-img" src="./images/pagani.jpg" alt="example1" />
                <p id="details-title">{details.model}</p>
                <div id="info-wrapper">
                    <div id="details-description">
                        <p className="price">Price: €{details.price}</p>
                        <p className="weight">Weight: {details.weight} kg</p>
                        <p className="top-speed">Top Speed: {details.speed} kph</p>
                        <p id="car-description">{details.about}</p>
                    </div>
                    <div id="action-buttons">
                        <a href="" id="edit-btn">Edit</a>
                        <a href="" id="delete-btn">Delete</a>
                    </div>
                </div>
            </div>
        </section>
    );
}