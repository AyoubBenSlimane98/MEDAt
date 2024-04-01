import { Link } from 'react-router-dom';

function BtnHome({ title }) {
  const value =
    title === 'Meet With All Doctors' ? 'doctor/' : 'departments/';
  return (
    <div className='w-full flex items-center justify-center'>
      <Link
        to={value}
        className='bg-red-color py-2 px-3 text-light-color rounded-md hover:bg-red-600 foucs:outline-none'
      >
        {title}
      </Link>
    </div>
  );
}

export default BtnHome;
