import React from 'react'
import { useState } from 'react';
import { useNavigate,Link} from 'react-router-dom';
import { useUserAuth } from '../context/userAuthContext';

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
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" autoComplete="off" placeholder='Email giriniz' name='text' value={email} onChange={e =>setEmail(e.target.value)}/>
            <input type="password" autoComplete="off" placeholder='Şifre giriniz'  name="password" value={password} onChange={e =>setPassword(e.target.value)}/>
            <button disabled = {!email || !password}> Kayıt ol</button>
        </form>
        <div>Alerady have an acount ?<Link to="/login">Log In</Link>  </div>
    </div>
  )
}

export default Register