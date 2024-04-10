import React, { useReducer } from 'react';
import SelectAllDr from '../DrAll/SelectAllDr';
import DemoApp from '../DemoAppontment/DemoApp';

const initialState = {
  firstName: '',
  lastName: '',
  phone: '',
  email: '',
  dateOfBirth: '',
  doctor: 'Dr Emily Smith', 
  isAgree: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'input':
      return { ...state, [action.field]: action.value };
    case 'reset':
      return initialState;
    default:
      return state;
  }
};

const Information = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    dispatch({
      type: 'input',
      field: name,
      value: type === 'checkbox' ? checked : value,
    });
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
        console.log('Appointment scheduled successfully');
        // Optionally, reset the form after successful submission
        dispatch({ type: 'reset' });
      } else {
        console.error('Failed to schedule appointment:', response.statusText);
      }
    } catch (error) {
      console.error('Error occurred while scheduling appointment:', error);
    }
  };
   const handelReset = () => {
     dispatch({ type: 'reset' });
   };
  return (
    <>
      <div className='container mx-auto '>
        <DemoApp>
          
        </DemoApp>
        <form
          action=''
          method='POST'
          onSubmit={handleSubmit}
          className='flex flex-col p-8 justify-center gap-y-6 border border-gray-200 mb-8 shadow'
        >
          {/* first name & last name  */}
          <div className='flex-1 flex flex-col gap-y-1'>
            <label htmlFor=''>
              Name <span className='text-red-700'>*</span>
            </label>
            <div className='flex items-center justify-center gap-x-2'>
              <input
                autoFocus
                type='text'
                name='firstName'
                value={state.firstName}
                onChange={handleChange}
                placeholder='First Name'
                className='border border-gray-400 px-2 py-1 outline-none w-72'
              />
              <input
                type='text'
                name='lastName'
                value={state.lastName}
                onChange={handleChange}
                placeholder='Last Name'
                className='border border-gray-400 px-2 py-1 outline-none flex-1'
              />
            </div>
          </div>
          {/* phone */}
          <div className='flex flex-col gap-y-2'>
            <label htmlFor=''>
              Phone <span className='text-red-700'>*</span>
            </label>
            <input
              type='text'
              name='phone'
              value={state.phone}
              onChange={handleChange}
              className='border border-gray-400 px-2 py-1 outline-none'
            />
          </div>
          {/* Email */}
          <div className='flex flex-col gap-y-2'>
            <label htmlFor=''>
              Email <span className='text-red-700'>*</span>
            </label>
            <input
              type='text'
              name='email'
              value={state.email}
              onChange={handleChange}
              className='border border-gray-400 px-2 py-1 outline-none'
            />
          </div>
          {/* Date of Birth */}
          <div className='flex flex-col gap-y-2'>
            <label htmlFor=''>
              Date of Birth (DD/MM/YYYY, e.g. 30/12/1960){' '}
              <span className='text-red-700'>*</span>
            </label>
            <input
              type='text'
              name='dateOfBirth'
              value={state.dateOfBirth}
              onChange={handleChange}
              className='border border-gray-400 px-2 py-1 outline-none'
            />
          </div>
          {/* Referring doctor */}
          <div className='flex items-center justify-between gap-x-6 mb-6'>
            <label htmlFor=''>
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
            <div className='flex items-center gap-x-2'>
              <input
                type='checkbox'
                name='isAgree'
                onChange={handleChange}
                id='check'
                checked={state.isAgree}
                className='w-4 h-4'
              />
              <label htmlFor='check'>
                I have agreed to send all information
              </label>
            </div>
            <div className='space-x-6'>
              <button
                type='submit' // Change from Link to button
                className='bg-main-color py-1.5 px-3 text-body-Color rounded'
              >
                Complete Appointment
              </button>
              <button
                type='button'
                onClick={handelReset}
                className='bg-red-color py-1 px-4 text-body-Color rounded'
              >
                Reset
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Information;