import React, { useEffect, useState } from "react";
import CardDep from "../../components/CardDepartments/CardDep";

const Departments = () => {
  const KEY_DEPARTMENT = process.env.REACT_APP_DEPARTMENTS;
  const [clinic, setClinic] = useState([]);
  useEffect(() => {
    fetch(KEY_DEPARTMENT)
      .then((res) => res.json())
      .then((data) => setClinic(data));

    return () => {
      return false;
    };
  }, [KEY_DEPARTMENT]);

  return (
    <div className=' container mx-auto grid grid-cols-1 sm:grid-cols-1  md:grid-cols-2 place-items-center gap-4 p-4 sm:p-10 '>
      {!clinic ? (
        <div className="flex justify-center items-center loader"></div>
      ) : (
        clinic.map((item) => <CardDep key={item._id} clinic={item} />)
      )}
    </div>
  );
};

export default React.memo(Departments);
