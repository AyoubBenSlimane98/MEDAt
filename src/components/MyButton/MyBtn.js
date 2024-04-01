
import { Link } from 'react-router-dom';
const MyBtn = ({name}) => {
    return (
      <>
        <Link
          to=''
          className='inline-flex items-center px-14 py-4 text-md font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800  focus:outline-none  dark:bg-blue-600 dark:hover:bg-blue-700  mx-auto'
        >
          {name}
        </Link>
      </>
    );
};

export default MyBtn;
