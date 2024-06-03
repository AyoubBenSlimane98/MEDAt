import React from 'react';
import IconMenu from '../../components/menuFooter/IconMenu';
function UrologyAndrology() {
  return (
    <div className='w-full flex flex-col gap-6 leading-loose container mx-auto'>
      <img
        src='https://i0.wp.com/www.canadiancmc.com/wp-content/uploads/2022/12/Urlogy.png?w=1140&ssl=1'
        alt=''
      />
      <p>
        Urology clinical Canadian Medical Center is specialized in treating
        conditions that affect the urinary tract and the reproductive system in
        both men and women. Our team of skilled urologists and support staff is
        dedicated to providing the highest quality of care to our patients.
      </p>
      <h3 className='w-full text-center text-2xl'>Our Services</h3>
      <div class='mb-8'>
        <h2 class='font-bold text-xl mb-4'>
          ANDROLOGY & INFERTILITY DISORDERS
        </h2>
        <ul class='list-disc ml-6 space-y-2'>
          <li>Manage all kinds of sexual diseases for men.</li>
          <li>
            Manage all kinds of erectile dysfunction using new technology.
          </li>
          <li>Treatment of all kinds of male infertility.</li>
          <li>Manage all kinds of testicular diseases.</li>
        </ul>
      </div>

      <div>
        <h2 class='font-bold text-xl mb-4'>UROLOGY DISEASES</h2>
        <ul class='list-disc ml-6 space-y-2'>
          <li>Manage all Prostatic Diseases.</li>
          <li>Manage all kinds of urinary stones.</li>
          <li>Manage all kinds of urinary tract infections.</li>
          <li>Manage all kinds of urinary incontinence for all ages.</li>
          <li>
            Perform all kinds of urinary surgeries by endoscopy and traditional
            surgery.
          </li>
          <li>Perform ESWL treatment for urinary stones.</li>
          <li>
            Perform all kinds of investigations including ultrasonic examination
            and uroflowmetry.
          </li>
        </ul>
      </div>
      <p className='mb-8'>
        Our team of urologists is highly trained and experienced in treating a
        variety of urological conditions. We work together to provide
        comprehensive care to our patients and make sure they receive the best
        treatment possible.
      </p>
      <div className='w-full h-auto gap-4 p-12 flex flex-col md:flex-row    section  mb-6'>
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

export default UrologyAndrology;
