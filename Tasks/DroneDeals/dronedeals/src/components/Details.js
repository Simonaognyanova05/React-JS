import { useEffect, useState } from "react";
import { getDetails } from "../services/getDetails";
import { Link, useParams } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default function Details() {
    const [drone, setDrone] = useState([]);
    const { user } = useAuth();
    const { droneId } = useParams();

    useEffect(() => {
        getDetails(droneId)
            .then(res => {
                setDrone(res);
            })
    }, [drone]);

    const buttons = (
        <div class="buttons">
            <Link to={`/data/edit/${droneId}`} id="edit-btn">Edit</Link>
            <Link to={`/data/delete/${droneId}`} id="delete-btn">Delete</Link>
        </div>
    );
    return (
        <section id="details">
            <div id="details-wrapper">
                <div>
                    <img id="details-img" src={drone.imageUrl} alt="example1" />
                    <p id="details-model">{drone.model}</p>
                </div>
                <div id="info-wrapper">
                    <div id="details-description">
                        <p class="details-price">Price: €{drone.price}</p>
                        <p class="details-condition">Condition: {drone.condition}</p>
                        <p class="details-weight">Weight: {drone.weight}g</p>
                        <p class="drone-description">
                            {drone.description}
                        </p>
                        <p class="phone-number">Phone: {drone.phone}</p>
                    </div>
                    {
                        drone.ownerId == user._id
                            ? buttons
                            : ''
                    }
                </div>
            </div>
        </section>
    );
}