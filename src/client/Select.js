import React from 'react';

function Select({data}) {
  const options = data.map((item) => (
    <option
      key={item}
      value={item}
      {...(item === 19 ? { selected: true } : {})}
      {...(item === 'February' ? { selected: true } : {})}
    >
      {item}
    </option>
  ));

  return <>{options}</>;
}

export default Select;
