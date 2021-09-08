import React from 'react';
import { Link } from 'react-router-dom';
import { FaEnvelope, FaLock } from 'react-icons/fa';

const Login = () => {
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
                    <span><FaEnvelope/></span>
                    <input placeholder="Adresse email ou nom d'utilisateur" autoComplete="off" required/>
                </div>

                <div className="form-group">
                    <span><FaLock /></span>
                    <input placeholder="Adresse email ou nom d'utilisateur" autoComplete="off" required/>
                </div>

                <div className="form-group form-group-forget">
                    <Link to="mot_de_passe_oublie" className="linkForget">Mot de passe oublié !</Link>      
                </div>
                
                <div className="form-group">
                    <button className="btnSubmit">se connecter</button>      
                </div>

                <div className="form-group">
                    <p>Vous n'avez pas de compte !<Link to="inscription" className="btnCurrentForm">s'inscrire</Link></p>      
                </div>

            </form>
        </div>
        </div>
    )
}

export default Login;
