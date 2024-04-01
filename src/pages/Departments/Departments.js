
import { useEffect, useState } from 'react';
import CardDep from '../../components/CardDepartments/CardDep';

const Departments = () => {
  const [clinic, setClinic] = useState([])
  useEffect(() => {
      fetch('https://ayoube2323.github.io/clinic/clinic.json')
        .then((res) => res.json())
        .then((data) => setClinic(data));

    return ()=>{return false }
  }, [])
 
  return (
    <div className=' container mx-auto grid grid-cols-1 sm:grid-cols-1  md:grid-cols-2 place-items-center gap-4  p-10 '>
      {clinic.map((item) => (<CardDep key={item.id} clinic={item} />))}
    </div>
  );
};

export default Departments;