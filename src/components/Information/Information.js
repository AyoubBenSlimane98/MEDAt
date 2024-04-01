import { useReducer } from 'react';
import { Link } from 'react-router-dom';

const Information = () => {
  const initialState = {
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    dateOfBirth: '',
    doctor: '',
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

  const [state, dispatch] = useReducer(reducer, initialState);

  const handelChange = (e) => {
    dispatch({
      type: 'input',
      field: e.target.name,
      value: e.target.value,
    });
  };

  const handelReset = () => {
    dispatch({ type: 'reset' });
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    console.log(state);
    return state;
  };

  return (
    <>
      <div className='container mx-auto '>
        <form
          action=''
          method='get'
          onSubmit={handelSubmit}
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
                onChange={handelChange}
                placeholder='First Name'
                className='border border-gray-400 px-2 py-1 outline-none w-72'
              />
              <input
                type='text'
                name='lastName'
                value={state.lastName}
                onChange={handelChange}
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
              onChange={handelChange}
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
              onChange={handelChange}
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
              onChange={handelChange}
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
              onChange={handelChange}
              className='outline-none border border-gray-400 flex-1 py-2 px-2'
            >
              <option value='Dr Emily Smith'>Dr Emily Smith</option>
              <option value='Dr James Johnson'>Dr James Johnson</option>
            </select>
          </div>
          <div className='flex flex-col justify-center gap-y-6'>
            <div className='flex items-center gap-x-2'>
              <input
                type='checkbox'
                name='isAgree'
                onChange={handelChange}
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
                <Link to='/appointment/confirmation'>Complete Appointment</Link>
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
