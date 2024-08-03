export default function Create() {
    return (
        <section id="create">
            <div className="form">
                <h2>Add Fruit</h2>
                <form className="create-form">
                    <input type="text" name="name" id="name" placeholder="Fruit Name" />
                    <input type="text" name="imageUrl" id="Fruit-image" placeholder="Fruit Image" />
                    <textarea id="fruit-description" name="description" placeholder="Description" rows="10" cols="50"></textarea>
                    <textarea id="fruit-nutrition" name="nutrition" placeholder="Nutrition" rows="10" cols="50"></textarea>
                    <button type="submit">Add Fruit</button>
                </form>
            </div>
        </section>
    );
}