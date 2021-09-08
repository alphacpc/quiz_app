import React from 'react';
import { Link } from 'react-router-dom';

const ForgetPassword = () => {
    return (
        <div className="Auth">
        <div className="mainLogin mainChild">
            <form>


                <div className="form-group-head">
                    <h1 className="titleApp">jangOo</h1>
                </div>

                <div className="form-group-error">
                    <p>Identifiant ou mot de passe incorrect !</p>
                </div>


                <div className="form-group">
                    <span>User</span>
                    <input placeholder="Veuillez entrer votre adresse e-mail"/>
                </div>

                
                <div className="form-group">
                    <button className="btnSubmit">Envoyer</button>      
                </div>

                <div className="form-group">
                    <p>Vous avez deja un compte !<Link to="connexion" className="btnCurrentForm">se connecter</Link></p>      
                </div>

            </form>
        </div>
        </div>
    )
}

export default ForgetPassword
