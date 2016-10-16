import React, { Component } from 'react';

import TextFiledGroup from './presentational/TextFieldGroup';

class RegistrationFormAddresses extends Component {

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
      errors: {}
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.handleSubmit();
  }

  render() {
    const {errors, address1, address2, city, country, postalCode, phone, bonusCode} = this.state;

    return (
      <form className="form-horizontal" onSubmit={this.handleSubmit}>
        <h2 className="form-signin-heading" >Add more information:</h2>

        <TextFiledGroup
          field="address1"
          label="Address 1"
          value={address1}
          onChange={this.handleChange}
          error={errors.address1}
        />

        <TextFiledGroup
          field="address2"
          label="Address 1"
          value={address2}
          onChange={this.handleChange}
          error={errors.address2}
        />

        <TextFiledGroup
          field="city"
          label="City"
          value={city}
          onChange={this.handleChange}
          error={errors.city}
        />

        <TextFiledGroup
          field="country"
          label="Country"
          value={country}
          onChange={this.handleChange}
          error={errors.country}
        />

        <TextFiledGroup
          field="postalCode"
          label="Postal Code"
          value={postalCode}
          onChange={this.handleChange}
          error={errors.postalCode}
        />

        <TextFiledGroup
          field="phone"
          label="Phone Number"
          value={phone}
          onChange={this.handleChange}
          error={errors.phone}
        />

        <a href="#">Do you have a bonus code? Click here.</a>
        <button
          className="btn btn-lg btn-primary btn-block"
          type="submit"
          onClick={this.handleSubmit}
          >
          Next step <span className="btn-arrow-next glyphicon glyphicon-arrow-right"></span>
        </button>
      </form>);
  }
}

export default RegistrationFormAddresses;
