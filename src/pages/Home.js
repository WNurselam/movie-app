import React from 'react'
import Input from '../components/Search/Input';
import MovieList from '../components/MovieList/MovieList';
import { useUserAuth } from '../context/userAuthContext';
import { useNavigate,Link } from 'react-router-dom';

const Home = () => {
  const { logOut, user } = useUserAuth();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/login");
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div> 
      <div className='userAuth'>
        {
          user ? 
        <div>
           {user.email} 
      
        <button onClick={handleLogout}>Log out</button>
        </div>
        : <Link to="/login">LOG IN</Link>
        }
        </div>
      <Input/>  
     <MovieList/>
   
     
    </div>
  )
}

export default Home;