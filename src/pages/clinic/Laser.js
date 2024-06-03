import React from 'react';
import IconMenu from '../../components/menuFooter/IconMenu';
function Laser() {
  return (
    <div className='flex flex-col gap-6 container mx-auto'>
      <img
        src='https://i0.wp.com/www.canadiancmc.com/wp-content/uploads/2023/01/Laser-Hair.png?resize=1024%2C256&ssl=1'
        alt=''
      />
      <h1 class='text-2xl font-bold mb-4'>Laser and Skin Care Treatments</h1>
      <p class='mb-4'>
        At Canadian Medical Center, we specialize in providing a wide range of
        laser and skin care treatments to help you look and feel your best. Our
        team of highly trained and experienced professionals is dedicated to
        delivering the highest level of care and attention to each and every one
        of our clients.
      </p>

      <section class='mb-8'>
        <h2 class='text-xl font-semibold mb-4'>
          Our laser treatments include:
        </h2>
        <ul class='list-disc ml-6 space-y-2'>
          <li>
            <strong>Laser hair removal:</strong> Say goodbye to the hassle of
            shaving and waxing with our advanced laser hair removal technology.
          </li>
          <li>
            <strong>Laser skin resurfacing:</strong> Smooth out fine lines and
            wrinkles, and improve the texture and tone of your skin with our
            laser skin resurfacing treatments.
          </li>
          <li>
            <strong>Laser tattoo removal:</strong> Our laser tattoo removal
            treatments can help you get rid of unwanted ink, safely and
            effectively.
          </li>
          <li>
            <strong>Laser acne treatment:</strong> If you struggle with acne,
            our laser acne treatment can help reduce inflammation and kill
            bacteria, leading to clearer, healthier skin.
          </li>
        </ul>
      </section>

      <section class='mb-8'>
        <h2 class='text-xl font-semibold mb-4'>
          In addition to our laser treatments, we also offer a range of skin
          care services, including:
        </h2>
        <ul class='list-disc ml-6 space-y-2'>
          <li>Facials</li>
          <li>Chemical Peels</li>
          <li>Microdermabrasion</li>
          <li>Oxygeno</li>
        </ul>
      </section>

      <section>
        <p class='mb-4'>
          If you’re ready to take the first step towards achieving your
          aesthetic goals, we invite you to schedule a consultation with one of
          our experts. We’ll take the time to understand your concerns and help
          you determine the best treatment plan for your needs.
        </p>
      </section>
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

export default Laser;
