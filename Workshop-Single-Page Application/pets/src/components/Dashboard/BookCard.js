export default function BookCard({
    book
}) {
    return (
        <li className="otherBooks">
            <h3>{book.title}</h3>
            <p>Type: {book.type}</p>
            <p className="img"><img src={book.imageUrl} /></p>
            <a className="button" href="#">Details</a>
        </li>
    );
}