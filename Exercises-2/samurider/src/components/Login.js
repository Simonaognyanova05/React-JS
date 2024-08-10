import { login } from "../services/login";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const navigate = useNavigate();
    const { onLogin } = useAuth();

    const loginHandler = async (e) => {
        e.preventDefault();

        let formData = new FormData(e.currentTarget);
        let { email, password } = Object.fromEntries(formData);

        let res = await login(email, password);

        if (res.status == 200) {
            onLogin(res);
            navigate('/');
        } else {
            throw 'Incorrect data!';
        }
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