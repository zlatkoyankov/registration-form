import React, { Component, PropTypes } from 'react';

import Registration from './registration/Registration';

class Application extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {};
  }

  render() {
    return (
      <div className="container">
        <Registration />
      </div>);
  }
}

Application.propTypes = {};

export default Application;
