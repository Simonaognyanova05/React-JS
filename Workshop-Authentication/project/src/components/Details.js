import { useParams } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { getDetails } from "../services/getDetails";
import { AuthContext } from "../contexts/AuthContext";


export default function Details() {
    let { user } = useContext(AuthContext);
    let { solutionId } = useParams();
    let [details, setDetails] = useState([]);

    useEffect(() => {
        getDetails(solutionId)
            .then(res => {
                console.log(res);
                setDetails(res);
            })
    }, [])

    return (
        <section id="details">
            <div id="details-wrapper">
                <img id="details-img" src={details.imageUrl} alt="example1" />
                <div>
                    <p id="details-type">{details.type}</p>
                    <div id="info-wrapper">
                        <div id="details-description">
                            <p id="description">
                                {details.description}
                            </p>
                            <p id="more-info">
                                {details.learnMore}
                            </p>
                        </div>
                    </div>
                    <h3>Like Solution:<span id="like">0</span></h3>

                    <div id="action-buttons">
                        {user._id === details._ownerId
                            ?
                            <>
                                <a href="#" id="edit-btn">Edit</a>
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