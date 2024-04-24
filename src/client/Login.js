import { useState } from 'react';
import { LiaEyeSlash, LiaEyeSolid } from 'react-icons/lia';
import { MdErrorOutline } from 'react-icons/md';
import logo from '../images/undraw_Dev_focus_re_6iwt.png';
import { useCookies } from 'react-cookie';
import './Login.css';
import Register from './Register';

 

function Login({ onForgetPassword }) {
 
  const KEY_LOGIN = process.env.REACT_APP_LOGIN; 
  
  const [showRegister, setShowRegister] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [, setCookies] = useCookies(['access_token']);
  const [show, setShow] = useState(false);
  
  const handelShowEye = () => {
    setShow(!show);
  };
  const handelShowRegister = () => {
    setShowRegister(!showRegister);
  };
  const handelSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(KEY_LOGIN, {
        method: 'POST',

        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
      if (response.ok) {
        const responseData = await response.json();
        window.location.reload(false);
        setCookies('access_token', responseData.token);
      } else {
        throw new Error('Email or Password incorrect.');
      }
    } catch (error) {
      console.error('Error:', error.message);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div
      className={`w-full h-screen flex items-center justify-center ${showRegister ? ' bg-slate-100' : ''} relative`}
    >
      <div
        className={`w-[460px] bg-light-color border border-gray-200 rounded-lg shadow py-4 px-4 gap-4 flex flex-col ${showRegister ? 'absolute right-[100%] duration-200' : ''}`}
      >
        <form
          className='flex flex-col   justify-center gap-4 '
          onSubmit={handelSubmit}
        >
          <div className='flex flex-col justify-center items-center mt-2'>
            <img
              src={logo}
              alt='logo'
              className='w-[100px] h-[100px] md:w-[200px] md:h-[200px] border border-gray-100  object-contain  rounded-full '
            />
            <h2 className='text-4xl py-2'>Login</h2>
          </div>

          <div className='flex relative'>
            <input
              autoFocus
              type='text'
              name='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder='Email'
              className={`border ${error ? 'border-red-color' : 'border-gray-200 '} outline-none flex-1 py-3 px-5 rounded`}
            />
            {error && (
              <MdErrorOutline className='icon-md duration-300  text-2xl text-red-color' />
            )}
          </div>

          <div className='flex relative'>
            <input
              type={show ? 'text' : 'password'}
              name='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder='Password'
              className={`border ${error ? 'border-red-color' : 'border-gray-200'}  outline-none flex-1 py-3 px-5 rounded duration-200`}
            />
            {error ? (
              <MdErrorOutline className='icon-md duration-300  text-2xl text-red-color' />
            ) : show ? (
              <LiaEyeSolid
                className='icon-md duration-300 text-2xl cursor-pointer'
                onClick={handelShowEye}
              />
            ) : (
              <LiaEyeSlash
                className={`${!password && 'hidden'} icon-md duration-300 text-2xl cursor-pointer`}
                onClick={handelShowEye}
              />
            )}
          </div>
          {error && <p className='text-red-color'>{error}</p>}
          <div className='flex items-center justify-between px-2 py-2'>
            <div>
              <input
                type='checkbox'
                name=''
                id='check'
                checked
              />
              <label
                htmlFor='check'
                className='px-2'
              >
                Remember me
              </label>
            </div>
            <a
              href='#password'
              onClick={onForgetPassword}
            >
              Forgot password?
            </a>
          </div>
          <div className='flex items-center justify-center '>
            <button
              type='submit'
              className=' outline-none bg-blue-light border-none rounded py-2 text-light-color text-center hover:bg-blue-600 focus:bg-blue-600 w-[100%]'
              disabled={loading}
            >
              {loading ? 'Log In ...' : 'Log In'}
            </button>
          </div>
        </form>

        <div className='text-center mb-3 py-2'>
          Don't have account ?
          <a
            href='#register'
            className='px-1'
            onClick={handelShowRegister}
          >
            Register
          </a>
        </div>
      </div>
      <div className=' duration-1000  '>
        {showRegister && (
          <Register
            hiddenRegister={handelShowRegister}
            className='duration-700'
          />
        )}
      </div>
    </div>
  );
}

export default Login;
