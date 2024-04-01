import React from 'react';
import logo from '../../images/contactuspage.jpg';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import './Contact.css';

const Contact = () => {
  const containerStyle = {
    width: '400px',
    height: '400px',
  };

  const center = {
    lat: -3.745,
    lng: -38.523,
  };

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyCEbe4Q9VbYAVFM0836xPFTMUAwavrk2po',
  });

  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  return (
    <div className='container mx-auto'>
      <div className='main-img mb-10'>
        <div className='overlay-img'></div>
        <img
          src={logo}
          alt=''
          className='image '
        />
        <div className='content-img'>
          <h2 className='text-5xl md:text-8xl'>CONTACT US</h2>
        </div>
      </div>
      <div className='flex flex-col-reverse items-center md:flex-row md:justify-around mb-10'>
        <div className=''>
          {isLoaded && (
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={center}
              zoom={10}
              onLoad={onLoad}
              onUnmount={onUnmount}
            ></GoogleMap>
          )}
        </div>
        <form
          action=''
          method='get'
          className='flex flex-col p-8 justify-center gap-y-6 border border-gray-200 mb-8 shadow'
        >
          {/* first name & last name  */}
          <div className='flex-1 flex flex-col gap-y-1'>
            <label htmlFor=''>
              Name <span className='text-red-700'>*</span>
            </label>
            <div className='flex items-center justify-center gap-x-2'>
              <input
                autoFocus
                type='text'
                name='firstName'
                placeholder='First Name'
                className='border border-gray-400 px-2 py-1 outline-none w-72'
              />
              <input
                type='text'
                name='lastName'
                placeholder='Last Name'
                className='border border-gray-400 px-2 py-1 outline-none flex-1'
              />
            </div>
          </div>
          <div className='flex flex-col gap-y-2'>
            <label htmlFor=''>
              Email <span className='text-red-700'>*</span>
            </label>
            <input
              type='text'
              name='email'
              className='border border-gray-400 px-2 py-1 outline-none'
            />
          </div>
          <div className='flex flex-col gap-y-2'>
            <label htmlFor='message'>
              Message <span className='text-red-700'>*</span>
            </label>
            <textarea
              name=''
              id='mesage'
              cols='30'
              rows='10'
              className='outline-none border border-gray-300'
            ></textarea>
          </div>
          <div className='flex flex-col gap-y-2'>
            <button className='bg-main-color py-1 text-body-Color hover:bg-sky-400 duration-300'>
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default React.memo(Contact);
