import { useState, useEffect } from 'react';
import { getAllBooks } from '../../services/getAllBooks';
import BookCard from './BookCard';

export default function Dashboard() {
    let [books, setBooks] = useState([]);

    useEffect(() => {
        getAllBooks()
            .then(result => {
                setBooks(result);
                console.log(result);
            })
    }, []);

    return (
        <section id="dashboard-page" className="dashboard">
            <h1>Dashboard</h1>
            <ul className="other-books-list">
                {books.length > 0
                    ? books.map(x => (
                        <BookCard key={x._id} book={x}/>
                    ))
                    : <p className="no-books">No books in database!</p>
                }
            </ul>
        </section>
    );
}