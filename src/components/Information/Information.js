import React, {  useReducer } from 'react';
import SelectAllDr from '../DrAll/SelectAllDr';

const Information = ({ time, date }) => {
  const initialState = {
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    dateOfBirth: '',
    doctor: 'Dr Emily Smith',
    isAgree: false,
    time: time, 
    date:date, 
    errors: {
      firstName: '',
      lastName: '',
      phone: '',
      email: '',
      dateOfBirth: '',
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
    case 'reset':
      return initialState;
    case 'error':
      return {
        ...state,
        errors: { ...state.errors, [action.field]: action.message },
      };
    default:
      return state;
  }
};

  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    let errorMessage = '';

    // Validation
    if (name === 'firstName' || name === 'lastName') {
      const namePattern = /^[A-Za-z]+$/;
      if (!namePattern.test(value)) {
        errorMessage = `Please enter a valid ${name} containing only letters.`;
      }
    }
    if (name === 'phone') {
      const phonePattern = /(05|06|07)([4-9]\d{7})/;
      if (!phonePattern.test(value)) {
        errorMessage = 'Please enter a valid phone 05xxx or 06xxx or 07xxxx .';
      }
    }

    if (name === 'email') {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(value)) {
        errorMessage = 'Please enter a valid email address.';
      }
    }
    if (name === 'dateOfBirth') {
      const dobPattern =
        /(0[1-9]|[1-2][0-9]|3[0-1])(\/|-)(0[1-9]|1[0-2])(\/|-)(19[4-9][0-9]|20[0-1][0-9]|202[0-4])/;
      if (!dobPattern.test(value)) {
        errorMessage =
          'Please enter a valid date of birth in the format DD/MM/YYYY.';
      }
    }

    dispatch({
      type: 'input',
      field: name,
      value: type === 'checkbox' ? checked : value,
    });

    if (errorMessage) {
      dispatch({ type: 'error', field: name, message: errorMessage });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        'https://medat-api.onrender.com/api/appointments',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          
          body: JSON.stringify(state),
        }
      );
      if (response.ok) {
        dispatch({ type: 'reset' });
        console.log(state)
      }
    } catch (error) {
      console.error('Error occurred while scheduling appointment:', error);
    }
  };

  const validateForm = () => {
    const { firstName, lastName, phone, email, dateOfBirth } = state.errors;
    return (
      state.firstName !== '' &&
      state.lastName !== '' &&
      state.phone !== '' &&
      state.email !== '' &&
      state.dateOfBirth !== '' &&
      state.doctor !== '' &&
      state.isAgree &&
      firstName === '' &&
      lastName === '' &&
      phone === '' &&
      email === '' &&
      dateOfBirth === ''
    );
  };

  const handleReset = () => {
    dispatch({ type: 'reset' });
  };
 
  return (
    <div className=' container mx-auto p-6 flex  justify-center items-center '>
      <form
        onSubmit={handleSubmit}
        className='flex flex-col p-4 md:p-8 justify-center gap-y-6 border border-gray-200 mb-8 shadow w-full  md:w-[90%] '
      >
        {/* First name & Last name */}
        <div className='flex-1 flex flex-col gap-y-2'>
          <label htmlFor='firstName'>
            Name <span className='text-red-700 '>*</span>
          </label>
          <div className='flex flex-col md:flex-row gap-4 items-center justify-center md:gap-x-2'>
            <input
              autoFocus
              type='text'
              name='firstName'
              value={state.firstName}
              onChange={handleChange}
              placeholder='First Name'
              className={`w-full border  ${state.errors.firstName ? 'border-red-color' : 'border-gray-400'}  px-2 py-1 outline-none md:w-72`}
            />
            <input
              type='text'
              name='lastName'
              value={state.lastName}
              onChange={handleChange}
              placeholder='Last Name'
              className={`w-full border ${state.errors.lastName ? 'border-red-color' : 'border-gray-400'} px-2 py-1 outline-none md:flex-1`}
            />
          </div>
          {state.errors.firstName && (
            <p className='text-red-color'>{state.errors.firstName}</p>
          )}
          {state.errors.lastName && (
            <p className='text-red-color'>{state.errors.lastName}</p>
          )}
        </div>
        {/* Phone */}
        <div className='flex flex-col gap-y-2'>
          <label htmlFor='phone'>
            Phone <span className='text-red-700'>*</span>
          </label>
          <input
            type='text'
            name='phone'
            value={state.phone}
            onChange={handleChange}
            className={`border ${state.errors.phone ? 'border-red-color' : 'border-gray-400'} px-2 py-1 outline-none flex-1`}
          />
          {state.errors.phone && (
            <p className='text-red-color'>{state.errors.phone}</p>
          )}
        </div>
        {/* Email */}
        <div className='flex flex-col gap-y-2'>
          <label htmlFor='email'>
            Email <span className='text-red-700'>*</span>
          </label>
          <input
            type='email'
            name='email'
            value={state.email}
            onChange={handleChange}
            className={`border ${state.errors.email ? 'border-red-color' : 'border-gray-400'} px-2 py-1 outline-none flex-1`}
          />
          {state.errors.email && (
            <p className='text-red-color'>{state.errors.email}</p>
          )}
        </div>
        {/* Date of Birth */}
        <div className='flex flex-col gap-y-2'>
          <label htmlFor='dateOfBirth'>
            Date of Birth (DD/MM/YYYY or DD-MM-YYYY, e.g. 30/12/1960 ){' '}
            <span className='text-red-700'>*</span>
          </label>
          <input
            type='text'
            name='dateOfBirth'
            value={state.dateOfBirth}
            onChange={handleChange}
            className={`border ${state.errors.dateOfBirth ? 'border-red-color' : 'border-gray-400'} px-2 py-1 outline-none flex-1`}
          />
          {state.errors.dateOfBirth && (
            <p className='text-red-color'>{state.errors.dateOfBirth}</p>
          )}
        </div>
        {/* Referring doctor */}
        <div className='flex flex-col gap-y-3 md:flex-row md:items-center md:justify-between gap-x-6 mb-6'>
          <label htmlFor='doctor'>
            Name of your referring doctor{' '}
            <span className='text-red-700'>*</span>
          </label>
          <select
            name='doctor'
            value={state.doctor}
            onChange={handleChange}
            className='outline-none border border-gray-400 flex-1 py-2 px-2'
          >
            <SelectAllDr />
          </select>
        </div>
        <div className='flex flex-col justify-center gap-y-6'>
          <div className='flex items-center  justify-center  md:justify-normal gap-x-2'>
            <input
              type='checkbox'
              name='isAgree'
              onChange={handleChange}
              id='check'
              checked={state.isAgree}
              className='w-4 h-4'
            />
            <label htmlFor='check' className='text-nowrap text-lg'>I have agreed to send all information</label>
          </div>
          <div className='space-x-6'>
            <button
              type='submit'
              className={`${!validateForm() ? 'bg-gray-300' : 'bg-main-color'} py-1.5 px-4 text-body-Color rounded`}
              disabled={!validateForm()}
            >
              Send
            </button>
            <button
              type='button'
              onClick={handleReset}
              className='bg-red-color py-1.5 px-4 text-body-Color rounded'
            >
              Reset
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Information;
