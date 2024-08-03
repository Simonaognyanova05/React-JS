import { getDetails } from "../services/getDetails";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAuth } from "../contexts/AuthContext";


const ownerButtons = (
    <div id="action-buttons">
        <a href="" id="edit-btn">Edit</a>
        <a href="" id="delete-btn">Delete</a>
    </div>
)

export default function Details() {

    let [details, setDetails] = useState([]);
    const { fruitId } = useParams();
    const { user } = useAuth();


    useEffect(() => {
        getDetails(fruitId)
            .then(res => {
                setDetails(res);
            })
    }, [])
    return (
        <section id="details">
            <div id="details-wrapper">
                <img id="details-img" src={details.imageUrl} alt="example1" />
                <p id="details-title">{details.name}</p>
                <div id="info-wrapper">
                    <div id="details-description">
                        <p>
                            {details.description}
                        </p>
                        <p id="nutrition">Nutrition</p>
                        <p id="details-nutrition">
                            {details.nutrition}
                        </p>
                    </div>

                    {
                        details._ownerId == user._id
                            ? ownerButtons
                            : ''
                    }

                </div>
            </div>
        </section>
    );
}