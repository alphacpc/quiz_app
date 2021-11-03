import React from 'react';
import Logo from './../assets/images/Logo5.png'

const NotFound = () => {
    return (
        <div className="Auth NotFoundContainer">
            <div className="mainChild">
                <img src={Logo} alt="notFound"/>
                <h2>Oups!</h2>
                <p>Page introuvable</p>
                <button onClick={ () => window.history.back() }>Retour</button>
            </div>
        </div>
    )
}

export default NotFound
