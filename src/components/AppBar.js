import React, { useContext } from 'react';
import FirebaseContext from './../firebases/contextFirebase';

import Logo5 from "./../assets/images/Logo5.png";

const AppBar = ({userData}) => {

    const firebase = useContext(FirebaseContext);

    const handleClick = async () => {

        try{
            return await firebase.logoutUser();
        }
        catch(err){
            console.log(err);
        }
    }

    return (
        <div className="mainAppBar">
            <img src={Logo5} alt="Mon super logo"/>
            <div>
                <span className="currentUser">{userData.fullname}</span>
                <button onClick={ handleClick} id="btnLogout">Deconnexion</button>
            </div>
        </div>
    )
}

export default AppBar
