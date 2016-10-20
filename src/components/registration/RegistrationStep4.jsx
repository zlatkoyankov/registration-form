import React, { Component } from 'react';

class RegistrationStep4 extends Component {

  handlePromotion() {
    window.location = 'http://www.casino.com/promotions/';
  }

  handlePlayNow() {
    window.location = 'http://www.casino.com/casino-games/';
  }

  render() {
    return (
      <div className="registration registration-step4">
        <h2>Thank you</h2>
        <p>You can now play with real money. Have fun, and good luck!</p>

        <button
          className="btn btn-lg btn-info btn-block"
          onClick={this.handlePromotion} >
          Promotions
        </button>
        <br />
        <button
          className="btn btn-lg btn-primary btn-block btn-play"
          onClick={this.handlePlayNow} >
          <span className="btn-arrow-right glyphicon glyphicon-arrow-right"></span>
          Play Now
          <span className="btn-arrow-left glyphicon glyphicon-arrow-left"></span>
        </button>
      </div>
    );
  }
}

export default RegistrationStep4;
