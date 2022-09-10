import React from 'react'
import { useState,useEffect } from 'react';
import axios from 'axios';

const Input = () => {
 const[search setSearch] = useState();
  return (
    <div className='input-page'>
      <div className='input-container'>
    
        <h2>Welcome</h2>
        <h3>Millions of movies, TV shows and people to discover. Explore now.</h3>
      
      <div className='search'>
      <input 
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      type="text" 
      placeholder='Search movie...'
      />
      </div>
      </div>
    </div>
  )
}

export default Input;