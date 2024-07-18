import { useEffect, useParams, useContext } from "react";
import { useNavigate } from 'react-router-dom';
import { AuthContext } from "../contexts/AuthContext";
import { editSolution } from "../services/editSolution";

export default function Edit() {
    let navigate = useNavigate();
    let { solutionId } = useParams();
    let { user } = useContext(AuthContext);

    const createHandler = (e) => {
        e.preventDefault();

        let formData = new FormData(e.currentTarget);
        let { type, imageUrl, description, learnMore } = Object.fromEntries(formData);

        editSolution(type, imageUrl, description, learnMore, user.accessToken, solutionId)
            .then(res => {
                console.log(res);
                navigate('/details/:solutionId')
            })
    }
    return (
        <section id="edit">
            <div className="form">
                <img className="border" src="./images/border.png" alt="" />
                <h2>Edit Solution</h2>
                <form className="edit-form" onSubmit={createHandler}>
                    <input type="text" name="type" id="type" placeholder="Solution Type" />
                    <input type="text" name="imageUrl" id="imageUrl" placeholder="Image URL" />
                    <textarea id="description" name="description" placeholder="Description" rows="2" cols="10"></textarea>
                    <textarea id="learnMore" name="learnMore" placeholder="more Info" rows="2" cols="10"></textarea>
                    <button type="submit">Edit</button>
                </form>
            </div>
        </section>
    );
}