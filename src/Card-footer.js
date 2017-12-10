import React, { Component } from 'react';

class CardFooter extends Component{
    render(){
        return(
            <div>
                <i class="fa fa-comment-o" aria-hidden="true"></i>
                <i class="fa fa-retweet" aria-hidden="true"></i>
                <i class="fa fa-heart-o" aria-hidden="true"></i>
                <i class="fa fa-envelope-o" aria-hidden="true"></i> 
            </div>   
        );
    }
}

export default CardFooter;