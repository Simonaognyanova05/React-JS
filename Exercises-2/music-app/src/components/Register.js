import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { register } from "../services/register";

export default function Register() {
    const navigate = useNavigate();
    const { onRegister } = useAuth();

    const registerHandler = async (e) => {
        e.preventDefault();

        let formData = new FormData(e.currentTarget);
        let { email, password, confPass } = Object.fromEntries(formData);

        if (password !== confPass) {
            alert('Passwords do not match!');
            return;
        }
        if (password.length < 6) {
            alert('Password should be minimum 6 symbols!');
            return;
        }

        let result = await register(email, password);

        if (result.status == 409) {
            alert('User already exist!');
            return;
        };

        const data = await result.json();
        onRegister(data);
        navigate('/');
        return;
    }
    return (
        <section id="registerPage">
            <form onSubmit={registerHandler}>
                <fieldset>
                    <legend>Register</legend>

                    <label htmlFor="email" className="vhide">Email</label>
                    <input id="email" className="email" name="email" type="text" placeholder="Email" />

                    <label htmlFor="password" className="vhide">Password</label>
                    <input id="password" className="password" name="password" type="password" placeholder="Password" />

                    <label htmlFor="conf-pass" className="vhide">Confirm Password:</label>
                    <input id="conf-pass" className="conf-pass" name="confPass" type="password" placeholder="Confirm Password" />

                    <button type="submit" className="register">Register</button>

                    <p className="field">
                        <span>If you already have profile click <a href="#">here</a></span>
                    </p>
                </fieldset>
            </form>
        </section>
    );
}