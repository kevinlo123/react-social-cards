import React, { Component } from 'react';
import HowGit from './images/howGit.jpeg'

class CardContent extends Component {
  render() {
    return (
      <div>
          <img src={HowGit} />
          <h2>{this.props.headingTwoText}</h2>
          <p>{this.props.cardDescription}</p>
          <span>dev.to</span>
      </div>
    );
  }
}

export default CardContent;