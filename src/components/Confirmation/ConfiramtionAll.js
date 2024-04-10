import { Link } from "react-router-dom";
import DemoApp from "../DemoAppontment/DemoApp";

function ConfiramtionAll() {
  return (
    <div className='container mx-auto'>
      <DemoApp>
        
      </DemoApp>
      <div className='border border-gray-200 p-6 mb-6'>
        <p>Full Name : </p>
        <p>Doctor : </p>
        <p>Time : </p>
        <p>Date : </p>
      </div>
      <div className='flex items-center justify-center gap-6 mb-6'>
        <button className='w-32 text-center outline-none bg-main-color py-1 text-body-Color rounded hover:bg-sky-600 active:bg-sky-600  '>
          Save
        </button>
        <Link to='/appointment' className='w-32 text-center outline-none bg-red-color py-1 text-body-Color rounded hover:bg-red-600 active:bg-red-600 '>
          delate
        </Link>
      </div>
    </div>
  );
}

export default ConfiramtionAll;
