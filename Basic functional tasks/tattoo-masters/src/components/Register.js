import { useNavigate } from 'react-router-dom';
import { useAuth } from "../contexts/AuthContext";
import { register } from '../services/register';

export default function Register() {
    const navigate = useNavigate();
    const { onRegister } = useAuth();

    const registerHandler = async (e) => {
        e.preventDefault();

        let formData = new FormData(e.currentTarget);
        let { email, password, rePassword } = Object.fromEntries(formData);

        if (password.length < 6) {
            alert('Password must be minimum 6 symbols!');
            return;
        };

        if (password !== rePassword) {
            alert('Passwords do not match!');
            return;
        };

        let result = await register(email, password);

        if (result.status === 409) {
            alert('User exist!');
            return;
        };

        let data = await result.json();
        onRegister(data);
        navigate('/');
        return;
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