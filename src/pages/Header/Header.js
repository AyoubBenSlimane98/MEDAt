import { Link, NavLink } from 'react-router-dom';
import { CiMenuFries } from 'react-icons/ci';
import logo from '../../images/logo.png(1).webp';
import { useState } from 'react';
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <header className=' container  mx-auto p-6 border-b  sticky top-0 z-50 bg-body-Color shadow'>
      <nav className='flex justify-between items-center'>
        {/* logo */}
        <div>
          <Link to='/'>
            <img
              src={logo}
              alt='Logo'
              className='mr-3 h-12'
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
          <CiMenuFries />
        </button>
      </nav>
      {isMenuOpen && (
        <div
          id='mob-menu'
          className=' absolute flex  md:hidden flex-col  bg-gray-100 py-8 left-6 right-6 items-center space-y-6 drop-shadow-lg border  border-gray-300 rounded-md'
        >
          <NavLink
            to='/'
            className={({ isActive }) =>
              `block duration-200  ${
                isActive ? 'text-main-color' : 'text-slate-700'
              } hover:text-main-color`
            }
          >
            Home
          </NavLink>
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

          <NavLink
            to='/appointment'
            className={({ isActive }) =>
              `block duration-200  ${
                isActive ? 'text-main-color' : 'text-second-color'
              } hover:text-main-color`
            }
          >
            Appointment
          </NavLink>

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
        </div>
      )}
    </header>
  );
};

export default Header;
