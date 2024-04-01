import React from 'react';
import ImagePro from '../imageProfile/ImagePro';
import ContentProfile from '../ContentProfile/ContentProflie'
import ProfileOfDoctor from '../profileOfDoctor/ProfileOfDoctor';

const CardPro = ({ person }) => {

  const styles = {
    classMain: 'mb-12',
    classHeader: 'text-2xl mb-2 font-normal',
    classPhara: 'text-gray-500 leading-loose mb-6 text-justify  ',
  };

  const contentEdu = `${person.name} completed a Bachelor of Medicine and studied ${person.education}.`;
  const contentExp = `${person.name} has ${person.experience}  of experience in ${person.specialty} and ${person.subSpeciality}.`;
  const contentDoc = `${person.name} is a certified ${person.specialty} specializing in ${
    person.subSpeciality
  }. ${person.sex === 'female' ? 'Her' : 'His'} nationality is ${
    person.nationality
  } and ${person.sex === 'female' ? 'she' : 'he'} speaks ${Object.values(person.languages).join(', ')}. ${
    person.sex === 'female' ? 'She' : 'He'
  } has supervised ${person.numberMalde} patients.`;


  return (
    <section className='container mx-auto mt-16'>
      <div className='flex  flex-col space-x-6  items-center justify-center px-6 md:flex-row'>
        <ImagePro logo={person.url} />
        <div className='md:w-1/2 flex flex-col space-y-6 justify-center py-8'>
          <h2 className='text-red-color font-bold text-4xl py-6 mb-4 tracking-wide'>
            {person.name}
          </h2>

          <ContentProfile
            data={contentDoc}
            styl={styles}
            title={person.specialty}
          />

          <ProfileOfDoctor>
            <ContentProfile
              data={contentEdu}
              styl={styles}
              title='Education'
            />
            <ContentProfile
              data={contentExp}
              styl={styles}
              title='Experience'
            />
          </ProfileOfDoctor>
        </div>
      </div>
    </section>
  );
};

export default CardPro


