import React from 'react';
// import ImgNotFound from './../assets/images/'

const NotFound = () => {
    return (
        <div className="Auth">
            <div className="mainChild">
                <img />
                <h2>Oups!</h2>
                <p>Page introuvable</p>
                <button onClick={ () => window.history.back() }>Retour</button>
            </div>
        </div>
    )
}

export default NotFound
