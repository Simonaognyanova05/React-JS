export default function TattooCard({tatto}) {
    return (
        <div className="tattoo">
            <img src={tatto.imageUrl} alt="example3" />
            <div className="tattoo-info">
                <h3 className="type">{tatto.type}</h3>
                <span>Uploaded by </span>
                <p className="user-type">{tatto.userType}</p>
                <a className="details-btn" href={`/details/${tatto._id}`}>Learn More</a>
            </div>
        </div>
    );
}