import { createCats } from "../services/createCats";
import { useNavigate } from 'react-router-dom';

export default function Create() {
    let navigate = useNavigate();

    const createHandler = (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        let { name, age, breed, img, ownerId } = Object.fromEntries(formData);

        createCats(name, age, breed, img, ownerId)
            .then(() => {
                navigate('/cats');
            })
    }
    return (
        <form onSubmit={createHandler}>
            <input type='text' name="name" placeholder='name' />
            <input type='text' name="age" placeholder='age' />
            <input type='text' name="bread" placeholder='bread' />
            <input type='text' name="img" placeholder='img' />
            <input type='text' name="ownerId" placeholder='ownerId' />
            <input type='submit' value='Create' />
        </form>
    );
}