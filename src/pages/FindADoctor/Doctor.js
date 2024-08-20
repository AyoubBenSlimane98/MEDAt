import React, { useEffect, useState } from "react";
import CardDoc from "../../components/CardDoctor/CardDoc";
import { BiSearch } from "react-icons/bi";

const Doctor = () => {
  const [doctors, setDoctors] = useState([]);
  const [filterDoctors, setFilterDoctors] = useState([]);
  const [valueInput, setValueInput] = useState("");
  const KEY_DOCTORS = process.env.REACT_APP_DOCTORS;
  useEffect(() => {
    fetch(KEY_DOCTORS)
      .then((res) => res.json())
      .then((data) => setDoctors(data));
  }, [KEY_DOCTORS]);

  useEffect(() => {
    const flr = doctors.filter((doc) =>
      doc.name.toLowerCase().includes(valueInput.trim())
    );
    setFilterDoctors(flr);

    return () => {
      return false;
    };
  }, [valueInput, doctors]);

  const handleChange = (e) => {
    const search = e.target.value.toLowerCase();
    setValueInput(search);
  };
  const handelSearch = () => {
    const flr = doctors.filter((doc) =>
      doc.name.toLowerCase().includes(valueInput.trim())
    );
    setFilterDoctors(flr);
  };

  const handelGetId = (id) => {
    return id;
  };

  return (
    <div className='container mx-auto py-10 border-gray-400'>
      {!filterDoctors ? (
        <div className='flex justify-center items-center loader'></div>
      ) : (
        <>
          <div className='w-full flex justify-center mb-6'>
            <input
              autoFocus
              type='text'
              onChange={handleChange}
              className='rounded-l-full border-gray-900 outline-none bg-slate-300 w-2/3 py-2 px-6 co'
              placeholder='Search'
            />
            <button
              className='bg-blue-500 px-6 py-2 outline-none rounded-r-xl active:bg-sky-400'
              onChange={handelSearch}
            >
              <BiSearch style={{ color: "white", fontSize: "1.5rem" }} />
            </button>
          </div>
          <div className='p-2 grid grid-cols-1 gap-y-6 place-items-center sm:grid-cols-2 sm:gap-8 md:grid-cols-3 xl:grid-cols-4'>
            {filterDoctors.map((doc) => (
              <CardDoc
                key={doc._id}
                name={doc.name}
                photo={doc.url}
                specialty={doc.specialty}
                onClick={() => handelGetId(doc._id)}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default React.memo(Doctor);
