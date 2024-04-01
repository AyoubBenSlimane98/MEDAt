import React from 'react';

const TitleHom = ({ data, children }) => {
  return (
    <>
      {data.title}
      {data.content}
      {children}
    </>
  );
};

export default TitleHom;
