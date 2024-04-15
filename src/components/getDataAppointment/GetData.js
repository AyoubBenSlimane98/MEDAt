import {  useState } from 'react';
import BtnApp from '../Btn-Appointment/BtnApp';
import Calende from '../calender/Calendar';
import DemoApp from '../DemoAppontment/DemoApp';
import { format } from 'date-fns';
import Information from '../Information/Information';

const GetData = () => {
  const today = new Date();
  const [time, setTime] = useState('08:30');
  const [date, setDate] = useState(format(today, 'dd/MM/yyyy'));

  const handleTime = (time) => {
    setTime(time);
  };

  const handleDate = (day, month, year) => {
    const selectedDate = new Date(year, month - 1, day);
    setDate(format(selectedDate, 'dd/MM/yyyy'));
  };
 
  return (
    <div className='container mx-auto'>
      <DemoApp >
        <p>Date : {date} </p>
        <p>At : {time}</p>
      </DemoApp>
      <div className='flex flex-col md:flex-row gap-4'>
        <div className='flex-1 mb-4'>
          <Calende onClick={handleDate} />
        </div>
        <BtnApp onClick={handleTime} />
      </div>
      <Information
        time={time}
        date={date}
      />
    </div>
  );
};

export default GetData;
