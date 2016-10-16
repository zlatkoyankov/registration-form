import React, { Component } from 'react';

class ThankYou extends Component {

  handlePromotion() {
    window.location = 'http://www.casino.com/promotions/';
  }

  handlePlayNow() {
    window.location = 'http://www.casino.com/casino-games/';
  }

  render() {
    return (
      <div>
        <p>Thank you</p>
        <p>You can now play with real money. Have fun, and good luck!</p>
        <button
          className="btn btn-lg btn-primary btn-block"
          onClick={this.handlePlayNow}
        >
          Play Now
        </button>

        <button
          className="btn btn-lg btn-primary btn-block"
          onClick={this.handlePromotion}
        >
          Promotions
        </button>
      </div>
    );
  }
}

export default ThankYou;
