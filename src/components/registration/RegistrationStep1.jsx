import React, {PropTypes} from 'react';
import validateInput from '../../tools/FormValidator';
import TextFiledGroup from '../presentational/TextFieldGroup';

class RegistrationStep1 extends React.Component {

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
    this.handleBlur = this.handleBlur.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
      errors: {}
    });
  }

  handleTermsChange(e) {
    const checked = e.target.checked;

    if( this.isValid() && checked) {
      this.setState({
        termCondition: checked,
        disableSubmit: false
      });
    } else {
      this.setState({
        termCondition: checked,
        disableSubmit: true
      });
    }
  }

  isValid() {
    const {errors, isValid} = validateInput(this.state);

    if (!isValid) {
      this.setState({errors});
    }

    return isValid;
  }
  
  handleBlur(e) {
    const { errors, isValid } = validateInput(this.state);
    const name = e.target.name;

    if(isValid && this.state.termCondition) {
      this.setState({
        disableSubmit: false
      });
    }

    if (!isValid && errors && errors.hasOwnProperty(name)) {
      this.setState({
        disableSubmit: true,
        errors: {[name]: errors[name]}
      });
    } else {
      this.setState({ errors: {} });
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    if(this.isValid()) {
      this.props.handleSubmit();
    }
  }

  render() {
    const {errors, email, first_name, username, password, termCondition, disableSubmit} = this.state;
    return (
      <div className="registration registration-step1">
        <form className="form-horizontal" onSubmit={this.handleSubmit}>
          <h2 className="form-signin-heading">Please sign in</h2>

          <TextFiledGroup
            field="email"
            type="email"
            label="Email address"
            value={email}
            onChange={this.handleChange}
            onBlur={this.handleBlur}
            error={errors.email}
          />

          <TextFiledGroup
            field="first_name"
            label="First name"
            value={first_name}
            onChange={this.handleChange}
            onBlur={this.handleBlur}
            error={errors.first_name}
          />

          <TextFiledGroup
            field="username"
            label="Username"
            value={username}
            onChange={this.handleChange}
            onBlur={this.handleBlur}
            error={errors.username}
          />

          <TextFiledGroup
            field="password"
            label="Password"
            type="password"
            value={password}
            onChange={this.handleChange}
            onBlur={this.handleBlur}
            error={errors.password}
          />

          <div className="checkbox">
            <label htmlFor="terms">
              <input
                id="termCondition"
                type="checkbox"
                value="termCondition"
                checked={termCondition}
                onChange={this.handleTermsChange}/>
              By checking this box, I agree to <a href="#">Terms & Conditions</a> of the site.
            </label>
          </div>
          <button
            className="btn btn-lg btn-primary btn-block move-arrow"
            type="submit"
            disabled={disableSubmit}>
            Next step <span className="btn-arrow-down glyphicon glyphicon-arrow-down"></span>
          </button>
        </form>
      </div>);
  }
}


RegistrationStep1.propTypes = {
  //myProp: PropTypes.isRequired
};

export default RegistrationStep1;
