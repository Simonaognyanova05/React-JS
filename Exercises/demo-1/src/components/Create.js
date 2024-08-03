export default function Create() {
    return (
        <section id="create">
            <div className="form">
                <h2>Add Product</h2>
                <form className="create-form">
                    <input type="text" name="name" id="name" placeholder="Product Name" />
                    <input type="text" name="imageUrl" id="product-image" placeholder="Product Image" />
                    <input type="text" name="category" id="product-category" placeholder="Category" />
                    <textarea id="product-description" name="description" placeholder="Description" rows="5" cols="50"></textarea>

                    <input type="text" name="price" id="product-price" placeholder="Price" />

                    <button type="submit">Add</button>
                </form>
            </div>
        </section>
    );
}