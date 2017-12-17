import React, { Component } from 'react';
import './css/Card-content.css';

class CardContent extends Component {
    render() {
        return (
            <div className="content-container">
            <img className="how-i-git" src={this.props.contentImage} alt="content"/>
                <div className="post-description-container">
                    <h2 className="description-heading">{this.props.headingTwoText}</h2>
                    <p className="description-text">{this.props.cardDescription}</p>
                    <span className="destination">{this.props.destination}</span>
                </div>
            </div>
        );
    }
}

export default CardContent;