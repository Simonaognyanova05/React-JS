export default function Edit() {
    return (
        <section id="edit">
            <div className="form">
                <h2>Edit Fruit</h2>
                <form className="edit-form">
                    <input type="text" name="name" id="name" placeholder="Fruit Name" />
                    <input type="text" name="imageUrl" id="Fruit-image" placeholder="Fruit Image URL" />
                    <textarea id="fruit-description" name="description" placeholder="Description" rows="10" cols="50"></textarea>
                    <textarea id="fruit-nutrition" name="nutrition" placeholder="Nutrition" rows="10" cols="50"></textarea>
                    <button type="submit">post</button>
                </form>
            </div>
        </section>
    );
}