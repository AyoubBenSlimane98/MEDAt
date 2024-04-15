import logo from '../../images/medicine.png';
// import './Home.css';
import TitleHom from '../../components/Titles/TitleHom';
import Db from '../../DataBase/Db';

import SliderActive from '../../components/sliderActive/SliderActive';
import Clinic from '../../DataBase/ClinicDb';
import CardCli from '../../components/CardCli/CardCli';
import BtnHome from '../../components/btn-home/BtnHome';
import Video from '../../components/video/Video';

function Home() {
  const CardClinic = Clinic.map((item) => (
    <CardCli
      key={`${item.id}AZ`}
      image={item.url}
      title={item.title}
    />
  ));
  return (
    <main className='container mx-auto mt-16'>
      <div className='flex  flex-col sm:space-x-6 sm:px-6 md:flex-row-reverse'>
        <div className=' sm:w-screen md:w-1/2 '>
          <img
            src={logo}
            alt=''
            width='w-full'
            className='image-up-down'
          />
        </div>
        <div className='md:w-1/2 flex flex-col space-y-6 justify-center py-8 '>
          <TitleHom data={Db.docOne} />
        </div>
      </div>
      <div className='space-y-6 py-8'>
        <TitleHom data={Db.docTwo}>
          <div className='flex flex-col gap-6  items-center justify-center  md:flex-row  max-w-[90%] mx-auto  py-10'>
            {CardClinic}
          </div>
          <BtnHome title='View  All Departments' />
        </TitleHom>
      </div>
      <Video />
      <div className='py-10 md:py-20 '>
        <TitleHom data={Db.docthree}>
          <div className='mt-4 '>
            <SliderActive />
          </div>
          <BtnHome title='Meet With All Doctors' />
        </TitleHom>
      </div>
    </main>
  );
}

export default Home;
