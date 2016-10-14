import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import RegistrationForm from './RegistrationForm';

class Registration extends Component {
  constructor(props) {
    super(props);

    this.state = {
      step: 0
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    this.setState({step: 2 });
  }

  render() {
    const item = this.state.step === 1;

    if( this.state.step === 0 ) {
      setTimeout(() => {
        this.setState({step: 1});
      }, 100);
    }

    return (
      <ReactCSSTransitionGroup
        transitionName="example"
        component="RegistrationForm"
        transitionAppear={true}
        transitionAppearTimeout={500}
        transitionEnterTimeout={500}
        transitionLeaveTimeout={500}>
        {item ? <RegistrationForm handleSubmit={this.handleSubmit} /> : null }
      </ReactCSSTransitionGroup>
    );
  }
}

export default Registration;
