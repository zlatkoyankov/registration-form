import Validator from 'validator';
import { isNull, isEmpty, inRange } from 'lodash';
import * as messages from './ErrorMessages';

export default function validateInput(data) {
  const {email, username, password, first_name} = data;
  const usernameLength = username.length;

  let errors = {};

  if( !isEmail(email)) {
    errors.email = messages.EMAIL_VALID;
  }

  if( email.length === 0 ) {
    errors.email = messages.FIELD_REQUIRED;
  }

  if( first_name.length === 0 ) {
    errors.first_name = messages.FIELD_REQUIRED;
  }

  if( !inRange(usernameLength, 4, 13) ) {
    errors.username = messages.FIELD_LENGTH_TEXT + usernameLength + messages.USERNAME_LENGTH;
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

export function isEmail(email) {
  const pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,4}$/;
  return pattern.test(email);
}

export function checkPasswordValidation(password) {
  let error = '';
  const re_symbol_or_digit = /(\d|[!@#$%^&*()_+-=])/g;
  const re_capital = /[A-Z]+/g;
  const re_lower = /[a-z]+/g;

  if (!re_symbol_or_digit.test(password)) {
    error = messages.PASSWORD_NO_DIGIT_SYMBOLS;
  }

  if (!re_lower.test(password)) {
    error = messages.PASSWORD_NO_LOWER_CASE;
  }

  if (!re_capital.test(password)) {
    error = messages.PASSWORD_NO_CAPITAL_CASE;
  }

  if( !inRange(password.length, 6, 13) ) {
    error = messages.FIELD_LENGTH_TEXT + password.length + messages.PASSWORD_LENGTH;
  }

  return {
    error,
    validPassword: error === ''
  };
}
