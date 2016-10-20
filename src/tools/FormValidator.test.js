import expect from 'expect';
import validateInput, { checkPasswordValidation, isEmail } from './FormValidator';
import * as messages from './ErrorMessages';

describe("FormValidation", () => {
  describe("Password validation", () => {
    it("password validation length", () => {
      let password = '';
      let {error, validPassword} = checkPasswordValidation(password);

      expect(validPassword).toBe(false);
      expect(error).toBe(messages.FIELD_LENGTH_TEXT + password.length + messages.PASSWORD_LENGTH);

      password = 'Aaaaaaa1';
      let obj = checkPasswordValidation(password);
      error = obj.error;
      validPassword = obj.validPassword;

      expect(validPassword).toBe(true);
      expect(error).toBe('');
    });

    it("password validation capital letter", () => {
      let password = 'aaaaaa';

      let {error, validPassword} = checkPasswordValidation(password);

      expect(validPassword).toBe(false);
      expect(error).toBe(messages.PASSWORD_NO_CAPITAL_CASE);

      password = 'Aaaaaaa1';
      const obj = checkPasswordValidation(password);
      error = obj.error;
      validPassword = obj.validPassword;

      expect(validPassword).toBe(true);
      expect(error).toBe('');
    });

    it("password validation lower case latter", () => {
      let password = 'AAAAAAA';

      let {error, validPassword} = checkPasswordValidation(password);

      expect(validPassword).toBe(false);
      expect(error).toBe(messages.PASSWORD_NO_LOWER_CASE);

      password = 'Aaaaaaa1';
      const obj = checkPasswordValidation(password);
      error = obj.error;
      validPassword = obj.validPassword;

      expect(validPassword).toBe(true);
      expect(error).toBe('');
    });

    it("password validation has digit or symbol", () => {
      let password = 'AAAAAAa';

      let {error, validPassword} = checkPasswordValidation(password);

      expect(validPassword).toBe(false);
      expect(error).toBe(messages.PASSWORD_NO_DIGIT_SYMBOLS);

      password = 'Aaaaaaa1';
      let obj = checkPasswordValidation(password);
      error = obj.error;
      validPassword = obj.validPassword;

      expect(validPassword).toBe(true);
      expect(error).toBe('');

      password = 'Aaaaaaa!';
      obj = checkPasswordValidation(password);
      error = obj.error;
      validPassword = obj.validPassword;

      expect(validPassword).toBe(true);
      expect(error).toBe('');
    });
  });
  describe("Form field validate ", () => {
    it("test email validatin ", () => {
      expect(isEmail('')).toBe(false);
      expect(isEmail('asdfadf')).toBe(false);
      expect(isEmail('asdfadf@sasdfg')).toBe(false);
      expect(isEmail('asdfadf@sasdfg.c')).toBe(false);
      expect(isEmail('asdfadf@sasdfg.eu')).toBe(true);
    });

    it("test inputValidation ", () => {
      let data = {
        email: '',
        first_name: '',
        username: '',
        password: ''
      };
      let obj = validateInput(data);
      let errors = obj.errors;
      let isValid = obj.isValid;

      expect(isValid).toBe(false);
      expect(errors.email).toBe(messages.FIELD_REQUIRED);
      expect(errors.first_name).toBe(messages.FIELD_REQUIRED);
      expect(errors.password).toBe(messages.FIELD_LENGTH_TEXT + data.password.length + messages.PASSWORD_LENGTH);
      expect(errors.username).toBe(messages.FIELD_LENGTH_TEXT + data.username.length + messages.USERNAME_LENGTH);

      data = {
        email: 'test@test',
        first_name: 'a',
        username: '',
        password: ''
      };
      obj = validateInput(data);
      errors = obj.errors;
      isValid = obj.isValid;

      expect(isValid).toBe(false);
      expect(errors.email).toBe(messages.EMAIL_VALID);
      expect(errors.password).toBe(messages.FIELD_LENGTH_TEXT + data.password.length + messages.PASSWORD_LENGTH);
      expect(errors.username).toBe(messages.FIELD_LENGTH_TEXT + data.username.length + messages.USERNAME_LENGTH);

      data = {
        email: 'test@test.com',
        first_name: 'a',
        username: 'asdd',
        password: ''
      };
      obj = validateInput(data);
      errors = obj.errors;
      isValid = obj.isValid;

      expect(isValid).toBe(false);
      expect(errors.email).toNotExist();
      expect(errors.username).toNotExist();
      expect(errors.password).toBe(messages.FIELD_LENGTH_TEXT + data.password.length + messages.PASSWORD_LENGTH);

      data = {
        email: 'test@test.com',
        first_name: 'a',
        username: 'asdd',
        password: 'Aaaa1#'
      };
      obj = validateInput(data);
      errors = obj.errors;
      isValid = obj.isValid;

      expect(isValid).toBe(true);
      expect(errors.email).toNotExist();
      expect(errors.username).toNotExist();
      expect(errors.password).toNotExist();
    });
  });
});
