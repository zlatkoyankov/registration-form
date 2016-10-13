import React, { Component, PropTypes } from 'react';

class Application extends Component {
  constructor(props, context){
    super(props, context);

    this.state = { };
  }

  render() {
    return (
        <div>
          Hello World
        </div>
    );
  }
}

Application.propTypes = {
};

export default Application;
