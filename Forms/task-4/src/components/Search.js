export default function Search() {
    return (
        <section id="search">
            <div className="form">
                <h4>Search</h4>
                <form className="search-form">
                    <input type="text" name="search" id="search-input" />
                    <button className="button-list">Search</button>
                </form>
            </div>
            <div className="search-result">
                <h2 className="no-avaliable">No result.</h2>
                <div className="car">
                    <img src="./images/pagani.jpg" alt="example1" />
                    <h3 className="model">Pagani Huayrat</h3>
                    <a className="details-btn" href="#">More Info</a>
                </div>
            </div>
        </section>
    );
}