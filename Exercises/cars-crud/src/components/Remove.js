import { deleteCars } from "../services/deleteCars";
import { useNavigate } from "react-router-dom";

export default function Remove() {
    const navigate = useNavigate();

    const deleteHandler = (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        let { brand, model } = Object.fromEntries(formData);

        deleteCars(brand, model)
            .then(() => {
                navigate('/cars');
            })
    }
    return (
        <>
            <h1>Remove cars</h1>

            <form onSubmit={deleteHandler}>
                <input type="text" name="brand" placeholder="Brand" />
                <input type="text" name="model" placeholder="Model" />
                <input type="submit" value='Remove' />
            </form>
        </>
    );
}