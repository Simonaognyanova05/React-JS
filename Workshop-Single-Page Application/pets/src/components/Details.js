import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getDetails } from '../services/getDetails';

export default function Details() {
    let { bookId } = useParams();
    let [book, bookState] = useState([]);

    useEffect(() => {
        getDetails(bookId)
            .then(result => {
                bookState(result);
                console.log(result);
            })
    }, [])

    return (<section id="details-page" className="details">
        <div className="book-information">
            <h3>{book.title}</h3>
            <p className="type">Type: {book.type}</p>
            <p className="img"><img src={book.imageUrl} /></p>
            <div className="actions">
                <a className="button" href="/edit">Edit</a>
                <a className="button" href="/delete">Delete</a>

                <a className="button" href="#">Like</a>

                <div className="likes">
                    <img className="hearts" src="/images/heart.png" />
                    <span id="total-likes">Likes: 0</span>
                </div>
            </div>
        </div>
        <div className="book-description">
            <h3>Description:</h3>
            <p>{book.description}</p>
        </div>
    </section>
    )
}