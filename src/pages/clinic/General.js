import React from 'react';
import IconMenu from '../../components/menuFooter/IconMenu';
function General() {
  return (
    <div className='flex flex-col gap-6 container mx-auto'>
      <img
        src='https://i0.wp.com/www.canadiancmc.com/wp-content/uploads/2022/12/General-Medicine.png?w=1140&ssl=1'
        alt=''
      />
      <h1 class='text-2xl font-bold mb-4'>
        Welcome to the Canadian Medical Center General Medicine (GP) Clinic!
      </h1>
      <p class='mb-4'>
        We are a team of experienced and compassionate general practitioners
        (GPs) who are dedicated to providing high-quality primary care to
        patients of all ages.
      </p>

      <section class='mb-8'>
        <h2 class='text-xl font-semibold mb-4'>
          At our clinic, you can receive treatment for a wide range of medical
          conditions, including:
        </h2>
        <ul class='list-disc ml-6 space-y-2'>
          <li>Colds and flu</li>
          <li>Allergies</li>
          <li>Asthma</li>
          <li>High blood pressure</li>
          <li>Diabetes</li>
          <li>Arthritis</li>
        </ul>
      </section>

      <section class='mb-8'>
        <p class='mb-4'>We also offer preventive care services, such as:</p>
        <ul class='list-disc ml-6 space-y-2'>
          <li>Physical exams</li>
          <li>Immunizations</li>
          <li>Screenings for conditions such as cancer and heart disease</li>
        </ul>
      </section>

      <section class='mb-8'>
        <p class='mb-4'>
          Our GPs are trained to provide personalized care and support, and we
          take the time to listen to your concerns and address all of your
          healthcare needs.
        </p>
        <p class='mb-4'>
          We believe in the importance of a holistic approach to healthcare, and
          we are here to help you manage your health and prevent future problems
          through lifestyle changes and other strategies.
        </p>
      </section>

      <section class='mb-8'>
        <p class='mb-4'>
          We offer extended hours and online appointment scheduling to make it
          easy for you to receive care when you need it.
        </p>
      </section>

      <section>
        <p class='mb-4'>
          If you require specialized care or treatment that is outside the scope
          of our clinic, we will be happy to refer you to a specialist in our
          medical center.
        </p>
        <p class='mb-4'>We look forward to serving you and your family.</p>
      </section>
      <div className='w-full h-auto gap-4 p-12 flex flex-col md:flex-row    section mb-6'>
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

export default General;
