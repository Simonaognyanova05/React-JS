import { Link, useParams, useNavigate } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { getDetails } from "../services/getDetails";
import { AuthContext } from "../contexts/AuthContext";
import { removeSolution } from "../services/removeSolution";

export default function Details() {
    let navigate = useNavigate('/');
    let { solutionId } = useParams();
    let [details, setDetails] = useState([]);
    let { user } = useContext(AuthContext);

    useEffect(() => {
        getDetails(solutionId)
            .then(res => {
                setDetails(res);
            });
    }, []);

    const deleteHadnler = (e) => {
        e.preventDefault();

        removeSolution(solutionId, user.accessToken);
        navigate('/solutions')
    }

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
                            ? (
                                <>
                                    <Link to={`/edit/${details._id}`} id="edit-btn">Edit</Link>
                                    <Link to="/delete" id="delete-btn" onClick={deleteHadnler}>Delete</Link>
                                </>
                            )
                            : <Link to="#" id="like-btn">Like</Link>
                        }
                    </div>
                </div>
            </div>
        </section>
    );
}

