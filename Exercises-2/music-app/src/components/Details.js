import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { getDetails } from '../services/getDetails';

export default function Details() {
    const [details, setDetails] = useState([]);
    const { albumId } = useParams();
    const { user } = useAuth();

    useEffect(() => {
        getDetails(albumId)
            .then(res => {
                setDetails(res);
            })
    }, [details]);
    return (
        <section id="detailsPage">
            <div className="wrapper">
                <div className="albumCover">
                    <img src={details.imgUrl} />
                </div>
                <div className="albumInfo">
                    <div className="albumText">

                        <h1>Name: {details.name}</h1>
                        <h3>Artist: {details.artist}</h3>
                        <h4>Genre: {details.genre}</h4>
                        <h4>Price: ${details.price}</h4>
                        <h4>Date: {details.releaseDate}</h4>
                        <p>Description: {details.description}</p>
                    </div>

                    {
                        details.ownerId == user._id
                            ? <div className="actionBtn">
                                <a href={`/edit/${details._id}`} className="edit">Edit</a>
                                <a href="#" className="remove">Delete</a>
                            </div>
                            : ''
                    }

                </div>
            </div>
        </section>
    );
}