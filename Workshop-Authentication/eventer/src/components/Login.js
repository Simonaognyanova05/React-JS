import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { login } from "../services/login";

export default function Login() {
    let navigate = useNavigate();
    let { onLogin } = useContext(AuthContext);

    const loginHandler = (e) => {
        e.preventDefault();

        let formData = new FormData(e.currentTarget);
        let { email, password } = Object.fromEntries(formData);

        login(email, password)
            .then(res => {
                onLogin(res)
                navigate('/');
            })
    }
    return (
        <section id="login">
            <div className="form">
                <h2>Login</h2>
                <form className="login-form" onSubmit={loginHandler}>
                    <input type="text" name="email" id="email" placeholder="email" />
                    <input type="password" name="password" id="password" placeholder="password" />
                    <button type="submit">login</button>
                    <p className="message">
                        Not registered? <a href="#">Create an account</a>
                    </p>
                </form>
            </div>
        </section>
    );
}