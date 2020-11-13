import React from 'react';

const Loader = ({ children, isLoading }) => {
  const loader = <div>Loading</div>;

  if (isLoading) return loader;

  return (
    <>
      {children}
    </>
  );
};

export default Loader;