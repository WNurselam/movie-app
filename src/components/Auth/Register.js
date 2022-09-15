import React from 'react'
import { useState } from 'react';
import { useNavigate,Link} from 'react-router-dom';
import { useUserAuth } from '../../context/userAuthContext';
import './style.scss'

const Register = () => {
    const[email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [error,setError] = useState("");
    const {signUp} = useUserAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        try {
            await signUp(email,password);
            navigate("/login")
        } catch (error) {
            setError(error.message);
        }
       
    }
  return (
    <div className='login-container'>
         <h2>Sıgn Up</h2>
        <form onSubmit={handleSubmit}>
            <div className="user-box">
            <input type="text" autoComplete="off" placeholder='Enter email' name='text' value={email} onChange={e =>setEmail(e.target.value)}/>
            <label>Email</label>
            </div>
            <div className="user-box">
            <input type="password" autoComplete="off" placeholder='Enter password'  name="password" value={password} onChange={e =>setPassword(e.target.value)}/>
            <label>Pasword</label>
            </div>
            <button className="btn-login"  disabled = {!email || !password}> Kayıt ol</button>
        </form>
        <div className="road-sign">Alerady have an acount ? <span><Link to="/login">Log In</Link> </span> </div>
    </div>
  )
}

export default Register;