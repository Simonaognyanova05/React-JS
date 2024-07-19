import { useContext } from "react";
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';
import { create } from "../services/create";

export default function Create() {
    let navigate = useNavigate();
    let { user } = useContext(AuthContext);

    const createHandler = (e) => {
        e.preventDefault();

        let formData = new FormData(e.currentTarget);
        let { name, imageUrl, category, description, date } = Object.fromEntries(formData);

        create(name, imageUrl, category, description, date, user.accessToken)
            .then(res => {
                navigate('/');
            })
    }
    return (
        <section id="create">
            <div className="form">
                <h2>Add Event</h2>
                <form className="create-form" onSubmit={createHandler}>
                    <input type="text" name="name" id="name" placeholder="Event" />
                    <input type="text" name="imageUrl" id="event-image" placeholder="Event Image URL" />
                    <input type="text" name="category" id="event-category" placeholder="Category" />


                    <textarea id="event-description" name="description" placeholder="Description" rows="5" cols="50"></textarea>

                    <input type="text" name="date" id="date" placeholder="When?" />

                    <button type="submit">Add</button>
                </form>
            </div>
        </section>
    );
}