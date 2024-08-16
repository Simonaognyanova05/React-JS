import { useParams, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { editSolution } from '../services/editSolution';

export default function Edit() {
    const navigate = useNavigate();
    const { user } = useAuth();
    const { solutionId } = useParams();

    const editHandler = async (e) => {
        e.preventDefault();

        let formData = new FormData(e.currentTarget);
        let { type, imageUrl, description, learnMore } = Object.fromEntries(formData);

        let result = await editSolution(type, imageUrl, description, learnMore, user._id, solutionId);

        if (result.status === 200) {
            navigate('/solutions');
        }
    }
    return (
        <section id="edit">
            <div className="form">
                <img className="border" src="./images/border.png" alt="" />
                <h2>Edit Solution</h2>
                <form className="edit-form" onSubmit={editHandler}>
                    <input type="text" name="type" id="type" placeholder="Solution Type" />
                    <input type="text" name="imageUrl" id="image-url" placeholder="Image URL" />
                    <textarea id="description" name="description" placeholder="Description" rows="2" cols="10"></textarea>
                    <textarea id="more-info" name="learnMore" placeholder="more Info" rows="2" cols="10"></textarea>
                    <button type="submit">Edit</button>
                </form>
            </div>
        </section>
    );
}