import { createCars } from "../services/createCars";

export default function Create() {

    const createHandler = (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const { brand, model, year } = Object.fromEntries(formData);

        createCars(brand, model, year )
        .then(res => {
            console.log(res);
            
        })
    }
    return (
        <>
            <h1>Create page</h1>
            <form onSubmit={createHandler}>
                <input type="text" name="brand" placeholder="Brand" />
                <input type="text" name="model" placeholder="Model" />
                <input type="text" name="year" placeholder="Year" />
                <input type="submit" value='Submit' />

            </form>
        </>
    );
}