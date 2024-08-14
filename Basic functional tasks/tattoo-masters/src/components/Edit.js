import { useNavigate, useParams } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

import { editTattoo } from '../services/editTattoo';

export default function Edit() {
    const navigate = useNavigate();
    const { user } = useAuth();
    const { tattooId } = useParams();



    const editHandler = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const { type, imageUrl, description, userType } = Object.fromEntries(formData);
        const result = await editTattoo(type, imageUrl, description, userType, user._id, tattooId);

        if (result.status === 200) {
            navigate('/collection');
            return;
        }
    }

    return (
        <section id="edit">
            <div className="form">
                <h2>Edit tattoo</h2>
                <form className="edit-form" onSubmit={editHandler}>
                    <input type="text" name="type" id="type" placeholder="Tattoo Type" />
                    <input type="text" name="image-url" id="image-url" placeholder="Image URL" />
                    <textarea id="description" name="description" placeholder="Description" rows="2" cols="10"></textarea>
                    <select id="user-type" name="user-type">
                        <option value="" disabled selected>Select your role</option>
                        <option value="Tattoo Artist">Tattoo Artist</option>
                        <option value="Tattoo Enthusiast">Tattoo Enthusiast</option>
                        <option value="First Time in Tattoo">
                            First Time in Tattoo
                        </option>
                        <option value="Tattoo Collector">Tattoo Collector</option>
                    </select>
                    <button type="submit">Edit</button>
                </form>
            </div>
        </section>
    );
}