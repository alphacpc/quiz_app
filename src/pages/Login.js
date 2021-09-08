import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './../assets/images/Logo4.png';


const Login = () => {
    return (
        <div className="mainLogin mainChild">
            <form>


                <div className="form-group-head">
                    <img src={Logo}/>
                </div>

                <div className="form-group-error">
                    <p>Identifiant ou mot de passe incorrect !</p>
                </div>


                <div className="form-group">
                    <span>User</span>
                    <input placeholder="Adresse email ou nom d'utilisateur"/>
                </div>

                <div className="form-group">
                    <span>Key</span>
                    <input placeholder="Adresse email ou nom d'utilisateur"/>
                </div>

                <div className="form-group form-group-forget">
                    <Link to="inscription" className="linkForget">Mot de passe oublié !</Link>      
                </div>
                
                <div className="form-group">
                    <button className="btnSubmit">se connecter</button>      
                </div>

                <div className="form-group">
                    <p>Vous n'avez pas de compte !<button className="btnCurrentForm">s'inscrire</button></p>      
                </div>

            </form>
        </div>
    )
}

export default Login
