import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const HeaderApp = () => {
  const [activeLink, setActiveLink] = useState('choose');

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <div className='container mx-auto'>
      <h3 className='text-3xl text-center text-second-color py-4 m-4'>
        Book an Appointment
      </h3>

      <ul className='flex  flex-row  items-center justify-between border border-gray-200 mb-6'>
        <li className='flex-1 text-center'>
          <NavLink
            exact
            to='/appointment'
            className={`block duration-300  py-1 ${
              activeLink === 'choose' ? ' border-b-2 border-main-color' : ''
            }`}
            onClick={() => handleLinkClick('choose')}
          >
            Choose Appointment
          </NavLink>
        </li>
        <li className='flex-1 text-center'>
          <NavLink
            to='/appointment/information'
            className={`block duration-300  py-1 ${
              activeLink === 'info' ? 'border-b-2 border-main-color' : ''
            }`}
            onClick={() => handleLinkClick('info')}
          >
            Your Info
          </NavLink>
        </li>
        <li className='flex-1 text-center'>
          <NavLink
            to='/appointment/confirmation'
            className={`block duration-300  py-1 ${
              activeLink === 'confirmation' ? 'border-b-2 border-main-color' : ''
            }`}
            onClick={() => handleLinkClick('confirmation')}
          >
            Confirmation
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default HeaderApp;
