import { useState } from 'react';
import { LiaEyeSlash, LiaEyeSolid } from 'react-icons/lia';

import { useCookies } from 'react-cookie';
import './Login.css';

function Login({ onRegisterClick, onForgetPassword }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [, setCookies] = useCookies(['access_token']);
  const [show, setShow] = useState(false);
  const handelShowEye = () => {
    setShow(!show);
  };
  const handelSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(
      'https://medat-api.onrender.com/api/register/login',
      {
        method: 'POST',

        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      }
    );
    const responseData = await response.json();
    window.location.reload(false);
    setCookies('access_token', responseData.token);
  };
  return (
    <div className='w-[460px] bg-light-color border border-gray-200 rounded-lg shadow py-4 px-4 gap-4 flex flex-col justify-center '>
      <form
        className='flex flex-col justify-center gap-4'
        onSubmit={handelSubmit}
      >
        <h2 className='text-3xl text-center py-4'>LOGIN</h2>

        <div className='flex '>
          <input
            autoFocus
            type='text'
            name='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='Email'
            className='border border-gray-200 outline-none flex-1 py-3 px-5 rounded'
          />
        </div>

        <div className='flex relative'>
          <input
            type={show ? 'text' : 'password'}
            name='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder='Password'
            className='border border-gray-200 outline-none flex-1 py-3 px-5 rounded duration-200'
          />
          {show ? (
            <LiaEyeSolid
              className='icon-md duration-300 cursor-pointer'
              onClick={handelShowEye}
            />
          ) : (
            <LiaEyeSlash
              className={`${!password && 'hidden'} icon-md duration-300 cursor-pointer`}
              onClick={handelShowEye}
            />
          )}
        </div>

        <button
          type='submit'
          className=' outline-none bg-blue-light border-none rounded py-2 text-light-color text-center hover:bg-blue-600 focus:bg-blue-600'
        >
          Log In
        </button>
      </form>
      <div className='flex  flex-col justify-center py-2.5'>
        <a
          href='#p'
          className='text-center text-md hover:text-blue-700 mb-4'
          onClick={onForgetPassword}
        >
          Forgot password?
        </a>
        <hr className='py-4' />
        <button
          type='submit'
          className=' outline-none bg-green-light border-none rounded py-2 px-4 text-light-color text-center hover:bg-green-700 focus:bg-green-700'
          onClick={onRegisterClick}
        >
          Create new account
        </button>
      </div>
    </div>
  );
}

export default Login;
