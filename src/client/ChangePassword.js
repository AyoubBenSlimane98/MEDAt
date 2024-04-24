import React, { useState } from 'react';
import { LiaEyeSlash, LiaEyeSolid } from 'react-icons/lia';
import { MdErrorOutline } from 'react-icons/md';
import './Login.css';
function ChangePassword({ userId, onCancel }) {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [show, setShow] = useState(false);
  const KEY_PASSWORD = process.env.REACT_APP_REGISTER;
  const handelShowEye = () => {
    setShow(!show);
  };
  const handleChangePassword = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    if (password !== confirmPassword) {
      setError("Passwords don't match");
      setLoading(false);
      return;
    }

      try {
       
      const response = await fetch(
        `${KEY_PASSWORD}/${userId.userId}`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ password }),
        }
      );

      if (response.ok) {
        console.log('Successfully changed password');
      } else {
        throw new Error('Failed to change password');
      }
    } catch (error) {
      setError('Failed to change password');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='w-[560px] bg-light-color border border-gray-200 rounded-lg shadow py-4 px-4 gap-4 flex flex-col justify-center'>
      <form
        className='flex flex-col gap-4 p-4'
        onSubmit={handleChangePassword}
      >
        <label
          htmlFor=''
          className='text-lg'
        >
          Change Password:
        </label>
        <div className=' relative'>
          <input
            autoFocus
            type={show ? 'text' : 'password'}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder='New password'
            className={`border ${error ? 'border-red-color' : 'border-gray-400'}  w-full py-3 px-4 outline-none rounded-lg`}
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
        <div className=' relative'>
          <input
            type={show ? 'text' : 'password'}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder='Confirm password'
            className={`border ${error ? 'border-red-color' : 'border-gray-400'}  w-full py-3 px-4 outline-none rounded-lg`}
          />
          {error ? (
            <MdErrorOutline className='icon-md duration-300  text-2xl text-red-color' />
          ) : show?(
            <LiaEyeSolid
              className='icon-md duration-300 text-2xl cursor-pointer'
              onClick={handelShowEye}
            />
          ) : (
            <LiaEyeSlash
              className={`${!confirmPassword && 'hidden'} icon-md duration-300 text-2xl cursor-pointer`}
              onClick={handelShowEye}
            />
          )}
        </div>
        {error && <p className='text-red-500'>{error}</p>}
        <div className='w-full flex justify-end gap-4 items-center'>
          <button
            type='button'
            className='bg-gray-300 text-slate-600 py-1.5 px-8 rounded-lg outline-none cursor-pointer'
            onClick={onCancel}
          >
            Cancel
          </button>
          <button
            type='submit'
            className='bg-green-light text-light-color py-1.5 px-8 rounded-lg outline-none cursor-pointer hover:bg-green-600 duration-300'
            disabled={loading}
          >
            {loading ? 'Saving...' : 'Save'}
          </button>
        </div>
      </form>
    </div>
  );
}

export default ChangePassword;
