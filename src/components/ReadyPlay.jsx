import React, { Component } from 'react';

class ReadyPlay extends Component {

  handleContinue() {
    this.props.handleSubmit();
  }

  handleSkip() {
    window.location = 'http://www.casino.com';
  }

  render() {
    return (
      <div>
        <p>You’re ready to play!
        In order to play with real money, you will need to provide more information. You can do so
        now if you wish, or skip and do it at a later time.</p>
        <button
          onClick={this.handleContinue.bind(this)}
          className="btn btn-lg btn-primary btn-block">
          Continue Registration<span className="btn-arrow-next glyphicon glyphicon-arrow-right"></span>
        </button>
        <button
          onClick={this.handleSkip}
          className="btn btn-lg btn-primary btn-block">
          Skip
        </button>
      </div>
    );
  }
}

export default ReadyPlay;
