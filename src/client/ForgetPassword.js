import React, { useState } from 'react';
import ChangePassword from './ChangePassword';

function ForgetPassword({ onCancel }) {
  const [email, setEmail] = useState('');
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(
        'https://medat-api.onrender.com/api/register/validate-email',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email }),
        }
      );

      if (response.ok) {
        const id = await response.json();
        setUser(id);
      } else {
        throw new Error('Email validation failed');
      }
    } catch (error) {
      setError('Failed to validate email');
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = () => {
    setEmail('');
    setUser(null);
    onCancel();
  };

  return (
    <>
      {!user ? (
        <div className='w-[560px] bg-light-color border border-gray-200 rounded-lg shadow py-4 px-4 gap-4 flex flex-col justify-center'>
          <h2 className='text-3xl'>Find your account</h2>
          <hr />
          <form onSubmit={handleSubmit}>
            <p className='mb-5'>
              Please enter your email to search for your account.
            </p>
            <input
              autoFocus
              type='text'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder='info@gmail.com'
              className='border border-gray-200 w-full py-2 px-4 outline-none rounded-lg mb-5'
            />
            <hr className='mb-3' />
            <div className='flex justify-end items-center gap-4'>
              <button
                type='button'
                className='bg-gray-300 text-slate-600 py-1.5 px-5 rounded-lg outline-none cursor-pointer'
                onClick={handleCancel}
              >
                Cancel
              </button>
              <button
                type='submit'
                className='bg-blue-light text-light-color py-1.5 px-5 rounded-lg outline-none cursor-pointer hover:bg-blue-700 duration-300'
                disabled={loading}
              >
                {loading ? 'Searching...' : 'Search'}
              </button>
            </div>
          </form>
        </div>
      ) : (
        <ChangePassword
          userId={user}
          onCancel={handleCancel}
        />
      )}
    </>
  );
}

export default ForgetPassword;
