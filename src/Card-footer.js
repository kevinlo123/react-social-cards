import React, { Component } from 'react';
import './css/Card-footer.css';

class CardFooter extends Component{
    render(){
        return(
            <div className="footer-container">
                <i className="fa fa-comment-o" aria-hidden="true"></i>
                <div className="retweet-container">
                    <i className="fa fa-retweet" aria-hidden="true"></i>
                    <span className="retweets">17</span>
                </div>
                <div className="likes-container">
                    <i className="fa fa-heart-o" aria-hidden="true"></i>
                    <span className="likes">54</span>
                </div>
                <i className="fa fa-envelope-o" aria-hidden="true"></i> 
            </div>   
        );
    }
}

export default CardFooter;