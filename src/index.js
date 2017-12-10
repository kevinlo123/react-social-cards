import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import CardHeader from './Card-header';
import CardContent from './Card-content';
import CardFooter from './Card-footer';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <div>
        <div>
            <CardHeader user="The Practical Dev" 
                        twitter="@ThePracticalDev"
                        time="22m"
                        author="{author: @amention}"
                        tweetText="How I Git"/>
            <CardContent headingTwoText="How I Git"
                         cardDescription="git for fun and profit!"/>
            <CardFooter />
        </div>  
    </div>
, document.getElementById('root'));
registerServiceWorker();
