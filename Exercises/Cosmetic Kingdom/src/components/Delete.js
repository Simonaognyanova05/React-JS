import { deleteProduct } from "../services/deleteProduct";
import { useEffect } from "react";
import { useAuth } from "../contexts/AuthContext";
import { useParams, useNavigate } from "react-router-dom";

export default function Delete() {
    let navigate = useNavigate();
    let { productId } = useParams();
    let { user } = useAuth();

    useEffect(() => {
        deleteProduct(productId, user.accessToken)
            .then(() => {
                navigate('/dashboard');
            })
    }, []);

    return null;
}