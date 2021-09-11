import React, { useContext } from 'react';
import FirebaseContext from './../firebases/contextFirebase';

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
            <span className="currentUser">{userData.fullname}</span>
            <button onClick={ handleClick} id="btnLogout">Deconnexion</button>
        </div>
    )
}

export default AppBar
