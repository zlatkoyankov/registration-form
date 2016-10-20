import React, { Component } from 'react';

class RegistrationStep2 extends Component {

  handleContinue() {
    this.props.handleSubmit();
  }

  handleSkip() {
    window.location = 'http://www.casino.com';
  }

  render() {
    return (
      <div className="registration registration-step2">
        <p>You’re ready to play!
        In order to play with real money, you will need to provide more information. You can do so
        now if you wish, or skip and do it at a later time.</p>
        <button
          onClick={this.handleSkip}
          className="btn btn-info center-block btn-skip">
          Skip
        </button>

        <button
          onClick={this.handleContinue.bind(this)}
          className="btn btn-lg btn-primary btn-block move-arrow">
          Continue Registration<span className="btn-arrow-down glyphicon glyphicon-arrow-down"></span>
        </button>
      </div>
    );
  }
}

export default RegistrationStep2;
