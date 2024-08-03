import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getDetails } from '../services/getDetails';


export default function Details() {
    const { productId } = useParams();
    let [details, setDetails] = useState([]);

    useEffect(() => {
        getDetails(productId)
            .then(res => {
                setDetails(res);
            })
    }, [])

    return (
        <section id="details">
            <div id="details-wrapper">
                <img id="details-img" src={details.imageUrl} alt="example1" />
                <p id="details-title">{details.name}</p>
                <p id="details-category">
                    Category: <span id="categories">{details.category}</span>
                </p>
                <p id="details-price">
                    Price: <span id="price-number">{details.price}</span>$
                </p>
                <div id="info-wrapper">
                    <div id="details-description">
                        <h4>Bought: <span id="buys">0</span> times.</h4>
                        <span>{details.description}</span>
                    </div>
                </div>

                <div id="action-buttons">
                    <Link to={`/edit/${details._id}`} id="edit-btn">Edit</Link>
                    <Link to={`/delete/${details._id}`} id="delete-btn">Delete</Link>
                </div>
            </div>
        </section>
    );
}