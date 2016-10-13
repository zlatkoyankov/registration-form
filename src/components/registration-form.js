import React, { Component } from 'react';

class RegistrationForm extends Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      email : '',
      firstName : '',
      username : '',
      password : '',
      terms : false
    };
  }

  render() {
    return (
      <form className="form-signin">
        <h2 className="form-signin-heading">Please sign in</h2>
        <label htmlFor="inputEmail" className="sr-only">Email address</label>
        <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required="" autoFocus="autofocus"/>
        <label htmlFor="inputFirstName" className="sr-only">First Name</label>
        <input type="text" id="inputFirstName" className="form-control" placeholder="First name" required=""/>
        <label htmlFor="inputUsername" className="sr-only">Username</label>
        <input type="text" id="inputUserName" className="form-control" placeholder="Username" required="" />
        <label htmlFor="inputPassword" className="sr-only">Password</label>
        <input type="password" id="inputPassword" className="form-control" placeholder="Password" required="" />
        <div className="checkbox">
          <label>
            <input type="checkbox" value="remember-me" /> By checking this box, I agree to <a href="#">Terms & Conditions</a> of the site.
          </label>
        </div>
        <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
      </form>
    );
  }
}

export default RegistrationForm;