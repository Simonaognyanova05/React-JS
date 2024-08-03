import { register } from "../services/register";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Register() {
    const navigate = useNavigate();
    const { onRegister } = useAuth();

    const registerHandler = (e) => {
        e.preventDefault();

        let formData = new FormData(e.currentTarget);
        let { email, password, rePassword } = Object.fromEntries(formData);

        if (password !== rePassword) {
            throw 'Passwords do not match!'
        };

        register(email, password)
            .then(res => {
                onRegister(res);
                navigate('/');
            })
    }
    return (
        <section id="register">
            <div className="form">
                <h2>Register</h2>
                <form className="register-form" onSubmit={registerHandler}>
                    <input type="text" name="email" id="register-email" placeholder="email" />
                    <input type="password" name="password" id="register-password" placeholder="password" />
                    <input type="password" name="rePassword" id="repeat-password" placeholder="repeat password" />
                    <button type="submit">register</button>
                    <p className="message">Already registered? <a href="#">Login</a></p>
                </form>
            </div>
        </section>
    );
}