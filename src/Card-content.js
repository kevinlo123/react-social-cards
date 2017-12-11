import React, { Component } from 'react';
import './css/Card-content.css';
import HowGit from './images/howGit.jpeg'

class CardContent extends Component {
    render() {
        return (
            <div className="conent-container">
            <img src={HowGit} alt="content"/>
                <div>
                    <h2>{this.props.headingTwoText}</h2>
                    <p>{this.props.cardDescription}</p>
                    <span>dev.to</span>
                </div>
            </div>
        );
    }
}

export default CardContent;