import React, { useReducer } from 'react';
import logo from '../../images/contactuspage.jpg';
import './Contact.css';

const initialState = {
  firstName: '',
  lastName: '',
  email: '',
  message: '',
  errors: {
    firstName: '',
    lastName: '',
    email: '',
    message: '', // Add empty string for the message field error
  },
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'input':
      return {
        ...state,
        [action.field]: action.value,
        errors: { ...state.errors, [action.field]: '' },
      };
    case 'error':
      return {
        ...state,
        errors: { ...state.errors, [action.field]: action.value },
      };
    case 'reset':
      return initialState;
    default:
      return state;
  }
};

const Contact = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    let errorMessage = '';

    if (name === 'firstName' || name === 'lastName') {
      const namePattern = /^[A-Za-z]+$/;
      if (!namePattern.test(value)) {
        errorMessage = `Please enter a valid ${name} containing only letters.`;
      }
    } else if (name === 'email') {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(value)) {
        errorMessage = 'Please enter a valid email address.';
      }
    } else if (name === 'message') { 
      if (value.trim() === '') { 
        errorMessage = 'Message is required.';
      }
    }

    dispatch({
      type: 'input',
      field: name,
      value: value,
    });

    if (errorMessage) {
      dispatch({ type: 'error', field: name, value: errorMessage });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://medat-api.onrender.com/api/contacts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(state),
      });
      if (response.ok) {
        dispatch({ type: 'reset' });
      }
    } catch (error) {
      console.error('Error occurred while sending message:', error);
    }
  };

  const validateForm = () => {
    const { firstName, lastName, email, message } = state.errors;
    return (
      state.firstName !== '' &&
      state.lastName !== '' &&
      state.email !== '' &&
      state.message.trim() !== '' && 
      firstName === '' &&
      lastName === '' &&
      email === '' &&
      message === ''
    );
  };

  return (
    <div className='container mx-auto '>
      <div className='main-img mb-10'>
        <div className='overlay-img'></div>
        <img
          src={logo}
          alt=''
          className='image'
        />
        <div className='content-img'>
          <h2 className='text-5xl md:text-8xl'>CONTACT US</h2>
        </div>
      </div>
      <div className='flex flex-col-reverse items-center md:flex-row md:justify-around mb-10'>
        <form
          onSubmit={handleSubmit}
          className='flex flex-col p-4 sm:p-8 justify-center gap-y-6 border border-gray-200 mb-8 shadow w-[90%] sm:w-1/2'
        >
          <div className='flex flex-col gap-y-3 '>
            <label htmlFor='firstName'>
              Full Name <span className='text-red-700'>*</span>
            </label>
              <input
                autoFocus
                type='text'
                name='firstName'
                value={state.firstName}
                onChange={handleChange}
                placeholder='First Name'
                className='border border-gray-400 px-2 py-1 outline-none'
                required
              />
              {state.errors.firstName && (
                <p className='text-red-color'>{state.errors.firstName}</p>
              )}
              <input
                type='text'
                name='lastName'
                value={state.lastName}
                onChange={handleChange}
                placeholder='Last Name'
                className='border border-gray-400 px-2 py-1 outline-none  flex-grow'
                required
              />
              {state.errors.lastName && (
                <p className='text-red-color'>{state.errors.lastName}</p>
              )}
            </div>
 
          <div className='flex flex-col gap-y-2'>
            <label htmlFor='email'>
              Email <span className='text-red-700'>*</span>
            </label>
            <input
              type='email'
              name='email'
              value={state.email}
              onChange={handleChange}
              placeholder='Email'
              className='border border-gray-400 px-2 py-1 outline-none'
              required
            />
            {state.errors.email && (
              <p className='text-red-color'>{state.errors.email}</p>
            )}
          </div>
          <div className='flex flex-col gap-y-2'>
            <label htmlFor='message'>
              Message <span className='text-red-700'>*</span>
            </label>
            <textarea
              name='message'
              value={state.message}
              onChange={handleChange}
              id='message'
              className='outline-none border border-gray-300 h-36 sm:h-48'
              required
            ></textarea>
            {state.errors.message && (
              <p className='text-red-color'>{state.errors.message}</p>
            )}
          </div>
          <div className='flex flex-col gap-y-2'>
            <button
              type='submit'
              disabled={!validateForm()}
              className={`${
                !validateForm()
                  ? 'bg-gray-300'
                  : 'bg-main-color hover:bg-sky-400 duration-300'
              } text-body-Color duration-300 py-1`}
            >
              Send
            </button>
          </div>
        </form>
        <div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Contact);

