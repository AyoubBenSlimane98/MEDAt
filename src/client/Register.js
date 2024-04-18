import { useReducer } from 'react';
import Select from './Select';

const Register = () => {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const years = Years();
  const days = day();
  const initialState = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    dateOfBirth: {
      day: '19',
      month: 'February',
      year: '2024',
    },
    gender: 'Female',
    errors: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
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
          errors: { ...state.errors, [action.field]: action.message },
        };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    let errorMessage = '';

    if (name === 'firstName' || name === 'lastName') {
      const namePattern = /^[A-Za-z]+$/;
      if (!namePattern.test(value)) {
        errorMessage = `Please enter a valid ${name} containing only letters.`;
      }
    }
    if (name === 'email') {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(value)) {
        errorMessage = 'Please enter a valid email address.';
      }
    }
    if (name === 'password') {
      const passwordPattern =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
      if (!passwordPattern.test(value)) {
        errorMessage =
          'Password must contain at least one lowercase letter, one uppercase letter, one digit, one special character !@#$%, and be between 8 and 24 characters long.';
      }
    }
    if (name === 'day' || name === 'month' || name === 'year') {
      dispatch({
        type: 'input',
        field: 'dateOfBirth',
        value: { ...state.dateOfBirth, [name]: value },
      });
    } else { 
      dispatch({
        type: 'input',
        field: name,
        value: value,
      });
    }
    

    if (errorMessage) {
      dispatch({
        type: 'error',
        field: name,
        message: errorMessage,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        'https://medat-api.onrender.com/api/register',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(state),
        }
      );

      if (response.ok) {
        console.log('Registration successful');
        console.log(state)
      }
    } catch (error) {
      console.error('Error occurred while registering:', error);
    }
  };

  const validateForm = () => {
    const { firstName, lastName, email, password } = state.errors;
    return (
      state.firstName !== '' &&
      state.lastName !== '' &&
      state.password !== '' &&
      state.email !== '' &&
      firstName === '' &&
      lastName === '' &&
      password === '' &&
      email === ''
    );
  };

  return (
    <>
      <form
        className='w-[460px] bg-light-color border border-gray-200 rounded-md shadow py-4 px-4 gap-4 flex flex-col justify-center'
        onSubmit={handleSubmit}
      >
        <div>
          <h2 className='text-3xl text-center py-4'>Sign Up</h2>
          <span>It’s quick and easy.</span>
        </div>
        <hr />
        <div className='flex items-center justify-center gap-3'>
          <input
            autoFocus
            type='text'
            name='firstName'
            value={state.firstName}
            onChange={handleChange}
            placeholder='First Name'
            className='border border-gray-200 outline-none flex-[50%] py-3 px-4 rounded'
          />
          <input
            autoFocus
            type='text'
            name='lastName'
            value={state.lastName}
            onChange={handleChange}
            placeholder='Last Name'
            className='border border-gray-200 outline-none flex-[50%] py-3 px-4 rounded'
          />
        </div>
        <input
          autoFocus
          type='text'
          name='email'
          value={state.email}
          onChange={handleChange}
          placeholder='Email'
          className='border border-gray-200 outline-none flex-1 py-3 px-4 rounded'
        />
        <input
          autoFocus
          type='text'
          name='password'
          value={state.password}
          onChange={handleChange}
          placeholder='New Password'
          className='border border-gray-200 outline-none flex-1 py-3 px-4 rounded'
        />
        <div className='flex flex-col  gap-4 '>
          <label htmlFor=''>Birthday ?</label>
          <div className='flex items-center justify-between gap-4'>
            <select
              className='border border-gray-200 outline-none flex-1 py-2.5 px-4 rounded'
              name='month'
              value={state.dateOfBirth.month}
              onChange={handleChange}
            >
              <Select data={months} />
            </select>
            <select
              className='border border-gray-200 outline-none flex-1 py-2.5 px-4 rounded'
              name='day'
              value={state.dateOfBirth.day}
              onChange={handleChange}
            >
              <Select data={days} />
            </select>
            <select
              className='border border-gray-200 outline-none flex-1 py-2.5 px-4 rounded'
              name='year'
              value={state.dateOfBirth.year}
              onChange={handleChange}
            >
              <Select data={years} />
            </select>
          </div>
        </div>
        <div className='flex flex-col gap-4'>
          <label htmlFor=''>Gender</label>
          <div className='flex  items-center justify-center gap-6'>
            <label
              htmlFor='inp-Female'
              className='border border-gray-200 outline-none flex-1 py-2.5 px-4 rounded flex  items-center justify-between'
            >
              Female
              <input
                type='radio'
                name='gender'
                value='Female'
                onChange={handleChange}
                id='inp-Female'
                checked={state.gender === 'Female'}
              />
            </label>

            <label
              htmlFor='inp-Male'
              className='border border-gray-200 outline-none flex-1 py-2.5 px-4 rounded flex  items-center justify-between'
            >
              Male
              <input
                type='radio'
                name='gender'
                value='Male'
                onChange={handleChange}
                id='inp-Male'
                checked={state.gender === 'Male'}
              />
            </label>
          </div>
        </div>
        <div className='flex justify-center py-2.5'>
          <button
            type='submit'
            className={`outline-none  border-none rounded py-2 px-4 text-light-color text-center  w-40 
            ${!validateForm() ? 'bg-gray-300' : 'bg-green-light hover:bg-green-700 focus:bg-green-700'}
            `}
            disabled={!validateForm()}
          >
            Sign Up
          </button>
        </div>
      </form>
    </>
  );
};

const Years = () => {
  let year = [];
  const currentYear = new Date().getFullYear();

  for (let i = currentYear; i >= 1940; i--) {
    year.push(i);
  }
  return year;
};

const day = () => {
  return Array.from({ length: 31 }, (_, i) => i + 1);
};

export default Register;
