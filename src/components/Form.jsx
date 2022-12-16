import React, { useEffect } from 'react';
import { useState } from 'react';
import { validate } from '../helpers/validate';
import { states } from '../constants/labels';
import { useNavigate } from 'react-router-dom'
import '../styles/form.css';

const Form = () => {
  const initialValues = { firstName: '', lastName: '', email: '', zipcode: '', state: ''}
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues, 
      [name]: value
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmitted(true);
  }

  useEffect(() => {
    if(Object.keys(formErrors).length === 0 && isSubmitted) {
      console.log('no errors');
      navigate('/submission-success', { state: {formValues}});
    }
  }, [formErrors])

  const statesList = states.map((state) => {
    return (
      <option key={state} value={state}>
        {state}
      </option>
    )
  })

  return (
    <div className='form-container'>
      <h2> Submission Contact Form </h2>
      <form onSubmit={handleSubmit}>
        <div className='input-container'>
          <div className='input-field'>
            <label> First Name: </label>
            <input
              type='text'
              name='firstName'
              value={formValues.firstName}
              onChange={handleChange}
            />
          </div>
          <span className='form-errors'>
            {formErrors.firstName}
          </span>
        </div>
        <div className='input-container'>
          <div className='input-field'>
            <label> Last Name: </label>
            <input
              type='text'
              name='lastName'
              value={formValues.lastName}
              onChange={handleChange}
            />
          </div>
          <span className='form-errors'>
            {formErrors.lastName}
          </span>
        </div>
        <div className='input-container'>
          <div className='input-field'>
            <label> Email: </label>
            <input
              type='text'
              name='email'
              value={formValues.email}
              onChange={handleChange}
            />
          </div>
          <span className='form-errors'>
            {formErrors.email}
          </span>
        </div>
        <div className='input-container'>
          <div className='input-field'>
            <label> Zip-Code: </label>
            <input
              type='text'
              name='zipcode'
              value={formValues.zipcode}
              onChange={handleChange}
            />
          </div>
          <span className='form-errors'>
            {formErrors.zipcode}
          </span>
        </div>
        <div className='dropdown-container'>
          <label> State: </label>
          <select
            name='state'
            value={formValues.state}
            onChange={handleChange}
          >
            {statesList}
          </select>
        </div>
        <button className='submit-button'>Submit</button>
      </form>
    </div>
  );
};

export default Form;