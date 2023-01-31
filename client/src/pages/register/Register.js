import "./register.css";
import {useRef} from 'react';
import { Link } from "react-router-dom";
import axios from "axios";
import { useHistory } from "react-router";
export default function Register() {

  const username = useRef();
  const email = useRef();
  const password = useRef();
  const passwordAgain = useRef();

  const history = useHistory();
  
  const handleClick =async (e) => {
    e.preventDefault();
    if (passwordAgain.current.value !== password.current.value) {
      passwordAgain.current.setCustomValidity("Passwords don't match!");
    } else {
      const user = {
        username: username.current.value,
        email: email.current.value,
        password: password.current.value,
      };
      try {
        await axios.post("http://localhost:8800/api/auth/register", user);
        history.push("/login");
      } catch (err) {
        console.log(err);
      }
    }
  }  

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Social App</h3>
          <span className="loginDesc">
            Connect with friends and the world around you on Social App.
          </span>
        </div>
        <div className="loginRight">
          <form className="loginBox" onSubmit={handleClick}>
            <input placeholder="Username"  required ref={username} className="loginInput" />
            <input placeholder="Email" type="email" required ref={email} className="loginInput" />
            <input placeholder="Password" type="password" minLength = "6" required ref={password} className="loginInput" />
            <input placeholder="Password Again" type="password" required ref={passwordAgain} className="loginInput" />
            <button className="loginButton" type="submit">Sign Up</button>
            <Link to="/login" style={{ textDecoration: "none" }} className="linkStyle">
                <button className="loginRegisterButton">
                  Log into Account
                </button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}