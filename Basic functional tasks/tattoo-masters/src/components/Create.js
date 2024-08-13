import { useNavigate } from 'react-router-dom';
import { createTattoo } from '../services/createTattoo';

export default function Create() {
    const navigate = useNavigate();

    const createHandler = async (e) => {
        e.preventDefault();

        let formData = new FormData(e.currentTarget);
        let { type, imageUrl, description, userType } = Object.fromEntries(formData);

        let result = await createTattoo(type, imageUrl, description, userType);

        if (result.status === 200) {
            navigate('/collection');
        }
    }
    return (
        <section id="create">
            <div className="form">
                <h2>Add tattoo</h2>
                <form className="create-form" onSubmit={createHandler}>
                    <input type="text" name="type" id="type" placeholder="Tattoo Type" />
                    <input type="text" name="imageUrl" id="image-url" placeholder="Image URL" />
                    <textarea id="description" name="description" placeholder="Description" rows="2" cols="10"></textarea>
                    <select id="user-type" name="userType">
                        <option value="" disabled selected>Select your role</option>
                        <option value="Tattoo Artist">Tattoo Artist</option>
                        <option value="Tattoo Enthusiast">Tattoo Enthusiast</option>
                        <option value="First Time in Tattoo">
                            First Time in Tattoo
                        </option>
                        <option value="Tattoo Collector">Tattoo Collector</option>
                    </select>
                    <button type="submit">Add tattoo</button>
                </form>
            </div>
        </section>
    );
}