import React from 'react';
import IconMenu from '../../components/menuFooter/IconMenu';
function Nutrition() {
  return (
    <div className='container mx-auto'>
      <img
        src='https://i0.wp.com/www.canadiancmc.com/wp-content/uploads/2022/12/Diet-Nutrition.png?w=1140&ssl=1'
        alt='clinic Nutrition'
        className=' object-contain  mb-6'
      />
      <p className=' text-justify  leading-loose  mb-4'>
        At our nutrition clinic, we understand that everyone is unique and has
        different nutritional needs. That’s why we offer personalized nutrition
        plans tailored to your specific goals and needs. Whether you’re looking
        to lose weight, improve your overall health, or manage a medical
        condition, our team of registered dietitians will work with you to
        develop a plan that is sustainable and effective.
      </p>
      <hr className='mb-4' />
      <div className=' flex flex-col gap-6 leading-loose'>
        <p>
          At our nutrition clinic, we believe that good nutrition goes beyond
          just the food on your plate. That’s why we also offer support and
          resources to help you in:
        </p>
        <ul className='space-x-12'>
          <li></li>
          <li className=' list-disc'>Manage Stress</li>
          <li className=' list-disc'>mprove your Sleep</li>
          <li className=' list-disc'>
            Incorporate Physical Activity into your Daily Routine
          </li>
        </ul>
        <p>
          By addressing all aspects of your health and well-being, we can help
          you achieve optimal health and vitality.
        </p>
        <p>
          If you have a medical condition, our registered dietitians have the
          knowledge and expertise to help you manage it through nutrition. We
          can provide guidance on how to follow a specific diet, such as a
          gluten-free or low-FODMAP diet, and provide you with the tools and
          resources you need to succeed. We also work closely with your
          healthcare team to ensure that your nutrition plan is safe and
          effective.
        </p>
        <p className='mb-6'>
          Our nutrition clinic is dedicated to providing you with the highest
          quality of care. We use evidence-based approaches and the latest
          research to inform our recommendations, and we are committed to
          ongoing learning and professional development to stay up-to-date on
          the latest nutrition trends and best practices.
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
    </div>
  );
}

export default Nutrition;
