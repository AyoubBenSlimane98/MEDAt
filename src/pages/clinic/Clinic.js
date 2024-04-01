import React from 'react';
import './Clinic.css'
import video from '../../components/video/funny.mp4'
const Clinic = () => {
  return (
    <div className='container mx-auto p-6'>
      <div className='w-full '>
        <h1 className='text-red-color  text-5xl text-center mb-4'>
          Not Complited Now 😂😅{' '}
        </h1>
        <video
          src={video}
          controls
          loop
          autoPlay
          className='video-Edit'
        ></video>
      </div>
    </div>
  );
};

export default Clinic;
