import React from 'react';
import IconMenu from '../../components/menuFooter/IconMenu';
import './About.css'
const About = () => {
  return (
    <div className='container mx-auto p-10'>
      <div className='flex flex-col items-center '>
        <h3 className='text-5xl text-second-color text-center mb-8'>
          About Medical Center (Group){' '}
        </h3>
        <p className=' text-justify font-normal text-lg text-gray-600 mb-12'>
          Established on June 12th, 2006, the MedAt (Medical Algerian Center)
          has rapidly expanded its presence and services, with numerous branches
          now operating across Algeria. In addition to its main center, MedAt
          has established branches in key cities such as Algiers, Oran,
          Constantine, and Annaba, bringing quality healthcare closer to
          communities nationwide.
        </p>
        <p className=' text-justify font-normal text-lg text-gray-600 mb-10'>
          MedAt is committed to delivering excellence in healthcare, offering a
          comprehensive range of medical services and treatments. Equipped with
          cutting-edge medical technology and staffed by a team of skilled
          healthcare professionals, including physicians, specialists,
          technicians, and nurses, MedAt ensures timely, accurate, and effective
          diagnosis and treatment for all patients.
        </p>
        <p className=' text-justify font-normal text-lg text-gray-600 mb-8'>
          Our center prides itself on providing personalized care and attention
          to each patient, ensuring their comfort and well-being throughout
          their healthcare journey. With a focus on international standards and
          best practices, MedAt maintains the highest level of quality and
          safety in all its operations.
        </p>
        <p className=' text-justify font-normal text-lg text-gray-600 mb-14'>
          Through continuous innovation and dedication to excellence, MedAt aims
          to be at the forefront of the healthcare industry in Algeria,
          providing superior medical services and making a positive impact on
          the health and well-being of the Algerian population.
        </p>
      </div>

      <div className='w-full h-auto gap-4 p-12 flex flex-col md:flex-row    section '>
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
      <div>
        <div className='flex flex-col items-center '>
          <h3 className='text-5xl text-second-color text-center m-10'>
            Our Vision & Mission
          </h3>
          <p className=' text-justify font-normal text-lg text-gray-color mb-12  py-8 border-b'>
            Our vision at MedAt is to nurture the well-being of the Algerian
            community with care and thoughtfulness. We are dedicated to
            advancing and extending the health and prosperity of our society in
            Algeria and beyond. With a commitment to humane, compassionate, and
            professional care, we aim to empower individuals to lead healthy and
            fulfilling lives. Through the utilization of sophisticated,
            up-to-date techniques, and adherence to Western standardized
            practices, coupled with our highly qualified staff, we strive to
            deliver the most timely and accurate treatments to our patients.
          </p>
          <p className=' text-justify font-normal text-lg text-gray-color mb-12'>
            Our mission at MedAt is to establish a lifelong commitment to
            providing the highest quality healthcare services. By integrating
            values and scientific knowledge, we endeavor to offer our patients
            in Algeria unparalleled healthcare experiences. Through a
            combination of expertise and innovation, we aspire to deliver
            comprehensive and competitive healthcare services, setting the
            standard for excellence in Algeria and expanding our reach to
            neighboring countries like Maroco and Tunisie.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
