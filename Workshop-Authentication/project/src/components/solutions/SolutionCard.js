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
                <a className="details-btn" href="/details">Learn More</a>
            </div>
        </div>
    );
}