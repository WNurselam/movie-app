import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import { useUserAuth } from "../../context/userAuthContext";
import { Icon } from 'react-icons-kit'
import {eye} from 'react-icons-kit/feather/eye'
import {eyeOff} from 'react-icons-kit/feather/eyeOff'
import "./style.scss";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [type, setType]=useState('password');
  const [icon, setIcon]=useState(eyeOff);
  const { logIn } = useUserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await logIn(email, password);
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };

  const handleToggle=()=>{    
    if(type==='password'){
      setIcon(eye);      
      setType('text');
    }
    else{
      setIcon(eyeOff);     
      setType('password');
    }
  }

  return (
    <div className="login-wrapper">
      <div className="login-container">
      <h2>Log In</h2>
      {error ? (
        <div className="error-message">Incorrect username or password !</div>
      ):""}

      <form onSubmit={handleSubmit}>
        <div className="user-box">
          <input
            className="email"
            type="text"
            autoComplete="off"
            placeholder="Enter email..."
            name="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Email</label>
        </div>
        <div className="user-box">
          <input
            className="password"
            type={type}
            autoComplete="off"
            placeholder="Enter password..."
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <span onClick={handleToggle}><Icon icon={icon} size={20}/></span>
          <label>Password</label>
        </div>
        <button className="btn-login" disabled={!email || !password}>
          Log In
        </button>
      </form>
      <div className="road-sign">
        Don't have an account?{" "}
        <span>
          <Link to="/signup">Sign up</Link>
        </span>
      </div>
    </div>
    </div>
  );
};

export default Login;
