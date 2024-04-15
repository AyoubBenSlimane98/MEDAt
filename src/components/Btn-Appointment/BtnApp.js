import React, { useState } from 'react';

function BtnApp({onClick}) {
  const appointmentTimes = [
    '08:30',
    '09:00',
    '09:30',
    '10:00',
    '10:30',
    '11:00',
    '11:30',
    '12:00',
    '12:30',
    '13:00',
    '13:30',
    '14:00',
    '14:30',
    '15:00',
    '15:30',
    '16:00',
    '16:30',
    '17:00',
  ];

  const [activeTime, setActiveTime] = useState(null);

  const handleClick = (time) => {
    setActiveTime(time);
    onClick(time)
  };

  return (
    <ul className='flex-1 flex gap-4 flex-wrap items-center justify-center mb-8'>
      {appointmentTimes.map((time, index) => (
        <li
          key={index}
          className={`border border-gray-400 w-24 md:w-48 text-center duration-200 shadow-sm rounded-md cursor-pointer ${
            activeTime === time ? 'bg-main-color text-light-color' : 'bg-light-color'
          }`}
          onClick={()=>handleClick(time)}
        >
          <button className={`py-4 font-normal cursor-pointer`}>{time}</button>
        </li>
      ))}
    </ul>
  );
}

export default BtnApp;
