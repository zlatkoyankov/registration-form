import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import RegistrationForm from './RegistrationForm';
import ReadyPlay from './ReadyPlay';
import RegistrationFormAddresses from './RegistrationFormAddresses';
import ThankYou from './ThankYou';

class Registration extends Component {
  constructor(props) {
    super(props);

    this.state = {
      step: 0
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {

    console.log("registration step is ", this.state.step);
    if(this.state.step === 1) {
      this.setState({step: 2 });
    }

    if(this.state.step === 2) {
      this.setState({step: 3 });
    }

    if(this.state.step === 3) {
      this.setState({step: 4 });
    }
  }

  render() {
    let item;

    switch (this.state.step) {
      case 0:{
        setTimeout(() => {
          this.setState({step: 1});
        }, 500);
      }
      case 1:{
        item = <RegistrationForm handleSubmit={this.handleSubmit} />;
        break;
      }
      case 2:{
        item = <ReadyPlay handleSubmit={this.handleSubmit} />;
        break;
      }
      case 3:{
        item = <RegistrationFormAddresses handleSubmit={this.handleSubmit} />;
        break;
      }
      case 4:{
        item = <ThankYou  />;
        break;
      }
    }

    return (
      <ReactCSSTransitionGroup
        transitionName="example"
        component="RegistrationForm"
        transitionAppear={true}
        transitionAppearTimeout={500}
        transitionEnterTimeout={500}
        transitionLeaveTimeout={500}>
        {item ? item : null }
      </ReactCSSTransitionGroup>
    );
  }
}

export default Registration;
