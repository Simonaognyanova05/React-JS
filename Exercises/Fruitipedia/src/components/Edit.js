import { editFruit } from "../services/editFruit";
import { useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default function Edit() {
    let navigate = useNavigate();
    let {user} = useAuth();
    let {fruitId} = useParams();


    const editHandler = (e) => {
        e.preventDefault();

        let formData = new FormData(e.currentTarget);
        let {name, imageUrl, description, nutrition} = Object.fromEntries(formData);

        editFruit(name, imageUrl, description, nutrition, fruitId, user.accessToken)
        .then(() => {
            navigate('/dashboard');
        })
    }
    return (
        <section id="edit">
            <div className="form">
                <h2>Edit Fruit</h2>
                <form className="edit-form" onSubmit={editHandler}>
                    <input type="text" name="name" id="name" placeholder="Fruit Name" />
                    <input type="text" name="imageUrl" id="Fruit-image" placeholder="Fruit Image URL" />
                    <textarea id="fruit-description" name="description" placeholder="Description" rows="10" cols="50"></textarea>
                    <textarea id="fruit-nutrition" name="nutrition" placeholder="Nutrition" rows="10" cols="50"></textarea>
                    <button type="submit">post</button>
                </form>
            </div>
        </section>
    );
}