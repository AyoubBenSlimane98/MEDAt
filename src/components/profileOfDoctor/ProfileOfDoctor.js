import React from 'react';

const ProfileOfDoctor = ({children}) => {
  return (
    <div>
      <h3 className=' text-red-500 py-4 text-xl font-normal border-b mb-12'>
        Doctor Profile
          </h3>
          {children}
    </div>
  );
};

export default ProfileOfDoctor;
