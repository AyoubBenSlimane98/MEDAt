import { Link } from 'react-router-dom';
import logo from '../../images/logo.png(1).webp';

function Footer() {
  const dataNew = new Date();
  return (
    <footer className='container mx-auto bg-white border-y'>
      <div className='mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8'>
        <div className='md:flex md:justify-between'>
          <div className='mb-6 md:mb-0'>
            <Link
              to='/'
              className='flex items-center'
            >
              <img
                src={logo}
                className='mr-3 h-16'
                alt='Logo'
              />
            </Link>
          </div>
          <div className='grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3'>
            <div>
              <h2 className='mb-6 text-sm font-semibold text-gray-900 uppercase'>
                Resources
              </h2>
              <ul className='text-gray-500 font-medium'>
                <li className='mb-4'>
                  <Link
                    to='/'
                    className='hover:underline hover:text-main-color'
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to='/about'
                    className='hover:underline hover:text-main-color'
                  >
                    About
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className='mb-6 text-sm font-semibold text-gray-900 uppercase'>
                Follow us
              </h2>
              <ul className='text-gray-500 font-medium'>
                <li className='mb-4'>
                  <a
                    href='#e'
                    className='hover:underline hover:text-main-color'
                    target='_blank'
                    rel='noreferrer'
                  >
                    Facebook
                  </a>
                </li>
                <li>
                  <Link
                    to='/'
                    className='hover:underline hover:text-main-color'
                  >
                    LinkedIn
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className='mb-6 text-sm font-semibold text-gray-900 uppercase'>
                Get In Touch
              </h2>
              <ul className='text-gray-500 font-medium'>
                <li className='mb-4'>
                  <Link
                    to='/contact'
                    className='hover:underline hover:text-main-color'
                  >
                    Support Available for 24/7
                  </Link>
                </li>
                <li>
                  <Link
                    to='#'
                    className='hover:underline hover:text-main-color'
                  >
                    Sun to Thu : 08:30 - 18:00
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className='my-6 border-gray-200 sm:mx-auto lg:my-8' />
        <div className='flex justify-center items-center'>
          <span className='text-sm text-gray-500 sm:text-center '>
            Copyright © {dataNew.getFullYear()} . All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
