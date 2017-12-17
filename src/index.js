import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css'; // MAIN CSS
import CardHeader from './Card-header';
import CardContent from './Card-content';
import CardFooter from './Card-footer';
/*************** IMAGES **************/
import dev from './images/dev.jpg'
import contentImage from './images/howGit.jpeg'
import vs from './images/vs.jpg'
import vsUpdate from './images/vsUpdate.jpg'
import windows from './images/windows.jpg'
import windowsPost from './images/windowsPost.jpg'
import apple from './images/apple.jpg'
import perfectPhoto from './images/perfect.jpeg'
/**************************************/

import registerServiceWorker from './registerServiceWorker';



ReactDOM.render(
    <div>
        <div className="container">
            <CardHeader user="The Practical Dev" 
                        userImage={dev}
                        twitter="@ThePracticalDev"
                        time="22m"
                        author="{author: "
                        tweetText="How I Git"/>
            <CardContent headingTwoText="How I Git"
                         contentImage={contentImage}
                         cardDescription="Git for fun and profit!"
                         destination="dev.to"/>
            <CardFooter />
        </div>
        <div className="container">
            <CardHeader user="Visual Studio Code"
                        userImage={vs} 
                        twitter="@Visualcode"
                        time="Dec 14"
                        author="{author: "
                        tweetText="Heres the visual studio code update"/>
            <CardContent headingTwoText="Download visual studio code"
                         contentImage={vsUpdate}
                         cardDescription="You can get the latest release of Vs code with insiders build!"
                         destination="code.visualstudio.com"/>
            <CardFooter />
        </div> 
        <div className="container">
            <CardHeader user="Apple Support" 
                        userImage={apple}
                        twitter="@AppleSupport"
                        time="55m"
                        author="{author: "
                        tweetText="Take great photos. Make them even better."/>
            <CardContent headingTwoText="Make the most of your photos"
                         contentImage={perfectPhoto}
                         destination="support.apple.com"/>
            <CardFooter />
        </div> 
        <div className="container">
            <CardHeader user="WindowsTwitter" 
                        userImage={windows}
                        twitter="@WindowsTwitter"
                        time="Dec 13"
                        author="{author: "
                        tweetText="'Tis the season to get things done"/>
            <CardContent headingTwoText="Microsoft"
                         contentImage={windowsPost}/>
            <CardFooter />
        </div>  
    </div>
, document.getElementById('root'));
registerServiceWorker();

//social card should be a re-usable component 
