export default function Edit() {
    return (
        <section id="edit">
            <div className="form">
                <h2>Edit Album</h2>
                <form className="edit-form">
                    <input type="text" name="singer" id="album-singer" placeholder="Singer/Band" />
                    <input type="text" name="album" id="album-album" placeholder="Album" />
                    <input type="text" name="imageUrl" id="album-img" placeholder="Image url" />
                    <input type="text" name="release" id="album-release" placeholder="Release date" />
                    <input type="text" name="label" id="album-label" placeholder="Label" />
                    <input type="text" name="sales" id="album-sales" placeholder="Sales" />

                    <button type="submit">post</button>
                </form>
            </div>
        </section>
    );
}