import React from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/success.css';

const Success = () => {
  const {state: formValues} = useLocation();
  console.log(formValues, 'formval');

  return (
    <div className='success-container'>
      <h2> Thank you for your submission.</h2>
    </div>
  );
};

export default Success;