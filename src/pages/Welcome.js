import React from 'react';
import AppBar from './../components/AppBar';
import Quiz from './../components/Quiz';

const Welcome = () => {
    return (
        <div className="mainWelcome">
            <div className="welcomeHead">
                <AppBar />
            </div>
            <div className="welcomeBody">
                <Quiz />
            </div>
        </div>
    )
}

export default Welcome
