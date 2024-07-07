export default function Search() {
    return (
        <section id="search">
            <div class="form">
                <h4>Search</h4>
                <form class="search-form">
                    <input type="text" name="search" id="search-input" />
                    <button class="button-list">Search</button>
                </form>
            </div>
            <div class="search-result">
                <h2 class="no-avaliable">No result.</h2>
                <div class="car">
                    <img src="./images/pagani.jpg" alt="example1" />
                    <h3 class="model">Pagani Huayrat</h3>
                    <a class="details-btn" href="#">More Info</a>
                </div>
            </div>
        </section>
    )
}