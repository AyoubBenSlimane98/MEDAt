import { Link } from 'react-router-dom';

const CardCli = ({image,title}) => {
  return (
    <div className='flex flex-col w-64 h-64 items-center justify-center border border-gray-300 shadow-lg rounded-xl'>
      <img
        src={image}
        alt=''
        className='h-56 rounded-t-xl mb-3'
      />
      <div className='flex justify-center items-center mb-4'>
        <Link className='text-2xl text-second-color font-normal underline '>
          {title}
        </Link>
      </div>
    </div>
  );
};

export default CardCli;
