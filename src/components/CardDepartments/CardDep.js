import React from 'react';
import { Link } from 'react-router-dom';

const CardDep = ({ clinic }) => {
  const clinicDom = clinic.title.replaceAll(' ','-')
  return (
    <>
      <div className='flex flex-col items-center   hover:bg-gray-100 border border-gray-200 rounded-lg  shadow-xl    md:flex-row md:max-w-2xl hover:shadow-none'>
        <img
          className=' object-cover w-full  rounded-l-lg h-52 md:w-48 md:rounded-none md:rounded-s-lg'
          src={clinic.url}
          alt='logo'
        />
        <div className='flex flex-col  justify-between  leading-normal p-4'>
          <h5 className='mb-2 text-2xl font-normal text-gray-800 '>
            <Link
              to={`/departments/${clinicDom}`}
              className=' hover:underline text-color-link hover:text-main-color duration-200'
            >
              {clinic.title}
            </Link>
          </h5>
          <p className='mb-4 font-normal text-md text-black-color text-justify'>
            {clinic.content}
          </p>
          <Link
            to={`/departments/${clinicDom}`}
            className='bg-red-color text-light-color text-center py-2 px-3  max-w-fit rounded-lg  hover:bg-red-700 duration-200 text-sm'
          >
            View More Info
          </Link>
        </div>
      </div>
    </>
  );
};

export default CardDep;
