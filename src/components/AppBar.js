import React, { useContext } from 'react';
import FirebaseContext from './../firebases/contextFirebase';

const AppBar = () => {

    const firebase = useContext(FirebaseContext);

    const handleClick = () => {
        firebase.logoutUser()
        console.log('click disconnect')
    }

    return (
        <div className="mainAppBar">
            <span className="currentUser">Alphacpc</span>
            <button onClick={ handleClick} id="btnLogout">Deconnexion</button>
        </div>
    )
}

export default AppBar
