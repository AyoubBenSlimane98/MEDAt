
const DemoApp = ({children}) => {
  return (
    <>
      <div className='container mx-auto'>
        <div className='w-full p-6 mb-10 border border-gray-200 rounded shadow'>
          <h4 className='text-lg font-normal mb-1'>Demo Appointment</h4>
          <p>30 minutes</p>
          {children}
        </div>
      </div>
    </>
  );
};

export default DemoApp;
