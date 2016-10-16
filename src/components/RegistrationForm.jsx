import React, { PropTypes } from 'react';
import validateInput from '../tools/FormValidator';
import TextFiledGroup from './presentational/TextFieldGroup';

class RegistrationForm extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      email: '',
      first_name: '',
      username: '',
      password: '',
      termCondition: false,
      disableSubmit: true,
      errors: {}
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleTermsChange = this.handleTermsChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState( { [e.target.name]: e.target.value,
                      errors: {} } );
  }

  handleTermsChange(e) {
    this.setState( { termCondition: e.target.checked,
                     disableSubmit: !e.target.checked } );
  }

  isValid() {
    let { errors, isValid } = validateInput(this.state);

    if(!isValid) {
      this.setState({ errors });
    }

    return isValid;
  }

  handleSubmit(e) {
    e.preventDefault();
    //if(this.isValid()) {
      this.props.handleSubmit();
    //}
  }
  
  render() {
    const { errors, email, first_name, username, password, termCondition, disableSubmit} = this.state;
    return (
      <form className="form-horizontal" onSubmit={this.handleSubmit}>
        <h2 className="form-signin-heading" >Please sign in</h2>

        <TextFiledGroup
          field="email"
          type="email"
          label="Email address"
          value={email}
          onChange={this.handleChange}
          error={errors.email}

        />

        <TextFiledGroup
          field="first_name"
          label="First name"
          value={first_name}
          onChange={this.handleChange}
          error={errors.first_name}
        />

        <TextFiledGroup
          field="username"
          label="Username"
          value={username}
          onChange={this.handleChange}
          error={errors.username}
        />

        <TextFiledGroup
          field="password"
          label="Password"
          type="password"
          value={password}
          onChange={this.handleChange}
          error={errors.password}
        />

        <div className="checkbox">
          <label htmlFor="terms">
            <input
              id="termCondition"
              type="checkbox"
              value="termCondition"
              checked={termCondition}
              onChange={this.handleTermsChange} />
            By checking this box, I agree to <a href="#">Terms & Conditions</a> of the site.
          </label>
        </div>
        <button
          className="btn btn-lg btn-primary btn-block"
          type="submit"
          disabled={disableSubmit}>
          Next step <span className="btn-arrow-next glyphicon glyphicon-arrow-right"></span>
        </button>
      </form>);
  }

}


RegistrationForm.propTypes = {
  //myProp: PropTypes.isRequired
};

export default RegistrationForm;
