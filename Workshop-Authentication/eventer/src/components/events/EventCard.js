import { Link } from "react-router-dom";

export default function EventCard({
    value
}) {
    return (
        <div className="event">
            <img src={value.imageUrl} alt="example1" />
            <p className="title">
                {value.name}
            </p>
            <p className="date">{value.date}</p>
            <Link className="details-btn" to={`/details/${value._id}`}>Details</Link>
        </div>
    );
}