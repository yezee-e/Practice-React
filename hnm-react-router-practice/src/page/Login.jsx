import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.scss';

function Login({ setAuthenticate }) {
  const navigate = useNavigate();

  const loginUser = (e) => {
    e.preventDefault();
    setAuthenticate(true);
    navigate('/');
  };
  return (
    <form className='login' onSubmit={(e) => loginUser(e)}>
      <div>
        <div>Email address</div>
        <input type='text' placeholder='Enter email' />
      </div>
      <div>
        <div>Password</div>
        <input type='password' placeholder='Password' />
      </div>
      <button type='submit'>Login</button>
    </form>
  );
}

export default Login;
