import React, { Component, PropTypes } from 'react';

import RegistrationForm from './registration-form';

class Application extends Component {
  constructor(props, context){
    super(props, context);

    this.state = { };
  }

  render() {
    return (
        <div className="container">
          <RegistrationForm />
        </div>
    );
  }
}

Application.propTypes = {
};

export default Application;
