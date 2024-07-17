import { useState, useEffect } from "react";
import { getAllPets } from "../../services/getAllPets";
import PetCard from "./PetCard";

export default function Pets() {
    let [pets, setPets] = useState([]);

    useEffect(() => {
        getAllPets()
            .then(res => {
                setPets(res);
            })
    }, [])
    return (
        <>
            {pets.map(x => [
                <PetCard key={x._id} pets={x}/>
            ])}
        </>
    );
}