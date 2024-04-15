import React, { useState } from 'react';
import { FaAngleRight, FaAngleLeft } from 'react-icons/fa6';

function Calendar({ onClick }) {
  const [date, setDate] = useState(new Date());
  const [selectedDay, setSelectedDay] = useState(null);

  const daysInMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const firstDayOfMonth = (year, month) => {
    return new Date(year, month, 1).getDay();
  };

  const prevMonth = () => {
    setDate(new Date(date.getFullYear(), date.getMonth() - 1, 1));
  };

  const nextMonth = () => {
    setDate(new Date(date.getFullYear(), date.getMonth() + 1, 1));
  };

  const handleDayClick = (day, month, year) => {
    setSelectedDay(day);
    onClick(day, month, year);
  };

  const renderCalendar = () => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const daysCount = daysInMonth(year, month);
    const firstDayIndex = firstDayOfMonth(year, month);

    const calendar = [];
    

    for (let i = 0; i < firstDayIndex; i++) {
      calendar.push(
        <div
          key={`empty-${i}`}
          className='calendar-day empty'
        ></div>
      );
    }

    for (let day = 1; day <= daysCount; day++) {
      const isSelected = selectedDay === day;
      calendar.push(
        <div
          key={day}
          className={`calendar-day flex items-center justify-around `}
          onClick={() => handleDayClick(day, month + 1, year)}
        >
          <span
            className={`${day < 10 ? 'px-3 py-1' : 'py-1 px-2'} ${isSelected ? 'bg-main-color text-light-color' : ''}
             
             duration-200 sm:hover:bg-gray-300 rounded-full cursor-pointer`}
          >
            {day}
          </span>
        </div>
      );
    }

    return calendar;
  };

  return (
    <div className='w-[90%] sm:w-full max-w-lg mx-auto'>
      <div className='bg-body-color shadow-xl  border border-gray-300 rounded-lg p-4 sm:p-6'>
        <div className='flex  items-center justify-center p-2'>
          <h2 className='text-lg  flex-1 hover:bg-slate-200 px-2 py-3'>
            {date.toLocaleString('default', { month: 'long' })}{' '}
            {date.getFullYear()}
          </h2>
          <div className='flex justify-center items-center w-20'>
            <FaAngleLeft
              onClick={prevMonth}
              className='text-3xl text-second-color font-bold cursor-pointer hover:text-main-color duration-200'
            />
            <FaAngleRight
              onClick={nextMonth}
              className='text-3xl font-bold cursor-pointer text-second-color hover:text-main-color duration-200'
            />
          </div>
        </div>
        <div className='grid grid-cols-7 gap-y-2'>
          <div className='text-center text-gray-600 font-bold'>Sun</div>
          <div className='text-center text-gray-600 font-bold'>Mon</div>
          <div className='text-center text-gray-600 font-bold'>Tue</div>
          <div className='text-center text-gray-600 font-bold'>Wed</div>
          <div className='text-center text-gray-600 font-bold'>Thu</div>
          <div className='text-center text-gray-600 font-bold'>Fri</div>
          <div className='text-center text-gray-600 font-bold'>Sat</div>
          {renderCalendar()}
        </div>
      </div>
    </div>
  );
}
export default Calendar;
