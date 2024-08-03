import { createFruit } from "../services/createFruit";
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

export default function Create() {
    const navigate = useNavigate();
    const { user } = useAuth();

    const createHandler = (e) => {
        e.preventDefault();

        let formData = new FormData(e.currentTarget);
        let { name, imageUrl, description, nutrition } = Object.fromEntries(formData);

        createFruit(name, imageUrl, description, nutrition, user.accessToken)
            .then(() => {
                navigate('/dashboard');
            })
    }
    return (
        <section id="create">
            <div className="form">
                <h2>Add Fruit</h2>
                <form className="create-form" onSubmit={createHandler}>
                    <input type="text" name="name" id="name" placeholder="Fruit Name" />
                    <input type="text" name="imageUrl" id="Fruit-image" placeholder="Fruit Image" />
                    <textarea id="fruit-description" name="description" placeholder="Description" rows="10" cols="50"></textarea>
                    <textarea id="fruit-nutrition" name="nutrition" placeholder="Nutrition" rows="10" cols="50"></textarea>
                    <button type="submit">Add Fruit</button>
                </form>
            </div>
        </section>
    );
}