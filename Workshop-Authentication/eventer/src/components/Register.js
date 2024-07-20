import { useContext } from "react";
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';
import { register } from "../services/register";

export default function Register() {
  let navigate = useNavigate();
  let { onRegister } = useContext(AuthContext);

  const registerHandler = (e) => {
    e.preventDefault();

    let formData = new FormData(e.currentTarget);
    let { email, password } = Object.fromEntries(formData);

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
          <input type="password" name="re-password" id="repeat-password" placeholder="repeat password" />
          <button type="submit">register</button>
          <p className="message">Already registered? <a href="/login">Login</a></p>
        </form>
      </div>
    </section>
  );
}