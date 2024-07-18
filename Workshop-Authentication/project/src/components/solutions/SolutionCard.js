import { Link } from "react-router-dom";

export default function SolutionCard({
    value
}) {

    return (
        <div className="solution">
            <img src={value.imageUrl} alt="example3" />
            <div className="solution-info">
                <h3 className="type">{value.type}</h3>
                <p className="description">
                    {value.description}
                </p>
                <Link className="details-btn" to={`/details/${value._id}`}>Learn More</Link>
            </div>
        </div>
    );
}