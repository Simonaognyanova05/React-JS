export default function Create() {
    return (
        <section id="create">
            <h2>Add Motorcycle</h2>
            <div className="form">
                <h2>Add Motorcycle</h2>
                <form className="create-form">
                    <input type="text" name="model" id="model" placeholder="Model"/>
                    <input type="text" name="imageUrl" id="moto-image" placeholder="Moto Image"/>
                    <input type="number" name="year" id="year" placeholder="Year"/>
                    <input type="number" name="mileage" id="mileage" placeholder="mileage"/>
                    <input type="text" name="contact" id="contact" placeholder="contact"/>
                    <textarea id="about" name="about" placeholder="about" rows="10" cols="50"></textarea>
                    <button type="submit">Add Motorcycle</button>
                </form>
            </div>
        </section>
    );
}