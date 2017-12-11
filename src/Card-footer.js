import React, { Component } from 'react';

class CardFooter extends Component{
    render(){
        return(
            <div>
                <i className="fa fa-comment-o" aria-hidden="true"></i>
                <i className="fa fa-retweet" aria-hidden="true"></i>
                <i className="fa fa-heart-o" aria-hidden="true"></i>
                <i className="fa fa-envelope-o" aria-hidden="true"></i> 
            </div>   
        );
    }
}

export default CardFooter;