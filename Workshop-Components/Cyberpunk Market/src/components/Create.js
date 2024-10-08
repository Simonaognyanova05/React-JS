export default function Create() {
    return (
        <section id="create">
            <div className="form form-item">
                <h2>Share Your item</h2>
                <form className="create-form">
                    <input type="text" name="item" id="item" placeholder="Item" />
                    <input
                        type="text"
                        name="imageUrl"
                        id="item-image"
                        placeholder="Your item Image URL"
                    />
                    <input
                        type="text"
                        name="price"
                        id="price"
                        placeholder="Price in Euro"
                    />
                    <input
                        type="text"
                        name="availability"
                        id="availability"
                        placeholder="Availability Information"
                    />
                    <input
                        type="text"
                        name="type"
                        id="type"
                        placeholder="Item Type"
                    />
                    <textarea
                        id="description"
                        name="description"
                        placeholder="More About The Item"
                        rows="10"
                        cols="50"
                    ></textarea>
                    <button type="submit">Add</button>
                </form>
            </div>
        </section>
    );
}