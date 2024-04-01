import React from 'react';

function ContentProflie({ data, styl, title, check }) {
   
    const color = (check === title ? ' text-red-color' : ' ')
  return (
    <div className={`${color !== ''? styl.classMain : ' '}`}>
      <h3
        className={`${styl.classHeader} ${color}`}
      >
        {title}
      </h3>
      <p className={styl.classPhara}>{data}</p>
    </div>
  );
}

export default ContentProflie;
