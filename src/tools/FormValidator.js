import Validator from 'validator';
import { isNull, isEmpty, inRange } from 'lodash';

export default function validateInput(data) {
  const {email, username, password} = data;
  const usernameLength = username.length;

  let errors = {};

  if( email.length === 0 ) {
    errors.email = "This field is required";
  }

  if( Validator.isEmail(email)) {
    errors.email = "This is not a valid eamil address";
  }


  if( !inRange(usernameLength, 4, 13) ) {
    errors.username = `This field length is ${usernameLength} require min 4 and max 12 letters`;
  }

  const {error, validPassword} = checkPasswordValidation(password);
  if(!validPassword) {
    errors.password = error;
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
}

function checkPasswordValidation(password) {
  let error = '';
  const re_symbol_or_digit = /(\d|[!@#$%^&*()_+-=])/g;
  const re_capital = /[A-Z]+/g;
  const re_lower = /[a-z]+/g;

  if (!re_symbol_or_digit.test(password)) {
    error = "no digit or !@#$%^&*()_+-=";
  }

  if (!re_lower.test(password)) {
    error = "no lower-case latter";
  }

  if (!re_capital.test(password)) {
    error = "no cepital latter";
  }

  if( !inRange(password.length, 6, 13) ) {
    error = `This field length is ${password.length} require min 6 and max 12 letters`;
  }

  return {
    error,
    validPassword: error === ''
  };
}
