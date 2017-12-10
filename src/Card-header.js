import React, { Component } from 'react';
import './css/Card-header.css';
import dev from './images/dev.jpg'

class CardHeader extends Component {
    render() {
        return (
            <div className="Card_Header">
                <img className="dev_profile_img" src={dev} alt="dev_img"/>
                <span>{this.props.user}</span>
                <span>{this.props.twitter}</span>
                <small>{this.props.time}</small>
                <i className="fa fa-angle-down fa-2x" aria-hidden="true"></i>
                <span>{this.props.tweetText}</span>
                <span>{this.props.author}</span>
            </div>
        );
    }
} 

export default CardHeader;
