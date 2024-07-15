import { useState, useEffect } from "react";

export default function useFetch(url) {
    let [state, setState] = useState([]);

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(result => {
                setState(Object.values(result));
            })
    }, []);

    return state;
}