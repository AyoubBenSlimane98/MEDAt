import { Link, NavLink } from 'react-router-dom';
import { IoHomeOutline } from 'react-icons/io5';
import { RiUserSearchLine } from 'react-icons/ri';
import { FaUserDoctor } from 'react-icons/fa6';
import { LuCalendarClock } from 'react-icons/lu';
import { BsHospital } from 'react-icons/bs';
import { SiMinutemailer } from 'react-icons/si';
import { FaAngleDoubleLeft } from 'react-icons/fa';
import logo from '../../images/logo.png(1).webp';
import { useState } from 'react';
import { IoMenu } from 'react-icons/io5';
import './Header.css';
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <header className='container mx-auto p-3 md:p-6  max-w-full  sticky top-0 z-50 '>
      <nav
        className={`flex justify-between items-center ${isMenuOpen ? ' hidden duration-300 ease-in-out' : ''}`}
      >
        {/* logo */}
        <div className=''>
          <Link to='/'>
            <img
              src={logo}
              alt='Logo'
              className='mr-3 h-12 '
            />
          </Link>
        </div>
        {/* list items url */}

        <ul className='hidden md:flex md:space-x-4 md:text-nowrap lg:space-x-9 items-center  '>
          <li>
            <NavLink
              to='/'
              className={({ isActive }) =>
                `block duration-200  ${
                  isActive ? 'text-main-color' : 'text-second-color'
                } hover:text-main-color`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/about'
              className={({ isActive }) =>
                `block duration-200  ${
                  isActive ? 'text-main-color' : 'text-second-color'
                } hover:text-main-color`
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/doctor'
              className={({ isActive }) =>
                `block duration-200  ${
                  isActive ? 'text-main-color' : 'text-second-color'
                } hover:text-main-color`
              }
            >
              Doctors
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/departments'
              className={({ isActive }) =>
                `block duration-200  ${
                  isActive ? 'text-main-color' : 'text-second-color'
                } hover:text-main-color `
              }
            >
              Departments
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/appointment'
              className={({ isActive }) =>
                `block duration-200  ${
                  isActive ? 'text-main-color' : 'text-second-color'
                } hover:text-main-color`
              }
            >
              For Appointment
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/contact'
              className={({ isActive }) =>
                `block duration-200 ${
                  isActive ? 'text-main-color' : 'text-second-color'
                } hover:text-main-color`
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>
        <button
          id='mob-btn'
          className='md:hidden  text-4xl '
          onClick={toggleMenu}
        >
          <IoMenu />
        </button>
      </nav>

      {isMenuOpen && (
        <div
          id='mob-menu'
          className={` duration-1000 ease-in-out absolute top-0 left-0 w-[80%] h-screen flex flex-col md:hidden bg-gray-200 z-50 
          }`}
        >
          <div className='flex items-center py-10 px-4'>
            <Link to='/'>
              <img
                src={logo}
                alt='Logo'
                className='h-10 space-x-4'
              />
            </Link>
          </div>
          <FaAngleDoubleLeft
            className='text-xl md:hidden icon-letf-rghit '
            onClick={toggleMenu}
          />
          <div className='px-2 '>
            <NavLink
              to='/'
              className={({ isActive }) => `  ${isActive ? 'move-bgcolor' : ''}
                flex items-end gap-x-2 move-bgcolor  px-2 py-2  mb-2 w-[94%]`}
            >
              <IoHomeOutline className=' text-xl' />{' '}
              <span className=' leading-none'>Home</span>
            </NavLink>
            <NavLink
              to='/about'
              className={({ isActive }) => `  ${isActive ? 'move-bgcolor' : ''}
                flex items-end gap-x-2 move-bgcolor  px-2 py-2  mb-2 w-[94%]`}
            >
              <RiUserSearchLine className=' text-xl' />{' '}
              <span className=' leading-none'>About US</span>{' '}
            </NavLink>

            <NavLink
              to='/doctor'
              className={({ isActive }) => `  ${isActive ? 'move-bgcolor' : ''}
                flex items-end gap-x-2 move-bgcolor  px-2 py-2  mb-2 w-[94%]`}
            >
              <FaUserDoctor className=' text-xl' />
              <span className=' leading-none'>Doctors</span>
            </NavLink>

            <NavLink
              to='/departments'
              className={({ isActive }) => `  ${isActive ? 'move-bgcolor' : ''}
                flex items-end gap-x-2 move-bgcolor  px-2 py-2  mb-2 w-[94%]`}
            >
              <BsHospital className=' text-xl' />
              <span className=' leading-none'>Departments</span>
            </NavLink>

            <NavLink
              to='/appointment'
              className={({ isActive }) => `  ${isActive ? 'move-bgcolor' : ''}
                flex items-end gap-x-2 move-bgcolor  px-2 py-2  mb-2 w-[94%]`}
            >
              <LuCalendarClock className=' text-xl ' />
              <span className=' leading-none '>Appointment</span>
            </NavLink>

            <NavLink
              to='/contact'
              className={({ isActive }) => `  ${isActive ? 'move-bgcolor' : ''}
                flex items-end gap-x-2 move-bgcolor  px-2 py-2  mb-2 w-[94%]`}
            >
              <SiMinutemailer className=' text-xl' />{' '}
              <span className='leading-none'>Contact US</span>
            </NavLink>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
