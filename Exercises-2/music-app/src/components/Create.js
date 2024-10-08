import { useNavigate } from 'react-router-dom';
import { create } from "../services/create";
import { useAuth } from '../contexts/AuthContext';

export default function Create() {
    const navigate = useNavigate();
    const { user } = useAuth();

    const createHandler = async (e) => {
        e.preventDefault();

        let formData = new FormData(e.currentTarget);
        let { name, imgUrl, price, releaseDate, artist, genre, description } = Object.fromEntries(formData);

        let albumRes = await create(name, imgUrl, price, releaseDate, artist, genre, description, user._id);


        if (albumRes.status === 200) {
            navigate('/catalog');
        };
    }
    return (
        <section className="createPage">
            <form onSubmit={createHandler}>
                <fieldset>
                    <legend>Add Album</legend>

                    <div className="container">
                        <label htmlFor="name" className="vhide">Album name</label>
                        <input id="name" name="name" className="name" type="text" placeholder="Album name" />

                        <label htmlFor="imgUrl" className="vhide">Image Url</label>
                        <input id="imgUrl" name="imgUrl" className="imgUrl" type="text" placeholder="Image Url" />

                        <label htmlFor="price" className="vhide">Price</label>
                        <input id="price" name="price" className="price" type="text" placeholder="Price" />

                        <label htmlFor="releaseDate" className="vhide">Release date</label>
                        <input id="releaseDate" name="releaseDate" className="releaseDate" type="text" placeholder="Release date" />

                        <label htmlFor="artist" className="vhide">Artist</label>
                        <input id="artist" name="artist" className="artist" type="text" placeholder="Artist" />

                        <label htmlFor="genre" className="vhide">Genre</label>
                        <input id="genre" name="genre" className="genre" type="text" placeholder="Genre" />

                        <label htmlFor="description" className="vhide">Description</label>
                        <textarea name="description" className="description" placeholder="Description"></textarea>

                        <button className="add-album" type="submit">Add New Album</button>
                    </div>
                </fieldset>
            </form>
        </section>
    );
}