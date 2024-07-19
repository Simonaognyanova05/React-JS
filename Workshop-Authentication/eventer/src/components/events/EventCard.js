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
            <a className="details-btn" href="">Details</a>
        </div>
    );
}