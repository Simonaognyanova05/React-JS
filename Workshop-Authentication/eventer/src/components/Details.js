import { useState, useEffect, useContext } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import { getDetails } from "../services/getDetails";
import { remove } from "../services/remove";

export default function Details() {
    let navigate = useNavigate();
    const { eventId } = useParams();
    let { user } = useContext(AuthContext);
    let [event, setEvent] = useState([]);

    useEffect(() => {
        getDetails(eventId)
            .then(res => {
                setEvent(res);
            })
    }, []);

    const deleteHandler = (e) => {
        e.preventDefault();

        remove(eventId, user.accessToken)
            .then(() => {
                navigate('/dashboard');
            })
    };

    const loggedUser = (
        <div id="action-buttons">
            <Link to={`/edit/${event._id}`} id="edit-btn">Edit</Link>
            <Link to={`/delete/${event._id}`} id="delete-btn" onClick={deleteHandler}>Delete</Link>
        </div>
    );

    return (
        <section id="details">
            <div id="details-wrapper">
                <img id="details-img" src={event.imageUrl} alt="example1" />
                <p id="details-title">{event.name}</p>
                <p id="details-category">
                    Category: <span id="categories">{event.category}</span>
                </p>
                <p id="details-date">
                    Date:<span id="date">{event.date}</span></p>
                <div id="info-wrapper">
                    <div id="details-description">
                        <span>{event.description}</span>
                    </div>

                </div>

                {
                    user._id === event._ownerId
                        ? loggedUser
                        : ''
                }

            </div>
        </section>
    );
}