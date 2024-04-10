import React, { useState, useCallback } from 'react';
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
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  });

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        'https://medat-api.onrender.com/api/contacts',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        }
      );
      if (response.ok) {
        console.log('Message sent successfully');
        
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          message: '',
        });
      } else {
        console.error('Failed to send message:', response.statusText);
      }
    } catch (error) {
      console.error('Error occurred while sending message:', error);
    }
  };

  const onLoad = useCallback(
    (map) => {
      const bounds = new window.google.maps.LatLngBounds(center);
      map.fitBounds(bounds);
    },
    [center]
  );

  return (
    <div className='container mx-auto'>
      <div className='main-img mb-10'>
        <div className='overlay-img'></div>
        <img
          src={logo}
          alt=''
          className='image'
        />
        <div className='content-img'>
          <h2 className='text-5xl md:text-8xl'>CONTACT US</h2>
        </div>
      </div>
      <div className='flex flex-col-reverse items-center md:flex-row md:justify-around mb-10'>
        <div>
          {isLoaded && (
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={center}
              zoom={10}
              onLoad={onLoad}
            ></GoogleMap>
          )}
        </div>
        <form
          onSubmit={handleSubmit}
          className='flex flex-col p-8 justify-center gap-y-6 border border-gray-200 mb-8 shadow'
        >
          <div className='flex-1 flex flex-col gap-y-1'>
            <label htmlFor='firstName'>
              Name <span className='text-red-700'>*</span>
            </label>
            <div className='flex items-center justify-center gap-x-2'>
              <input
                autoFocus
                type='text'
                name='firstName'
                value={formData.firstName}
                onChange={handleChange}
                placeholder='First Name'
                className='border border-gray-400 px-2 py-1 outline-none w-72'
                required
              />
              <input
                type='text'
                name='lastName'
                value={formData.lastName}
                onChange={handleChange}
                placeholder='Last Name'
                className='border border-gray-400 px-2 py-1 outline-none flex-1'
                required
              />
            </div>
          </div>
          <div className='flex flex-col gap-y-2'>
            <label htmlFor='email'>
              Email <span className='text-red-700'>*</span>
            </label>
            <input
              type='email'
              name='email'
              value={formData.email}
              onChange={handleChange}
              placeholder='Email'
              className='border border-gray-400 px-2 py-1 outline-none'
              required
            />
          </div>
          <div className='flex flex-col gap-y-2'>
            <label htmlFor='message'>
              Message <span className='text-red-700'>*</span>
            </label>
            <textarea
              name='message'
              value={formData.message}
              onChange={handleChange}
              id='message'
              cols='30'
              rows='10'
              className='outline-none border border-gray-300'
              required
            ></textarea>
          </div>
          <div className='flex flex-col gap-y-2'>
            <button
              type='submit'
              className='bg-main-color py-1 text-body-Color hover:bg-sky-400 duration-300'
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default React.memo(Contact);
