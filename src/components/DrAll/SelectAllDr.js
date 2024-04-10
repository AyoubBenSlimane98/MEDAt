import { useEffect, useState } from 'react';

function SelectAllDr() {
  const [doctor, setDoctor] = useState([]);

  useEffect(() => {
    fetch('https://medat-api.onrender.com/api/doctors')
      .then((res) => res.json())
      .then((data) => setDoctor(data));
  }, []);

  return (
    <>
      {doctor.map((item) => (
        <option
          key={item._id}
          value={item.name}
        >
          {' '}
          {item.name}{' '}
        </option>
      ))}
    </>
  );
}

export default SelectAllDr;
