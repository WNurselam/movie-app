import React from 'react'
import { useNavigate,Link } from 'react-router-dom';
import { useState } from 'react';
import { useUserAuth } from '../context/userAuthContext';

const Login = () => {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [error,setError] = useState("");
    const {logIn} = useUserAuth();
    const navigate = useNavigate();
  

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        try {
            await logIn(email,password);
            navigate("/")
        } catch (error) {
            setError(error.message);
        }
       
    }
  return (
    <div>
        {error && <div>Hata</div>}
        <form onSubmit={handleSubmit}>
            <input type="text" autoComplete="off" placeholder='Email giriniz' name='text' value={email} onChange={e =>setEmail(e.target.value)}/>
            <input type="password" autoComplete="off" placeholder='Şifre giriniz'  name="password" value={password} onChange={e =>setPassword(e.target.value)}/>
            <button disabled = {!email || !password}>Giriş Yap</button>
        </form>
        Don't have an account? <Link to="/signup">Sign up</Link>
    </div>
  )
}

export default Login