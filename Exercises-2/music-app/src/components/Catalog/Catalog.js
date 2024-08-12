import { useEffect, useState } from "react";
import { getAlbums } from "../../services/getAlbums";
import CardBox from "./CardBox";

export default function Catalog() {
    const [albums, setAlbums] = useState([]);

    useEffect(() => {
        getAlbums()
            .then(result => {
                setAlbums(result);
            })
    }, [albums]);

    return (
        <section id="catalogPage">
            <h1>All Albums</h1>

            {
                albums.length > 0
                    ? albums.map(x => <CardBox albums={x} />)
                    : <p>No Albums in Catalog!</p>
            }

        </section>
    );
}