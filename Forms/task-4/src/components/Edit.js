export default function Edit() {
    return (
        <section id="edit">
            <div className="form form-auto">
                <h2>Edit Your Car</h2>
                <form className="edit-form">
                    <input type="text" name="model" id="model" placeholder="Model" />
                    <input
                        type="text"
                        name="imageUrl"
                        id="car-image"
                        placeholder="Your Car Image URL"
                    />
                    <input
                        type="text"
                        name="price"
                        id="price"
                        placeholder="Price in Euro"
                    />
                    <input
                        type="number"
                        name="weight"
                        id="weight"
                        placeholder="Weight in Kg"
                    />
                    <input
                        type="text"
                        name="speed"
                        id="speed"
                        placeholder="Top Speed in Kmh"
                    />
                    <textarea
                        id="about"
                        name="about"
                        placeholder="More About The Car"
                        rows="10"
                        cols="50"
                    ></textarea>
                    <button type="submit">Edit</button>
                </form>
            </div>
        </section>
    );
}