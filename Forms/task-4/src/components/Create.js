import { Redirect } from 'react-router-dom';

export default function Create() {
    const createCarHandler = (e) => {
        e.preventDefault();

        let formData = new FormData(e.currentTarget);
        let { model, imageUrl, price, weight, speed, about } = Object.fromEntries(formData);

        fetch('http://localhost:3030/jsonstore/myCars', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ model, imageUrl, price, weight, speed, about })
        })
            .then(res => res.json())

        console.log('submit');
    }
    return (
        <section id="create">
            <div className="form form-auto">
                <h2>Share Your Car</h2>
                <form className="create-form" onSubmit={createCarHandler}>
                    <input type="text" name="model" id="model" placeholder="Model" />
                    <input type="text" name="imageUrl" id="car-image" placeholder="Your Car Image URL" />
                    <input type="text" name="price" id="price" placeholder="Price in Euro" />
                    <input type="number" name="weight" id="weight" placeholder="Weight in Kg" />
                    <input type="text" name="speed" id="speed" placeholder="Top Speed in Kmh" />
                    <textarea id="about" name="about" placeholder="More About The Car" rows="10" cols="50"></textarea>
                    <button type="submit">Add</button>
                </form>
            </div>
        </section>
    );
}