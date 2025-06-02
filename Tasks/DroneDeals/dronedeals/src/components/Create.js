import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { create } from '../services/create';

export default function Create() {
    const navigate = useNavigate();
    const { user } = useAuth();
    const ownerId = user._id;

    const createHandler = (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const { model, imageUrl, price, weight, phone, condition, description } = Object.fromEntries(formData);

        create(model, imageUrl, price, weight, phone, condition, description, ownerId)
            .then(res => {
                console.log("success");
                navigate('/dashboard');
            })
    }
    return (
        <section id="create">
            <div class="form form-item">
                <h2>Add Drone Offer</h2>
                <form class="create-form" onSubmit={createHandler}>
                    <input type="text" name="model" id="model" placeholder="Drone Model" />
                    <input type="text" name="imageUrl" id="imageUrl" placeholder="Image URL" />
                    <input type="number" name="price" id="price" placeholder="Price" />
                    <input type="number" name="weight" id="weight" placeholder="Weight" />
                    <input type="number" name="phone" id="phone" placeholder="Phone Number for Contact" />
                    <input type="text" name="condition" id="condition" placeholder="Condition" />
                    <textarea name="description" id="description" placeholder="Description"></textarea>
                    <button type="submit">Add</button>
                </form>

            </div>
        </section>
    );
}