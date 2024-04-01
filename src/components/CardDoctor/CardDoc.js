import { Link } from 'react-router-dom';
import { FaArrowRightLong } from 'react-icons/fa6';

const CardDoc = ({ photo, name, specialty, onClick }) => {
  const nameDoctor = name.replaceAll(' ', '-');

  return (
    <>
      <div className='max-w-sm bg-light-color border border-gray-300 rounded-lg  shadow-xl  hover:bg-gray-200 hover:shadow-none duration-300'>
        <img
          className='rounded-t-lg w-screen h-56 '
          src={photo}
          alt={name}
          loading='leazy'
        />

        <div className='p-5'>
          <Link to={`/doctor/${nameDoctor}`}>
            <h5 className='mb-2 text-2xl  md:text-2xl font-bold tracking-tight text- hover:underline text-second-color duration-200'>
              {name}
            </h5>
          </Link>
          <p className='mb-3 font-normal text-gray-color'>{specialty}</p>
          <Link
            to={`/doctor/${nameDoctor}`}
            className='inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800  focus:outline-none  '
            onClick={onClick}
          >
            Read more
            <FaArrowRightLong className=' w-3.5 h-3.5 ms-2' />
          </Link>
        </div>
      </div>
    </>
  );
};

export default CardDoc;
