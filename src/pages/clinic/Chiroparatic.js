import React from 'react';
import IconMenu from '../../components/menuFooter/IconMenu';
export default function Chiroparatic() {
  return (
    <div className=' felx flex-col gap-4 container mx-auto'>
      <p className='mt-20 mb-20  text-center'>
        Chiropractic care is a branch of medicine that specializes in treating
        joint dysfunctions such as the spine.
      </p>
      <div className='w-full h-auto gap-4 p-12 flex flex-col md:flex-row    section mb-4 '>
        <IconMenu
          icon='FaHeartbeat'
          title='Over 90,999'
          text='Happy Patients'
        />
        <IconMenu
          icon='FaUserMd'
          title='24'
          text='Qualified Doctors'
        />
        <IconMenu
          icon='FaHospitalAlt'
          title='40'
          text='Clinic Rooms'
        />
      </div>
    </div>
  );
}
