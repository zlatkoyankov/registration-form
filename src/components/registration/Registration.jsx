import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import TRANSITION_TIME from '../../tools/TimeConstant';
import RegistrationStep1 from './RegistrationStep1';
import RegistrationStep2 from './RegistrationStep2';
import RegistrationStep3 from './RegistrationStep3';
import RegistrationStep4 from './RegistrationStep4';

class Registration extends Component {
  constructor(props) {
    super(props);

    this.state = {
      step: 0,
      transition: true
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    const transition = true;
    let step = this.state.step + 1;

    setTimeout(() => {
      this.setState({transition: false});
    },1100);
    this.setState({
      step,
      transition
    });
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({step: 1, transition: false});
    },200);
  }

  render() {
    let item = null;

    if (!this.state.transition) {
      switch (this.state.step) {
        case 1:{
          item = <RegistrationStep1 handleSubmit={this.handleSubmit} />;
          break;
        }
        case 2:{
          item = <RegistrationStep2 handleSubmit={this.handleSubmit} />;
          break;
        }
        case 3:{
          item = <RegistrationStep3 handleSubmit={this.handleSubmit} />;
          break;
        }
        case 4:{
          item = <RegistrationStep4  />;
          break;
        }
      }
    }

    return (
      <ReactCSSTransitionGroup
        transitionName="example"
        component="RegistrationForm"
        transitionAppear={true}
        transitionAppearTimeout={TRANSITION_TIME}
        transitionEnterTimeout={TRANSITION_TIME}
        transitionLeaveTimeout={TRANSITION_TIME}>
        {item ? item : null }
      </ReactCSSTransitionGroup>
    );
  }
}

export default Registration;
