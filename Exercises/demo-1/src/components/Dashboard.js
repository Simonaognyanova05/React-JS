import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getAllProducts } from "../services/getAllProducts";

export default function Dashboard() {
    let [products, setProducts] = useState([]);


    useEffect(() => {
        getAllProducts()
            .then(res => {
                setProducts(res);
                console.log(products);
            })
    }, [])
    return (
        <>
            <h2>Products</h2>

            {
                products.length > 0
                    ? products.map(x => (
                        <section id="dashboard">
                            <div className="product">
                                <img src={x.imageUrl} alt="example1" />
                                <p className="title">{x.name}</p>
                                <p><strong>Price:</strong><span className="price">{x.price} </span>$</p>
                                <Link className="details-btn" to={`/details/${x._id}`}>Details</Link>
                            </div>
                        </section>
                    ))
                    : <h2>No products yet.</h2>
            }


        </>
    );
}