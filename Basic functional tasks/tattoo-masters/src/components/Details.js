import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { getDetails } from '../services/getDetails';


export default function Details() {
    const { tattooId } = useParams();
    const [tattoo, setTattoo] = useState([]);
    const { user } = useAuth();

    useEffect(() => {
        getDetails(tattooId)
            .then(res => {
                return res.json();
            })
            .then(result => {
                setTattoo(result);
            })
    }, [tattoo]);


    return (
        <section id="details">
            <div id="details-wrapper">
                <img id="details-img" src={tattoo.imageUrl} alt="example1" />
                <div>
                    <div id="info-wrapper">
                        <p id="details-type">{tattoo.type}</p>
                        <div id="details-description">
                            <p id="user-type">{tattoo.userType}</p>
                            <p id="description">
                                {tattoo.description}
                            </p>
                        </div>
                        <div id="action-buttons">
                            {
                                user._id === tattoo.ownerId
                                    ? <>
                                        <a href="#" id="edit-btn">Edit</a>
                                        <a href="#" id="delete-btn">Delete</a>
                                    </>
                                    : <a href="#" id="like-btn">Like</a>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}