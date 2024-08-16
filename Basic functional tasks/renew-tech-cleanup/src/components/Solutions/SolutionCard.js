export default function SolutionCard({ solution }) {
    return (
        <div className="solution">
            <img src={solution.imageUrl} alt="example3" />
            <div className="solution-info">
                <h3 className="type">{solution.type}</h3>
                <p className="description">
                    {solution.description}
                </p>
                <a className="details-btn" href={`/details/${solution._id}`}>Learn More</a>
            </div>
        </div>
    );
}