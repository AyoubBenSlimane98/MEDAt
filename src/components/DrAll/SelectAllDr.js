import { useEffect, useState } from 'react';

function SelectAllDr() {
  const [doctor, setDoctor] = useState([]);
  const KEY_DOCTORS = process.env.REACT_APP_DOCTORS;
  useEffect(() => {
    fetch(KEY_DOCTORS)
      .then((res) => res.json())
      .then((data) => setDoctor(data));
  }, [KEY_DOCTORS]);

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
