import React from 'react';


const ImagePro = ({logo}) => {
  return (
    <div className='sm:w-screen md:w-[40%] flex  justify-center px-10'>
      <img
        src={logo}
        alt='logo'
        className='rounded-t-xl w-screen '
      />
    </div>
  );
};

export default ImagePro;
