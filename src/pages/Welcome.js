import React from 'react';
import AppBar from './../components/AppBar';
import Quiz from './../components/Quiz';

const Welcome = ({userData}) => {
    
    return (
        <div className="mainWelcome">
            <div className="welcomeHead">
                <AppBar userData={userData}  />
            </div>
            <div className="welcomeBody">
                <Quiz userData={userData}/>
            </div>
        </div>
    )
}

export default Welcome
