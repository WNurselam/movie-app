import React from 'react'
import Input from '../components/Search/Input';
import MovieList from '../components/MovieList/MovieList';
import { useUserAuth } from '../context/userAuthContext';
import { useNavigate } from 'react-router';

const Home = () => {
  const { logOut, user } = useUserAuth();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div> 
      <div className='userAuth'>
        Hello Welcome <br />
        {user && user.email}
        <button  onClick={handleLogout}>
          Log out
        </button>
        </div>
      <Input/>  
     <MovieList/>
    </div>
  )
}

export default Home;