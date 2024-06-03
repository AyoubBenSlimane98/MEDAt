import React from 'react';
import IconMenu from '../../components/menuFooter/IconMenu';
function Physiotherapy() {
  return (
    <div className='flex flex-col gap-8 container mx-auto'>
      <img
        src='https://i0.wp.com/www.canadiancmc.com/wp-content/uploads/2022/12/Physio-1.png?resize=1024%2C256&ssl=1'
        alt=''
      />
      <p className='p-2'>
        Our team of DOH licensed Physiotherapists is highly qualified and
        experienced. They are all registered. We provide specialist ‘ hands-on’
        treatments for all muscular and skeletal conditions, Neurological and
        Paediatric and Geriatric conditions. The CMC PT Clinic prides itself in
        providing a professional yet friendly and relaxed service and aims to
        offer you an appointment within 48 hours.
      </p>
      <p className='p-2'>
        Physiotherapy is a science-based profession and takes a ‘whole person
        approach to health and well-being, which includes the patient’s general
        lifestyle.
      </p>
      <h1 class='text-2xl font-bold mb-4'>Physiotherapy Services</h1>

      <section class='mb-8'>
        <p class='mb-4'>
          Our CMC physio practitioners can treat but are not limited to:
        </p>
        <h2 class='text-xl font-semibold mb-4 p-2'>
          The Outpatient Rehabilitation Program is appropriate for people who
          have experienced the following:
        </h2>
        <ul class='list-disc ml-6 space-y-1'>
          <li>Acute Cervical Disc disorder</li>
          <li>Acute Lumbar Disc Disorder</li>
          <li>Adhesive Capsulitis (Frozen Shoulder)</li>
          <li>Ankle sprains</li>
          <li>Arthritis and Osteoarthritis</li>
          <li>Athletics injuries</li>
          <li>Back & neck pain</li>
          <li>Back pain</li>
          <li>Bursitis</li>
          <li>Carpal Tunnel Syndrome</li>
          <li>Cervical Spondylosis</li>
        </ul>
      </section>

      <section class='mb-8'>
        <h2 class='text-xl font-semibold mb-4'>
          Our neurological physiotherapy and rehabilitation services are most
          suitable for patients who are ambulatory (able to walk) and who wish
          to improve their mobility and daily function includes:
        </h2>
        <ul class='list-disc ml-6 space-y-1 space-x-6'>
          <span></span>
          <li>Improving walking gait and pattern</li>
          <li>Improving strength and physical conditioning</li>
          <li>Improving activity/exercise tolerance and endurance</li>
          <li>Improving balance</li>
          <li>Addressing orthopedic issues related to their condition</li>
        </ul>
        <p class='mt-4'>
          Patients treated at our clinics suffer from a range of neurological
          conditions such as:
        </p>
        <ul class='list-disc ml-6 space-y-1 space-x-6'>
          <span></span>
          <li>Brain injury (traumatic, tumor, post-surgery)</li>
          <li>Cerebral Palsy</li>
          <li>Guillain-Barre Syndrome</li>
          <li>Multiple Sclerosis</li>
          <li>Parkinson’s Disease</li>
          <li>Stroke (hemorrhagic, ischemic)</li>
        </ul>
      </section>

      <section class='mb-8'>
        <h2 class='text-xl font-semibold mb-4'>
          What types of Physiotherapy does our CMC clinic offer?
        </h2>
        <ul class='list-disc ml-6 space-y-1 space-x-6'>
          <span></span>
          <li>Manual Therapy</li>
          <li>Myofascial Release</li>
          <li>Laser Therapy</li>
          <li>Electrotherapy</li>
          <li>Sports Physiotherapy</li>
          <li>Dry Needling</li>
          <li>Sports Massage</li>
          <li>Shockwave Therapy</li>
          <li>Muscle Stretching & Strengthening</li>
          <li>Agility Drills and Sport / Age-specific Exercise Prescription</li>
          <li>Individualized Exercise Programs</li>
          <li>Therapeutic Ultrasound & Thera Laser</li>
          <li>Dry Needle / Acupuncture</li>
        </ul>
      </section>

      <section class='mb-8'>
        <h2 class='text-xl font-semibold mb-4'>Dry Needle / Acupuncture</h2>
        <p>
          Dry Needle / Acupuncture-the insertion of solid filiform needles into
          the skin at specific points throughout the body to promote healing.
        </p>
        <p class='mt-2'>
          When used alongside therapeutic exercise and education, it can speed
          up the healing process and aid in pain management and tissue
          regeneration.
        </p>
        <p class='mt-2'>
          The physiotherapists at CMC Physiotherapy may recommend DRY Needle as
          a treatment option for a variety of conditions and symptoms, such as
          orthopaedic conditions, neurological conditions, and pain syndromes,
          following consent from the patient.
        </p>
      </section>

      <section>
        <h2 class='text-xl font-semibold mb-4'>Pelvic Floor Physiotherapy</h2>
        <p>
          Pelvic health conditions are quite common, yet often are not spoken
          about. Both men and women can be affected, never realizing that there
          are evidence-based treatment solutions.
        </p>
        <p class='mt-2'>
          Pelvic Floor Physiotherapy can treat the following conditions:
        </p>
        <ul class='list-disc ml-6 space-y-1 space-x-6'>
          <span></span>
          <li>Urinary Incontinence</li>
          <li>Fecal Incontinence</li>
          <li>Pelvic Organ Prolapse</li>
          <li>Pelvic Pain</li>
          <li>Pain with Intercourse</li>
          <li>Overactive Bladder</li>
          <li>Pregnancy-Related Pain</li>
          <li>Coccydynia</li>
          <li>Vulvodynia</li>
          <li>Vagina Stenosis</li>
        </ul>
      </section>
      <div className='w-full h-auto gap-4 p-12 flex flex-col md:flex-row    section mb-8'>
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

export default Physiotherapy;
