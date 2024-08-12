import { useParams, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { updateAlbum } from '../services/updateAlbum';

export default function Edit() {
    const navigate = useNavigate();
    const { user } = useAuth();
    const { albumId } = useParams();

    const updateHandler = async (e) => {
        e.preventDefault();

        let formData = new FormData(e.currentTarget);
        let { name, imgUrl, price, releaseDate, artist, genre, description } = Object.fromEntries(formData);

        let result = await updateAlbum(name, imgUrl, price, releaseDate, artist, genre, description, user._id, albumId);

        if (result.status === 200) {
            navigate('/catalog');
        };
    }
    return (
        <section className="editPage">
            <form onSubmit={updateHandler}>
                <fieldset>
                    <legend>Edit Album</legend>

                    <div className="container">
                        <label htmlFor="name" className="vhide">Album name</label>
                        <input id="name" name="name" className="name" type="text" />

                        <label htmlFor="imgUrl" className="vhide">Image Url</label>
                        <input id="imgUrl" name="imgUrl" className="imgUrl" type="text"/>

                        <label htmlFor="price" className="vhide">Price</label>
                        <input id="price" name="price" className="price" type="text"  />

                        <label htmlFor="releaseDate" className="vhide">Release date</label>
                        <input id="releaseDate" name="releaseDate" className="releaseDate" type="text"/>

                        <label htmlFor="artist" className="vhide">Artist</label>
                        <input id="artist" name="artist" className="artist" type="text" />

                        <label htmlFor="genre" className="vhide">Genre</label>
                        <input id="genre" name="genre" className="genre" type="text" />

                        <label htmlFor="description" className="vhide">Description</label>
                        <textarea name="description" className="description" rows="10"
                            cols="10"></textarea>

                        <button className="edit-album" type="submit">Edit Album</button>
                    </div>
                </fieldset>
            </form>
        </section>
    );
}