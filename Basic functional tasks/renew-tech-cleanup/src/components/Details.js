import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { getDetails } from '../services/getDetails';

export default function Details() {
    const { solutionId } = useParams();
    const [solution, setSolution] = useState([]);
    const { user } = useAuth();

    useEffect(() => {
        getDetails(solutionId)
            .then(result => {
                return result.json();
            })
            .then(res => {
                setSolution(res);
            })
    }, [])
    return (
        <section id="details">
            <div id="details-wrapper">
                <img id="details-img" src={solution.imageUrl} alt="example1" />
                <div>
                    <p id="details-type">{solution.type}</p>
                    <div id="info-wrapper">
                        <div id="details-description">
                            <p id="description">
                                {solution.description}
                            </p>
                            <p id="more-info">
                                {solution.learnMore}
                            </p>
                        </div>
                    </div>
                    <h3>Like Solution:<span id="like">0</span></h3>

                    <div id="action-buttons">
                        {
                            user._id === solution.ownerId
                                ? <>
                                    <a href={`/edit/${solution._id}`} id="edit-btn">Edit</a>
                                    <a href="#" id="delete-btn">Delete</a>
                                </>
                                : <a href="#" id="like-btn">Like</a>
                        }
                    </div>
                </div>
            </div>
        </section>
    );
}