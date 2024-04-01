
function BtnApp({ time, onClick }) {
  
  return (
    <>
      <li
        className='border border-gray-400  w-48 text-center hover:bg-slate-200 duration-200 shadow-sm rounded-md '
        onClick={() => onClick(time)}
      >
        <button
          className='py-4 font-normal'
          onClick={() => onClick(time)}
        >
          {time}
        </button>
      </li>
    </>
  );
}

export default BtnApp;
