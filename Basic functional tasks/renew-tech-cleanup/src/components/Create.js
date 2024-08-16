import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { createSolution } from '../services/createSolution';

export default function Create() {
    const navigate = useNavigate();
    const { user } = useAuth();

    const createHandler = async (e) => {
        e.preventDefault();

        let formData = new FormData(e.currentTarget);
        let { type, imageUrl, description, learnMore } = Object.fromEntries(formData);

        let result = await createSolution(type, imageUrl, description, learnMore, user._id);

        if (result.status === 200) {
            navigate('/solutions');
        };
    }
    return (
        <section id="create">
            <div className="form">
                <img className="border" src="./images/border.png" alt="" />
                <h2>Add Solution</h2>
                <form className="create-form" onSubmit={createHandler}>
                    <input type="text" name="type" id="type" placeholder="Solution Type" />
                    <input type="text" name="imageUrl" id="image-url" placeholder="Image URL" />
                    <textarea id="description" name="description" placeholder="Description" rows="2" cols="10"></textarea>
                    <textarea id="more-info" name="learnMore" placeholder="more Info" rows="2" cols="10"></textarea>
                    <button type="submit">Add Solution</button>
                </form>
            </div>
        </section>
    );
}