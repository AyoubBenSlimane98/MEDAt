import React from 'react';
import { FaHospitalAlt, FaHeartbeat, FaUserMd } from 'react-icons/fa';

const IconMenu = ({ icon, title, text }) => {
      let IconComponent;

  switch (icon) {
    case 'FaHospitalAlt':
      IconComponent = FaHospitalAlt;
      break;
    case 'FaHeartbeat':
      IconComponent = FaHeartbeat;
      break;
    case 'FaUserMd':
      IconComponent = FaUserMd;
      break;
    default:
      IconComponent = null;
  }
  return (
    <div className='flex flex-col items-center   justify-center space-y-6  text-light-color flex-1 z-40 mb-8'>
      {IconComponent && <IconComponent className='text-5xl md:text-5xl lg:text-7xl mb-2' />}
      <h3 className=' text-2xl md:text-3xl  md:p-2 text-nowrap font-medium'>{title}</h3>
      <p className=' font-normal  '>{text}</p>
    </div>
  );
};

export default IconMenu;
