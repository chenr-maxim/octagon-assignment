export const validate = (values) => {
  const errors = {};

  if(!values.firstName) {
    errors.firstName = 'First name is required';
  } else if(!validateFirstName(values.firstName)) {
    errors.firstName = 'First Name is not valid, must be only characters'
  }

  if(!values.lastName) {
    errors.lastName = 'Last name is required';
  } else if (!validateLastName(values.lastName)) {
    errors.lastName = 'Last Name is not valid, must be only characters, hyphens or apostrophes'
  }

  if(!values.email) {
    errors.email = 'Email is required';
  } else if (!validateEmail(values.email)) {
    errors.email = 'Email not in a valid format'
  }

  if(!values.zipcode) {
    errors.zipcode = 'Zip-Code is required';
  } else if (!validateZipcode(values.zipcode)) {
    errors.zipcode = 'Zip-Code not in a valid format'
  }

  return errors;
}

const validateFirstName = (firstName) => {
  const regex = /^[a-zA-Z]+$/;
  return regex.test(firstName);
}

const validateLastName = (lastName) => {
  const regex = /^[a-zA-Z](?:[ '\-a-zA-Z]*[a-zA-Z])?$/;
  return regex.test(lastName);
}

const validateEmail = (email) => {
  const regex = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  return regex.test(email);
}

const validateZipcode = (zipcode) => {
  const regex = /^[0-9]{5}(?:-[0-9]{4})?$/;
  return regex.test(zipcode);

}

