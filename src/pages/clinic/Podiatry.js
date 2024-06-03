import React from 'react';
import IconMenu from '../../components/menuFooter/IconMenu';
import logo from '../../images/Podiatry.webp';
function Podiatry() {
  return (
    <div className='container mx-auto  '>
      <img
        src={logo}
        alt=''
        className='w-full h-48 '
      />
      <ul className='space-x-12 leading-loose'>
        <li className='text-2xl p-2  '>Are you dealing with …..?</li>
        <li className=' list-disc'>Feet And Ankle Aches</li>
        <li className=' list-disc'>Thick Callouses</li>
        <li className=' list-disc'>Heel Issues</li>
        <li className=' list-disc'>Ingrown Toenails</li>
        <li className=' list-disc'>Persistent Fungal Infections</li>
        <li className=' list-disc'>Thickened Nails</li>
        <li className=' list-disc'>Verruca</li>
        <li className=' list-disc'>Flat Feet</li>
        <li className=' list-disc'>Chronic Pain</li>
        <li className=' list-disc'>Bunions</li>
        <li className=' list-disc'>Numbness And Tingling</li>
        <li className=' list-disc'>Diabetic Foot Management</li>
      </ul>
      <p className='text-lg p-2 mb-4'>
        If so, it might be time to see a podiatrist.
      </p>
      <div className='mb-4'>
        <h3 className='text-lg mb-2 '>Podiatrists</h3>
        <p className='mb-6 text-justify leading-loose'>
          are specially trained to help with all kinds of foot and Ankle Pain.
          they can provide relief from thick callouses and corns, heel issues,
          ingrown toenails, persistent fungal infections, thickened nails,
          verruca, flat feet, chronic pain, bunions, and numbness and tingling.
        </p>
        <p className='mb-8 text-justify leading-loose'>
          Plus, podiatrists are essential for diabetes care, from prevention to
          management of diabetes foot-related problems. so, if you have
          diabetes, make sure to visit a podiatrist at least once a year for a
          risk assessment and education.
        </p>
      </div>
      <p className='text-xl mb-10'>
        Don’t let foot and ankle pain linger, see a podiatrist today and get
        back on your feet!
      </p>
      <div className='w-full h-auto gap-4 p-12 flex flex-col md:flex-row    section mb-4'>
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

export default Podiatry;
