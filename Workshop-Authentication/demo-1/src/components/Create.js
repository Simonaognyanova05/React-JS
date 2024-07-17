import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import { createPet } from "../services/createPet";

export default function Create() {
    let navigate = useNavigate();
    let { user } = useContext(AuthContext);

    const createPetHandler = (e) => {
        e.preventDefault();

        let formData = new FormData(e.currentTarget);
        let petInfo = Object.fromEntries(formData);

        createPet(petInfo, user.accessToken)
            .then(res => {
                navigate('/');
            })
    }
    return (
        <form onSubmit={createPetHandler}>
            <div>
                <label htmlFor="type">Type: </label>
                <input type="text" name="type" id="type" />
            </div>
            <div>
                <label htmlFor="breed">Breed: </label>
                <input type="text" name="breed" id="breed" />
            </div>
            <input type="submit" value="Submit" />

        </form>
    );
}