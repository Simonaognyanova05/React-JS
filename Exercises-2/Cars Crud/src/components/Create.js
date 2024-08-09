import { createCars } from "../services/createCars";
import { useNavigate } from "react-router-dom";

export default function Create() {
    const naviate = useNavigate();

    const createHandler = (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const { brand, model, year } = Object.fromEntries(formData);

        createCars(brand, model, year)
            .then(res => {
                naviate('/cars');
            })
    }
    return (
        <>
            <h1>Create cars</h1>

            <form onSubmit={createHandler}>
                <input type="text" name="brand" placeholder="Brand" />
                <input type="text" name="model" placeholder="Model" />
                <input type="text" name="year" placeholder="Year" />
                <input type="submit" value='Create' />
            </form>
        </>
    );
}