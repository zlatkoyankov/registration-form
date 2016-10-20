import React, {Component} from 'react';
import { isEmpty } from 'lodash';

import { FIELD_REQUIRED } from '../../tools/ErrorMessages'
import TextFiledGroup from '../presentational/TextFieldGroup';

class RegistrationStep3 extends Component {

  constructor(props) {
    super(props);

    this.state = {
      address1: '',
      address2: '',
      city: '',
      country: '',
      postalCode: '',
      phone: '',
      bonusCode: '',
      showBonusCodeField: false,
      disableSubmit: true,
      errors: {}
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.bonusLinkHandler = this.bonusLinkHandler.bind(this);
    this.onBlur = this.onBlur.bind(this);
  }

  isValid() {
    let errors = {};
    const {address1, city, country, postalCode, phone } = this.state;

    if( address1.length === 0 ){
      errors.address1 = FIELD_REQUIRED;
    }

    if( city.length === 0 ){
      errors.city = FIELD_REQUIRED;
    }

    if( country.length === 0 ){
      errors.country = FIELD_REQUIRED;
    }

    if( postalCode.length === 0 ){
      errors.postalCode = FIELD_REQUIRED;
    }

    if( phone.length === 0 ){
      errors.phone = FIELD_REQUIRED;
    }

    return{
      errors: errors,
      isValid: isEmpty(errors)
    };
  }

  onBlur(e) {
    const { errors, isValid } = this.isValid(this.state);
    const name = e.target.name;

    if(isValid) {
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

  handleChange(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.handleSubmit();
  }

  bonusLinkHandler(e) {
    e.preventDefault();
    this.setState({showBonusCodeField: true});
  }

  render() {
    const {errors, address1, address2, city, country, postalCode, phone, bonusCode, disableSubmit} = this.state;

    return (
      <div className="registration registration-step3">
        <form className="form-horizontal" onSubmit={this.handleSubmit}>
          <h2 className="form-signin-heading">Add more information:</h2>

          <TextFiledGroup
            field="address1"
            label="Address 1"
            value={address1}
            required="required"
            onChange={this.handleChange}
            onBlur={this.onBlur}
            error={errors.address1}
          />

          <TextFiledGroup
            field="address2"
            label="Address 2"
            value={address2}
            onChange={this.handleChange}
            error={errors.address2}
          />

          <TextFiledGroup
            field="city"
            label="City"
            value={city}
            required="required"
            onChange={this.handleChange}
            onBlur={this.onBlur}
            error={errors.city}
          />

          <TextFiledGroup
            field="country"
            label="Country"
            value={country}
            required="required"
            onChange={this.handleChange}
            onBlur={this.onBlur}
            error={errors.country}
          />

          <TextFiledGroup
            field="postalCode"
            label="Postal Code"
            value={postalCode}
            onChange={this.handleChange}
            onBlur={this.onBlur}
            error={errors.postalCode}
          />

          <TextFiledGroup
            field="phone"
            label="Phone Number"
            value={phone}
            onChange={this.handleChange}
            onBlur={this.onBlur}
            error={errors.phone}
          />

          {this.state.showBonusCodeField && <TextFiledGroup
            field="bonusCode"
            label="Enter Bonus Code"
            value={bonusCode}
            onChange={this.handleChange}
            error={errors.bonusCode}
          />}

          <p className="bonusCode">Do you have a bonus code? <br />
            <a href="#" onClick={this.bonusLinkHandler}>Click here.</a>
          </p>

          <button
            className="btn btn-lg btn-primary btn-block move-arrow"
            type="submit"
            disabled={disableSubmit}
            onClick={this.handleSubmit}>
            Next step <span className="btn-arrow-down glyphicon glyphicon-arrow-down"></span>
          </button>
        </form>
      </div>);
  }
}

export default RegistrationStep3;
