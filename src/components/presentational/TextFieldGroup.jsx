import React, { PropTypes } from 'react';
import classnames from 'classnames';

const TextFieldGroup = ({ field, value, label, error, type, onChange, onBlur, required, autoFoucus }) => {
  return (
    <div className={ classnames('form-group', { 'has-error': error }) }>
      <label htmlFor={field} className="control-label">{label}</label>
      <input
        onChange={onChange}
        onblur={onBlur}
        name={field}
        type={type}
        value={value}
        className="form-control"
        required={required}
        autoFocus={autoFoucus}
      />
      {error && <span className="help-block">{error}</span> }
    </div> );
};

TextFieldGroup.propTypes = {
  field: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  required: PropTypes.bool,
  autoFocus: PropTypes.bool,
  error: PropTypes.string,
  onBlur: PropTypes.func
};

TextFieldGroup.defaultProps = {
  type: 'text'
};

export default TextFieldGroup;
