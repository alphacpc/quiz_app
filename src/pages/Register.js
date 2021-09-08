import React from 'react';
import { Link } from 'react-router-dom';


const Register = () => {
    return (

        <div className="Auth">

        <div className="mainRegister mainChild">
            <form>

                <div className="form-group-head">
                    <h1 className="titleApp">jangOo</h1>
                </div>

                <div className="form-group-error">
                    <p>Identifiant ou mot de passe incorrect !</p>
                </div>

                <div className="form-group">
                    <input placeholder="Entrer votre Prénom et Nom de famille" autocomplete="off" required/>
                </div>

                <div className="form-group">
                    <input placeholder="Entrer votre adresse e-mail" autocomplete="off" required/>
                </div>

                <div className="form-group">
                    <input placeholder="Entrer votre mot de passe" autocomplete="off" required/>
                </div>

                <div className="form-group">
                    <input placeholder="Veuillez confirmer votre mot de passe" autocomplete="off" required/>
                </div>


                <div className="form-group">
                    <button className="btnSubmit">s'inscrire</button>      
                </div>

                <div className="form-group">
                    <p>Vous avez deja un compte !<Link to="connexion" className="btnCurrentForm">connectez-vous</Link></p>      
                </div>

            </form>
        </div>

        </div>
    )
}

export default Register
