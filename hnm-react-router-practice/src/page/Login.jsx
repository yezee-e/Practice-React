import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { authenticateAction } from '../redux/actions/authenticateAction';
import './Login.scss';

function Login() {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const loginUser = (e) => {
    e.preventDefault();
    dispatch(authenticateAction.login(id, password));
    navigate('/');
  };
  return (
    <form className='login' onSubmit={(e) => loginUser(e)}>
      <div>
        <div>Email address</div>
        <input
          type='text'
          placeholder='Enter email'
          onChange={(e) => setId(e.target.value)}
        />
      </div>
      <div>
        <div>Password</div>
        <input
          type='password'
          placeholder='Password'
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button type='submit'>Login</button>
    </form>
  );
}

export default Login;
