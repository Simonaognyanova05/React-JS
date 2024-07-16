import { useNavigate } from "react-router-dom";
import { login } from "../services/login";

export default function Login({
    onLogin
}) {
    const navigate = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault();

        let formData = new FormData(e.currentTarget);
        let { email, password } = Object.fromEntries(formData);

        login(email, password)
            .then(res => {
                onLogin(res);
                navigate('/');
            })
            .catch(err => {
                console.log(err);
            })
    }
    return (
        <form onSubmit={submitHandler}>
            <div>
                <label htmlFor="email">Email: </label>
                <input type="text" name="email" id="email" />
            </div>

            <div>
                <label htmlFor="password">Password: </label>
                <input type="password" name="password" id="password" />
            </div>
            <input type="submit" name="Login" id="login" />
        </form>
    );
}