import { updateCars } from "../services/updateCars";
import { useNavigate } from "react-router-dom";

export default function Update() {
    const navigate = useNavigate();

    const updateHandler = (e) => {
        e.preventDefault();

        let formData = new FormData(e.currentTarget);
        let {brand, model, year} = Object.fromEntries(formData);

        updateCars(brand, model, year)
        .then(() => {
            navigate('/cars')
        })
    }
    return (
        <>
            <h1>Update cars</h1>

            <form onSubmit={updateHandler}>
                <input type="text" name="brand" placeholder="Brand" />
                <input type="text" name="model" placeholder="Model" />
                <input type="text" name="year" placeholder="Year" />
                <input type="submit" value='Update' />
            </form>
        </>
    );
}