import React, { Component } from 'react';
import './css/Card-header.css';
import dev from './images/dev.jpg'

class CardHeader extends Component {
    render() {
        return (
            <div className="Card-header">
                <div className="user-container">
                    <img className="dev-profile-img" src={dev} alt="dev_profile"/>
                    <div className="user-text-container">
                        <span className="user">{this.props.user}</span>
                        <div className="twitter-handle-time-container">
                            <span className="twitter-handle">{this.props.twitter}</span>
                            <small className="time">{this.props.time}</small>
                        </div>
                        <i className="fa fa-angle-down" aria-hidden="true"></i>
                    </div>
                </div>
                <div className="text-author-container">
                    <span>{this.props.tweetText}</span>
                    <span>{this.props.author}<span className="author">@amention</span><span>}</span></span>
                </div>
            </div>
        );
    }
} 

export default CardHeader;
