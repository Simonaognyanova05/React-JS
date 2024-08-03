export default function Dashboard() {
    return (
        <>
            <h2>Fruits</h2>
            <section id="dashboard">
                <div className="fruit">
                    <img src="./images/fruit 1.png" alt="example1" />
                    <h3 className="title">Pineapple</h3>
                    <p className="description">The pineapple is a tropical plant with an edible fruit.
                        It is the most economically significant plant in the family Bromeliaceae.The
                        pineapple is indigenous to South America.
                        Pineapples grow as a small shrub, the individual flowers of the unpollinated plant
                        fuse to form a multiple fruit. The plant is normally propagated from the offset produced
                        at the top of the fruit,or from a side shoot, and typically matures within a year.</p>
                    <a className="details-btn" href="">More Info</a>
                </div>
                <div className="fruit">
                    <img src="./images/fruit 2.png" alt="example1" />
                    <h3 className="title"> Kiwi</h3>
                    <p>Kiwifruit (often shortened to kiwi in North American, British and continental European English)
                        or Chinese gooseberry is the edible berry of several species of woody vines.
                        The most common cultivar group of kiwifruit is oval,
                        about the size of a large hen's egg. It has a thin, fuzzy, fibrous, tart but edible light brown skin
                        and light green or golden flesh with rows of tiny, black, edible seeds. The fruit has a soft
                        texture with a sweet and unique flavour.</p>
                    <a className="details-btn" href="">More Info</a>
                </div><div className="fruit">
                    <img src="./images/fruit 3.png" alt="example1" />
                    <h3 className="title">Banana</h3>
                    <p>A banana is an elongated, edible fruit – botanically a berry, produced by several kinds
                        of large herbaceous flowering plants in the genus Musa.The fruit is variable
                        in size, color, and firmness, but is usually elongated and curved, with soft flesh rich in starch
                        covered with a rind, which may be green, yellow, red, purple, or brown when ripe. The fruits grow
                        upward in clusters near the top of the plant.</p>
                    <a className="details-btn" href="">More Info</a>
                </div>

            </section>
            <h2>No fruit info yet.</h2>
        </>
    );
}