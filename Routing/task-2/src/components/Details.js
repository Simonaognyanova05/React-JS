import { useEffect, useState } from "react";
import { getDetails } from '../services/getDetails'

export default function Details({
    match,
    history
}) {

    let [detail, setDetail] = useState([]);

    useEffect(() => {
        getDetails(match.params.gameId)
            .then(result => {
                setDetail(result);
            })
    }, [])


    return (
        <p>{detail.title}</p>
    );
}