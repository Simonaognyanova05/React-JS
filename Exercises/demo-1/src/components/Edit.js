import { editProduct } from "../services/editProduct";
import { useParams, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default function Edit() {
    const navigate = useNavigate();
    const { productId } = useParams();
    const { user } = useAuth();

    const editHandler = (e) => {
        e.preventDefault();

        let formData = new FormData(e.currentTarget);
        let { name, imageUrl, category, description, price } = Object.fromEntries(formData);

        editProduct(name, imageUrl, category, description, price, productId, user.accessToken)
            .then(res => {
                navigate('/dashboard');
            })
    }
    return (
        <section id="edit">
            <div className="form">
                <h2>Edit Product</h2>
                <form className="edit-form" onSubmit={editHandler}>
                    <input type="text" name="name" id="name" placeholder="Product Name" />
                    <input type="text" name="imageUrl" id="product-image" placeholder="Product Image" />
                    <input type="text" name="category" id="product-category" placeholder="Category" />
                    <textarea id="product-description" name="description" placeholder="Description" rows="5" cols="50"></textarea>

                    <input type="text" name="price" id="product-price" placeholder="Price" />
                    <button type="submit">post</button>
                </form>
            </div>
        </section>
    );
}