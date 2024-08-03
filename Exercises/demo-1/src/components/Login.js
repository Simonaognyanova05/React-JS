import { useNavigate } from 'react-router-dom';
import { login } from "../services/login";
import { useAuth } from '../contexts/AuthContext';

export default function Login() {
    let navigate = useNavigate();
    const { onLogin } = useAuth();

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
        <section id="login">
            <div className="form">
                <h2>Login</h2>
                <form className="login-form" onSubmit={submitHandler}>
                    <input type="text" name="email" id="email" placeholder="email" />
                    <input type="password" name="password" id="password" placeholder="password" />
                    <button type="submit">login</button>
                    <p className="message">
                        Not registered? <a href="/register">Create an account</a>
                    </p>
                </form>
            </div>
        </section>
    );
}