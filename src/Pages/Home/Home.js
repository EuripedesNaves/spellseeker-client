import React from 'react';
import { useNavigate } from 'react-router-dom';


import '../Home/Home.css';

export const Home = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/login')
  }

  const handleSignup = () => {
    navigate('/register')
  }

  return (
    <div className='home'>
      <p>olá</p>
      <button className='btn-home' onClick={handleLogin}>Login</button>
      <button className='btn-home' onClick={handleSignup}>Signup</button>
    </div>
  )
}

export default Home;