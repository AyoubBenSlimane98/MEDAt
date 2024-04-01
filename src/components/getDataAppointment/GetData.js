import {  useState } from 'react';
import BtnApp from '../Btn-Appointment/BtnApp';
import Calende from '../calender/Calendar';
import DemoApp from '../DemoAppontment/DemoApp';
import { NavLink} from 'react-router-dom'
const GetData = () => {
  const toDay = new Date()
  const [time, setTime] = useState('08:30');
  const [date, setDate] = useState(
    formatDate(
      `${toDay.getDate()}/${toDay.getMonth() + 1}/${toDay.getFullYear()}`
    )
  );
  
  
  const handleTime = (time) => {
    setTime(time);
  };

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
  function formatDate(dateString) {
    const dateParts = dateString.split('/'); 
    const day = parseInt(dateParts[0], 10); 
    const month = parseInt(dateParts[1], 10) - 1;  

    const weekdays = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ];
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

    const dateObject = new Date(month, day);

    const dayOfWeek = weekdays[dateObject.getDay()];
    const monthName = months[dateObject.getMonth()];

    return `${dayOfWeek}, ${day} ${monthName} `;
  }
  const handelDate = (day, month, year) => {
    const toDay = formatDate(`${day}/${month}/${year}`);
    setDate(toDay);
    return toDay
  };
 

  return (
    <>
      <div className='container mx-auto '>
        <DemoApp>
          <p>Date : {date} </p>
          <p>At : {time}</p>
        </DemoApp>
        <div className='flex flex-col md:flex-row gap-4'>
          <div className='flex-1 mb-4'>
            <Calende
              onClick={(day, month, year) => handelDate(day, month, year)}
            />
          </div>
          <ul className='flex-1 flex  gap-4 flex-wrap  items-center justify-center  mb-8'>
            {appointmentTimes.map((time, index) => (
              <BtnApp
                key={index}
                time={time}
                onClick={() => handleTime(time)}
              />
            ))}
          </ul>
        </div>
        <div className='flex  items-center justify-center mb-10'>
          <NavLink
            to='/appointment/information'
            className='bg-sky-400 text-body-Color py-1 w-48 text-center text-lg uppercase rounded-sm'
            
          >
            Save
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default GetData;
