import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getDetails } from "../services/getDetails";

export default function Details() {
    const { eventId } = useParams();

    let [event, setEvent] = useState([]);

    useEffect(() => {
        getDetails(eventId)
            .then(res => {
                setEvent(res);
            })
    }, [])
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

                <h3>Going: <span id="go">0</span> times.</h3>

                <div id="action-buttons">
                    <a href="" id="edit-btn">Edit</a>
                    <a href="" id="delete-btn">Delete</a>

                    <a href="" id="go-btn">Going</a>
                </div>
            </div>
        </section>
    );
}