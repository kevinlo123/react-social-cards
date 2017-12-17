import React, { Component } from 'react';
import './css/Card-content.css';
import HowGit from './images/howGit.jpeg'

class CardContent extends Component {
    render() {
        return (
            <div className="content-container">
            <img className="how-i-git" src={HowGit} alt="content"/>
                <div className="post-description-container">
                    <h2 className="description-heading">{this.props.headingTwoText}</h2>
                    <p className="description-text">{this.props.cardDescription}</p>
                    <span className="destination">dev.to</span>
                </div>
            </div>
        );
    }
}

export default CardContent;