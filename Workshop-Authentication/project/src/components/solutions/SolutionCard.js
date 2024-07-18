export default function SolutionCard({
    value
}) {

    return (
        <div class="solution">
            <img src={value.imageUrl} alt="example3" />
            <div class="solution-info">
                <h3 class="type">{value.type}</h3>
                <p class="description">
                    {value.description}
                </p>
                <a class="details-btn" href="/details">Learn More</a>
            </div>
        </div>
    );
}