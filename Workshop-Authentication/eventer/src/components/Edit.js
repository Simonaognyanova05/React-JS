import { edit } from "../services/edit";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Edit() {
    let { user } = useContext(AuthContext);
    let { eventId } = useParams();
    let navigate = useNavigate();

    const editHandler = (e) => {
        e.preventDefault();

        let formData = new FormData(e.currentTarget);
        let { name, imageUrl, category, description, date } = Object.fromEntries(formData);

        edit(name, imageUrl, category, description, date, eventId, user.accessToken)
            .then(() => {
                navigate('/dashboard');
            })
    }
    return (
        <section id="edit">
            <div className="form">
                <h2>Edit Event</h2>
                <form className="edit-form" onSubmit={editHandler}>
                    <input type="text" name="name" id="name" placeholder="Event" />
                    <input type="text" name="imageUrl" id="event-image" placeholder="Event Image" />
                    <input type="text" name="category" id="event-category" placeholder="Category" />


                    <textarea id="event-description" name="description" placeholder="Description" rows="5" cols="50"></textarea>

                    <label htmlFor="date-and-time">Event Time:</label>
                    <input type="text" name="date" id="date" placeholder="When?" />

                    <button type="submit">Edit</button>
                </form>
            </div>
        </section>
    );
}