import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import { login } from "../services/login";

export default function Login() {
    let navigate = useNavigate();
    let { onLogin } = useContext(AuthContext);

    const submitHandler = (e) => {
        e.preventDefault();

        let formData = new FormData(e.currentTarget);
        let { email, password } = Object.fromEntries(formData);

        login(email, password)
            .then(res => {
                onLogin(res);
                navigate('/');
            })
    }
    return (
        <form onSubmit={submitHandler}>
            <input type="text" name="email" id="email" placeholder="Email..." />
            <input type="password" name="password" id="password" placeholder="Password..." />
            <input type="submit" value="Login" />
        </form>
    );
}